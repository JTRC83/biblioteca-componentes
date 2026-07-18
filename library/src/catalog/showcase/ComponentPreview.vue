<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch, nextTick } from 'vue'
import { scopeCss, createScope } from '@/utils/scopeCss'

const props = defineProps({
  component: {
    type: Object,
    required: true
  },
  /**
   * Si true, aplica el scope sobre el contenedor y respeta su tamaño.
   * Si false, el html se inyecta en un wrapper interno (modo card).
   */
  contained: {
    type: Boolean,
    default: false
  }
})

const scopeId = ref(createScope())
const styleEl = ref(null)
const wrapperEl = ref(null)
const previewEl = ref(null)

const scopedCss = computed(() => {
  let css = props.component.css || ''
  const scopeSuffix = scopeId.value.replace(/[^a-zA-Z0-9]/g, '_')
  // Solo renombrar IDs que existen en el HTML del componente
  // (evita corromper hex colors como #ff2a00 que no son IDs)
  const html = props.component.html || ''
  const idRegex = /id="([^"]+)"/g
  let match
  while ((match = idRegex.exec(html)) !== null) {
    const oldId = match[1]
    // Reemplazar #id en CSS SOLO cuando se usa como selector (seguido de :, espacio, ~, +, >, , {, etc.)
    // NO cuando se usa como hex color (seguido de ; o ) o espacio dentro de una declaración)
    css = css.replace(new RegExp(`#${oldId}(?=[\\s:,.~>+\\[{]|$)`, 'gm'), `#${oldId}_${scopeSuffix}`)
    // Reemplazar url(#id) en CSS (clip-path, mask, etc.)
    css = css.replace(new RegExp(`url\\(#${oldId}\\)`, 'g'), `url(#${oldId}_${scopeSuffix})`)
  }
  return scopeCss(css, scopeId.value)
})

const render = () => {
  if (!wrapperEl.value) return
  let html = props.component.html || ''
  // Renombrar IDs y for= para que sean únicos por instancia (evita conflictos
  // cuando el mismo componente aparece en la card y en el modal a la vez)
  const scopeSuffix = scopeId.value.replace(/[^a-zA-Z0-9]/g, '_')
  // Recoger todos los IDs del HTML
  const idMap = new Map()
  const idRegex = /id="([^"]+)"/g
  let match
  while ((match = idRegex.exec(html)) !== null) {
    const oldId = match[1]
    const newId = `${oldId}_${scopeSuffix}`
    idMap.set(oldId, newId)
  }
  // Reemplazar IDs en el HTML
  for (const [oldId, newId] of idMap) {
    html = html.replace(new RegExp(`id="${oldId}"`, 'g'), `id="${newId}"`)
    html = html.replace(new RegExp(`for="${oldId}"`, 'g'), `for="${newId}"`)
    html = html.replace(new RegExp(`url\\(#${oldId}\\)`, 'g'), `url(#${newId})`)
  }
  wrapperEl.value.innerHTML = html
}

const mountStyle = () => {
  if (!styleEl.value) {
    styleEl.value = document.createElement('style')
    styleEl.value.setAttribute('data-scope', scopeId.value)
    document.head.appendChild(styleEl.value)
  }
  styleEl.value.textContent = scopedCss.value
}

let rafId = null

const centerAbsoluteChildren = (root) => {
  // Encontrar todos los elementos con position: absolute dentro del wrapper
  // y aplicar translate(-50%, -50%) si tienen left:50% o top:50% sin transform.
  // Esto centra los componentes absolute que usan left/right/top/bottom sin translate.
  const all = root.querySelectorAll('*')
  for (const el of all) {
    const cs = window.getComputedStyle(el)
    if (cs.position !== 'absolute' && cs.position !== 'fixed') continue
    const left = cs.left
    const top = cs.top
    const right = cs.right
    const transform = cs.transform
    let dx = 0
    let dy = 0
    let needsX = false
    let needsY = false
    if (left === '50%' || left === '50px') {
      if (transform === 'none' || transform === 'matrix(1, 0, 0, 1, 0, 0)') {
        needsX = true
        dx = -50
      }
    }
    if (top === '50%' || top === '50px') {
      if (transform === 'none' || transform === 'matrix(1, 0, 0, 1, 0, 0)') {
        needsY = true
        dy = -50
      }
    }
    if (needsX || needsY) {
      // No aplicar a los elementos con transform-origin de animación (que ya tienen transform)
      // Solo aplicar si el bbox del elemento es medible
      const rect = el.getBoundingClientRect()
      if (rect.width > 0 && rect.height > 0) {
        const xPct = needsX ? -50 : 0
        const yPct = needsY ? -50 : 0
        // Usar transform con porcentaje del propio elemento
        el.style.transform = `translate(${xPct}%, ${yPct}%)`
      }
    }
  }
}

const centerRelativeRoot = (root) => {
  // Si el primer hijo directo del wrapper es position: relative y no tiene
  // display:flex/grid, lo centramos con margin: auto + align-self/justify-self
  const firstChild = root.firstElementChild
  if (!firstChild) return
  const cs = window.getComputedStyle(firstChild)
  if (cs.position !== 'relative') return
  if (cs.display === 'flex' || cs.display === 'grid' || cs.display === 'inline-flex' || cs.display === 'inline-grid') return
  // Si el padre wrapper es grid (que es el caso por defecto), usamos align/justify self
  firstChild.style.margin = 'auto'
  firstChild.style.alignSelf = 'center'
  firstChild.style.justifySelf = 'center'
}

const applyAutoScale = () => {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    rafId = null
    if (!wrapperEl.value || !previewEl.value) return
    const inner = wrapperEl.value
    const container = previewEl.value
    // Medir el contenido natural sin escalado ni restricciones del grid
    inner.style.transform = ''
    inner.style.width = 'max-content'
    inner.style.height = 'max-content'
    // Un segundo frame para asegurar layout con el CSS scoped aplicado
    requestAnimationFrame(() => {
      if (!wrapperEl.value || !previewEl.value) return
      // Restaurar el width/height para que el scale no distorsione proporciones
      inner.style.width = ''
      inner.style.height = ''
      // Centrar elementos absolute que usan left/right/top/bottom sin translate
      // Se ejecuta siempre (tanto en card como en modal) para que elementos
      // interactivos (como labels de switches) sean clickeables
      centerAbsoluteChildren(inner)
      // Centrar el primer hijo relative que no sea flex/grid
      centerRelativeRoot(inner)
      // Esperar un frame más a que el layout se asiente tras restaurar width/height
      requestAnimationFrame(() => {
        if (!wrapperEl.value || !previewEl.value) return
        // Medir el contenido del wrapper. Si es 0 (componentes con position:absolute
        // sin tamaño propio), NO aplicar scale — dejar que el componente se posicione
        // según sus propias reglas absolutas dentro del wrapper.
        const naturalW = inner.scrollWidth
        const naturalH = inner.scrollHeight
        // Obtener el espacio real disponible descontando el padding del contenedor
        const cs = window.getComputedStyle(container)
        const padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight)
        const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom)
        const containerW = container.clientWidth - padX
        const containerH = container.clientHeight - padY
        if (naturalW <= 0 || naturalH <= 0) {
          // Componente sin tamaño medible (todos sus elementos son absolute).
          // NO escalar — dejar renderizar tal cual.
          inner.style.transform = ''
          return
        }
        const maxW = containerW - 8
        const maxH = containerH - 8
        const scaleW = maxW / naturalW
        const scaleH = maxH / naturalH
        // Componentes más pequeños que la preview: NO se escalan (escala 1)
        // Componentes ligeramente más grandes (hasta 1.15x): se dejan tal cual
        //   (mejor que escalarlos, ya que la distorsión es peor que el corte)
        // Componentes claramente más grandes (>1.15x): se escalan al tamaño que cabe
        const naturalScale = Math.min(scaleW, scaleH, 1)
        const ratio = Math.max(naturalW / maxW, naturalH / maxH)
        const scale = ratio > 1.15 ? naturalScale : 1
        inner.style.transform = scale < 1 ? `scale(${scale})` : ''
      })
    })
  })
}

onMounted(() => {
  mountStyle()
  render()
  nextTick(applyAutoScale)
})

onBeforeUnmount(() => {
  if (styleEl.value) {
    styleEl.value.remove()
    styleEl.value = null
  }
  if (rafId) cancelAnimationFrame(rafId)
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', applyAutoScale)
  }
})

watch(
  () => [props.component?.id, props.component?.html, props.component?.css],
  () => {
    // Generar nuevo scope por si cambia el componente
    if (styleEl.value) {
      styleEl.value.remove()
      styleEl.value = null
    }
    scopeId.value = createScope()
    mountStyle()
    render()
    nextTick(applyAutoScale)
  }
)

if (typeof window !== 'undefined') {
  window.addEventListener('resize', applyAutoScale)
}
</script>

<template>
  <div ref="previewEl" :class="['c-preview', contained ? 'c-preview--contained' : 'c-preview--card']">
    <div ref="wrapperEl" :class="scopeId" class="c-preview__inner"></div>
  </div>
</template>

<style scoped>
.c-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}

.c-preview--card {
  height: 260px;
  min-height: 260px;
  max-height: 260px;
  overflow: hidden;
  padding: 12px;
}

.c-preview--contained {
  min-height: 320px;
  padding: 24px;
  overflow: auto;
  flex: 1;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
}

.c-preview--contained .c-preview__inner {
  min-height: 280px;
  height: 100%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
}

.c-preview__inner {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  transform-origin: center center;
  flex-shrink: 0;
  isolation: isolate;
  position: relative;
  overflow: visible;
  color: #000;
}
</style>
