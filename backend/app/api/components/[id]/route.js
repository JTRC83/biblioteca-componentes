// GET /api/components/:id — detalle completo de un componente
// PRD-03: Backend Next.js + API REST del catálogo
import { getComponentById } from '@/lib/catalog'

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600',
}

export async function GET(request, { params }) {
  const { id } = await params
  const component = getComponentById(id)

  if (!component) {
    return Response.json({ error: 'Not found' }, { status: 404 })
  }

  return Response.json(component, { headers: CACHE_HEADERS })
}