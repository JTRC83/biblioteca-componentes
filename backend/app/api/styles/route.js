// GET /api/styles — lista todos los style tags únicos con conteo
// PRD-03: Backend Next.js + API REST del catálogo
import { getStats } from '@/lib/catalog'

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600',
}

export async function GET(request) {
  const { byStyle } = getStats()
  const styles = Object.entries(byStyle)
    .map(([style, count]) => ({ style, count }))
    .sort((a, b) => b.count - a.count)

  return Response.json({ styles }, { headers: CACHE_HEADERS })
}