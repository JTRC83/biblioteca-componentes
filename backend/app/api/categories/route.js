// GET /api/categories — lista todas las categorías con conteo
// PRD-03: Backend Next.js + API REST del catálogo
import { getCategories } from '@/lib/catalog'

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600',
}

export async function GET(request) {
  const categories = getCategories()
  return Response.json({ categories }, { headers: CACHE_HEADERS })
}