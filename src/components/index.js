/**
 * Barrel: importa y registra todos los componentes del catálogo.
 * Cada categoría tiene su carpeta con un .js por componente.
 *
 * Formato de un componente:
 *   export default {
 *     id: 'unique-slug',
 *     name: 'Human name',
 *     category: 'buttons',
 *     tags: ['glow', 'css-only'],
 *     author: 'name',
 *     html: `<button class="...">Click</button>`,
 *     css: `.my-class { ... }`
 *   }
 */

import * as buttons from './buttons'
import * as checkboxes from './checkboxes'
import * as toggles from './toggles'
import * as cards from './cards'
import * as loaders from './loaders'
import * as inputs from './inputs'
import * as radios from './radios'
import * as forms from './forms'
import * as tooltips from './tooltips'
import * as patterns from './patterns'
import * as backgrounds from './backgrounds'
import * as animations from './animations'
import * as analog from './analog'

const groups = [
  buttons,
  checkboxes,
  toggles,
  cards,
  loaders,
  inputs,
  radios,
  forms,
  tooltips,
  patterns,
  backgrounds,
  animations,
  analog
]

export const components = groups.flatMap((g) => Object.values(g))

export function getComponentById(id) {
  return components.find((c) => c.id === id) || null
}

export function getComponentsByCategory(category) {
  return components.filter((c) => c.category === category)
}

export const stats = {
  total: components.length,
  byCategory: groups.reduce((acc, g) => {
    const values = Object.values(g)
    if (values.length) {
      const cat = values[0].category
      acc[cat] = values.length
    }
    return acc
  }, {})
}
