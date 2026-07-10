// GET /api/components — listado con filtros y paginación
// PRD-03: Backend Next.js + API REST del catálogo
import { getComponentsPaginated } from '@/lib/catalog'

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600',
}

/**
 * Elimina html y css de un componente para respuestas ligeras.
 */
function stripCode(component) {
  const { html, css, ...rest } = component
  return rest
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const filters = {
    category: searchParams.get('category') || undefined,
    tags: searchParams.get('tags') || undefined,
    useCase: searchParams.get('useCase') || undefined,
    style: searchParams.get('style') || undefined,
    complexity: searchParams.get('complexity') || undefined,
  }

  const page = parseInt(searchParams.get('page'), 10) || 1
  const rawLimit = parseInt(searchParams.get('limit'), 10) || 20
  const limit = Math.min(rawLimit, 100) // max 100
  const includeCode = searchParams.get('include') === 'code'

  const result = getComponentsPaginated(filters, page, limit)

  const data = includeCode ? result.data : result.data.map(stripCode)

  return Response.json(
    {
      data,
      total: result.total,
      page: result.page,
      limit: result.limit,
      totalPages: result.totalPages,
      hasMore: result.hasMore,
    },
    { headers: CACHE_HEADERS }
  )
}