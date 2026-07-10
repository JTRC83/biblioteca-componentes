// GET /api/components/search?q=button — búsqueda full-text
// PRD-03: Backend Next.js + API REST del catálogo
import { searchComponents } from '@/lib/catalog'

/**
 * Elimina html y css de un componente para respuestas ligeras.
 */
function stripCode(component) {
  const { html, css, ...rest } = component
  return rest
}

/**
 * Pagina un array de resultados.
 */
function paginate(items, page, limit) {
  const total = items.length
  const totalPages = Math.max(1, Math.ceil(total / limit))
  const start = (page - 1) * limit
  const data = items.slice(start, start + limit)
  return { data, total, page, limit, totalPages, hasMore: page < totalPages }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const q = searchParams.get('q')
  if (!q || !q.trim()) {
    return Response.json(
      { error: 'Query parameter "q" is required' },
      { status: 400 }
    )
  }

  const page = parseInt(searchParams.get('page'), 10) || 1
  const rawLimit = parseInt(searchParams.get('limit'), 10) || 20
  const limit = Math.min(rawLimit, 100)
  const includeCode = searchParams.get('include') === 'code'

  const results = searchComponents(q)
  const paginated = paginate(results, page, limit)

  const data = includeCode ? paginated.data : paginated.data.map(stripCode)

  return Response.json({
    data,
    total: paginated.total,
    page: paginated.page,
    limit: paginated.limit,
    totalPages: paginated.totalPages,
    hasMore: paginated.hasMore,
    query: q,
  })
}