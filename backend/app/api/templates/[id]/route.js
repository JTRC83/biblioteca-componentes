// GET /api/templates/:id — detalle completo de una plantilla
// PRD-05: Catálogo de plantillas web
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..', '..', '..', '..', '..')

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600',
}

export async function GET(request, { params }) {
  const { id } = await params

  // Buscar la plantilla en el index
  let index
  try {
    index = JSON.parse(readFileSync(join(root, 'templates', 'index.json'), 'utf-8'))
  } catch {
    return Response.json({ error: 'Templates index not found' }, { status: 500 })
  }

  const meta = index.templates.find((t) => t.id === id)
  if (!meta) {
    return Response.json({ error: 'Template not found' }, { status: 404 })
  }

  // Cargar archivos completos
  const basePath = join(root, 'templates', meta.path)
  const files = {}

  for (const file of ['prompt.md', 'design.md', 'components.md']) {
    const filePath = join(basePath, file)
    if (existsSync(filePath)) {
      files[file] = readFileSync(filePath, 'utf-8')
    }
  }

  return Response.json({
    ...meta,
    prompt: files['prompt.md'] || '',
    design: files['design.md'] || '',
    components: files['components.md'] || '',
  }, { headers: CACHE_HEADERS })
}