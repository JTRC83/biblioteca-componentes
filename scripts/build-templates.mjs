/**
 * Script de build del catálogo de plantillas.
 * Lee las plantillas de templates/ y genera:
 *   - templates/index.json  (índice de todas las plantillas)
 *
 * PRD-05: Catálogo de plantillas web
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const templatesDir = join(root, 'templates')

function loadTemplates() {
  const templates = []

  // Leer subdirectorios: landing/, hero/, design/
  const categories = readdirSync(templatesDir).filter((d) => {
    const p = join(templatesDir, d)
    return statSync(p).isDirectory() && d !== 'node_modules'
  })

  for (const cat of categories) {
    const catDir = join(templatesDir, cat)
    const templateDirs = readdirSync(catDir).filter((d) => {
      const p = join(catDir, d)
      try { return statSync(p).isDirectory() } catch { return false }
    })

    for (const tmplDir of templateDirs) {
      const metaPath = join(catDir, tmplDir, 'meta.json')
      if (!existsSync(metaPath)) continue

      const meta = JSON.parse(readFileSync(metaPath, 'utf-8'))

      // Leer archivos si existen
      let prompt = ''
      let design = ''
      let components = ''

      const promptPath = join(catDir, tmplDir, 'prompt.md')
      if (existsSync(promptPath)) prompt = readFileSync(promptPath, 'utf-8')

      const designPath = join(catDir, tmplDir, 'design.md')
      if (existsSync(designPath)) design = readFileSync(designPath, 'utf-8')

      const componentsPath = join(catDir, tmplDir, 'components.md')
      if (existsSync(componentsPath)) components = readFileSync(componentsPath, 'utf-8')

      templates.push({
        ...meta,
        category: cat,
        path: `${cat}/${tmplDir}`,
        prompt,
        design,
        components
      })
    }
  }

  return templates
}

function build() {
  const templates = loadTemplates()

  const index = {
    generatedAt: new Date().toISOString(),
    total: templates.length,
    templates: templates.map((t) => ({
      id: t.id,
      name: t.name,
      type: t.type,
      category: t.category,
      path: t.path,
      description: t.description,
      sections: t.sections,
      styleTags: t.styleTags,
      colorScheme: t.colorScheme,
      typography: t.typography,
      responsive: t.responsive,
      complexity: t.complexity,
      industry: t.industry
    }))
  }

  const indexPath = join(templatesDir, 'index.json')
  writeFileSync(indexPath, JSON.stringify(index, null, 2))
  console.log(`[templates] ${templates.length} plantillas → ${indexPath}`)

  templates.forEach((t) => {
    console.log(`  ${t.id}: ${t.name} (${t.path})`)
  })
}

build()