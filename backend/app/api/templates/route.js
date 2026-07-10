// GET /api/templates — lista todas las plantillas web
// PRD-05: Catálogo de plantillas web
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..', '..', '..', '..')

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600',
}

let cache = null

function loadTemplates() {
  if (cache) return cache
  try {
    const path = join(root, 'templates', 'index.json')
    const raw = readFileSync(path, 'utf-8')
    cache = JSON.parse(raw)
    return cache
  } catch (e) {
    return { templates: [], total: 0 }
  }
}

export async function GET(request) {
  const { url } = request
  const { searchParams } = new URL(url)

  const data = loadTemplates()
  let templates = data.templates || []

  // Filtros
  const type = searchParams.get('type')
  const category = searchParams.get('category')
  const industry = searchParams.get('industry')
  const style = searchParams.get('style')

  if (type) templates = templates.filter((t) => t.type === type)
  if (category) templates = templates.filter((t) => t.category === category)
  if (industry) templates = templates.filter((t) => t.industry?.includes(industry))
  if (style) templates = templates.filter((t) => t.styleTags?.includes(style))

  return Response.json({
    total: templates.length,
    templates,
  }, { headers: CACHE_HEADERS })
}