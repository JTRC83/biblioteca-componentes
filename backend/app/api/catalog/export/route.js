// GET /api/catalog/export — devuelve el catálogo completo en JSON
// PRD-03: Backend Next.js + API REST del catálogo
import { loadCatalog } from '@/lib/catalog'

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600',
}

export async function GET(request) {
  const catalog = loadCatalog()
  return Response.json(catalog, { headers: CACHE_HEADERS })
}