// Health check endpoint
// PRD-03: Backend Next.js + API REST del catálogo
export async function GET(request) {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: '@biblioteca/backend'
  })
}