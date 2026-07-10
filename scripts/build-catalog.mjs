/**
 * Script de build del catálogo.
 * Lee los componentes de library/src/components/ y genera:
 *   - catalog/json/components.json  (metadatos indexados)
 *   - catalog/md/*.md               (documentación por categoría)
 *
 * PRD-02: Sistema de catalogación de componentes
 *
 * De momento genera el index base sin metadatos enriquecidos.
 * Los metadatos se enriquecerán en fases posteriores.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, basename } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const componentsDir = join(root, 'library', 'src', 'components')

function loadCategoryComponents(categoryDir) {
  const catName = basename(categoryDir)
  const files = readdirSync(categoryDir).filter(
    (f) => f.endsWith('.js') && f !== 'index.js'
  )

  return files.map((file) => {
    const path = join(categoryDir, file)
    const raw = readFileSync(path, 'utf-8')
    // Extraer el export default { ... } con eval
    const module = { exports: {} }
    // eslint-disable-next-line no-eval
    const fn = eval(raw.replace('export default', 'module.exports ='))
    return {
      id: fn.id,
      name: fn.name,
      category: fn.category,
      tags: fn.tags || [],
      author: fn.author || 'unknown',
      source: fn.source || 'uiverse.io',
      html: fn.html || '',
      css: fn.css || '',
      description: fn.description || '',
      useCases: fn.useCases || [],
      complexity: fn.complexity || 'low',
      responsive: fn.responsive !== false,
      darkMode: fn.darkMode || false,
      interactions: fn.interactions || [],
      styles: fn.styles || { styleTags: [] },
      adaptable: fn.adaptable !== false,
      adaptationNotes: fn.adaptationNotes || ''
    }
  })
}

function build() {
  const categories = []
  const allComponents = []

  const dirs = readdirSync(componentsDir).filter((d) =>
    statSync(join(componentsDir, d)).isDirectory()
  )

  for (const dir of dirs) {
    const comps = loadCategoryComponents(join(componentsDir, dir))
    allComponents.push(...comps)
    categories.push({
      slug: dir,
      name: dir.charAt(0).toUpperCase() + dir.slice(1),
      count: comps.length
    })
  }

  const catalog = {
    generatedAt: new Date().toISOString(),
    total: allComponents.length,
    categories,
    components: allComponents
  }

  // Escribir JSON
  const jsonPath = join(root, 'catalog', 'json', 'components.json')
  writeFileSync(jsonPath, JSON.stringify(catalog, null, 2))
  console.log(`[catalog] JSON: ${allComponents.length} componentes → ${jsonPath}`)

  // Escribir MD por categoría
  for (const cat of categories) {
    const comps = allComponents.filter((c) => c.category === cat.slug)
    const lines = [
      `# ${cat.name}`,
      '',
      `${cat.count} componentes`,
      '',
      '| ID | Nombre | Tags | Autor | Descripción |',
      '|----|--------|------|-------|-------------|'
    ]
    for (const c of comps) {
      const tags = c.tags.join(', ')
      const desc = c.description || '—'
      lines.push(`| \`${c.id}\` | ${c.name} | ${tags} | ${c.author} | ${desc} |`)
    }
    lines.push('')
    const mdPath = join(root, 'catalog', 'md', `${cat.slug}.md`)
    writeFileSync(mdPath, lines.join('\n'))
    console.log(`[catalog] MD: ${cat.slug}.md (${cat.count} componentes)`)
  }

  // Index MD
  const indexLines = [
    '# Catálogo de Componentes',
    '',
    `Generado: ${catalog.generatedAt}`,
    '',
    `**Total: ${catalog.total} componentes en ${categories.length} categorías**`,
    '',
    '| Categoría | Componentes | Archivo |',
    '|-----------|------------|---------|'
  ]
  for (const cat of categories) {
    indexLines.push(`| ${cat.name} | ${cat.count} | [${cat.slug}.md](./${cat.slug}.md) |`)
  }
  indexLines.push('')
  const indexPath = join(root, 'catalog', 'md', 'index.md')
  writeFileSync(indexPath, indexLines.join('\n'))
  console.log(`[catalog] MD index → ${indexPath}`)
}

build()