// GET /api/use-cases — lista todos los use cases únicos con conteo
// PRD-03: Backend Next.js + API REST del catálogo
import { loadCatalog } from '@/lib/catalog'

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600',
}

export async function GET(request) {
  const { components } = loadCatalog()
  const counts = {}

  for (const c of components) {
    for (const u of c.useCases || []) {
      counts[u] = (counts[u] || 0) + 1
    }
  }

  const useCases = Object.entries(counts)
    .map(([useCase, count]) => ({ useCase, count }))
    .sort((a, b) => b.count - a.count)

  return Response.json({ useCases }, { headers: CACHE_HEADERS })
}