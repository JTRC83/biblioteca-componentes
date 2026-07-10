// GET /api/stats — estadísticas del catálogo
// PRD-03: Backend Next.js + API REST del catálogo
import { getStats } from '@/lib/catalog'

export async function GET(request) {
  return Response.json(getStats())
}