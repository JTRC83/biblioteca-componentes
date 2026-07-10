// GET / — información del API
// PRD-03: Backend Next.js + API REST del catálogo
export async function GET(request) {
  return Response.json({
    name: '@biblioteca/backend',
    version: '0.1.0',
    description: 'API REST para la biblioteca de componentes',
    endpoints: [
      { method: 'GET', path: '/api/health', description: 'Health check + stats' },
      { method: 'GET', path: '/api/components', description: 'Listar componentes con filtros y paginación' },
      { method: 'GET', path: '/api/components/:id', description: 'Detalle completo de un componente' },
      { method: 'GET', path: '/api/components/search?q=', description: 'Búsqueda full-text' },
      { method: 'GET', path: '/api/categories', description: 'Listar categorías con conteo' },
      { method: 'GET', path: '/api/styles', description: 'Listar style tags con conteo' },
      { method: 'GET', path: '/api/use-cases', description: 'Listar use cases con conteo' },
      { method: 'GET', path: '/api/stats', description: 'Estadísticas del catálogo' },
      { method: 'GET', path: '/api/catalog/export', description: 'Exportar catálogo completo' },
      { method: 'GET', path: '/api/templates', description: 'Plantillas (placeholder PRD-05)' },
    ],
  })
}