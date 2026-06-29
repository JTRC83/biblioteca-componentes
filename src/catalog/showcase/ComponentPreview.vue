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

const scopedCss = computed(() => scopeCss(props.component.css || '', scopeId.value))

const render = () => {
  if (!wrapperEl.value) return
  wrapperEl.value.innerHTML = props.component.html || ''
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

const applyAutoScale = () => {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    rafId = null
    if (props.contained || !wrapperEl.value || !previewEl.value) return
    const inner = wrapperEl.value
    const container = previewEl.value
    // Medir el contenido natural sin escalado
    inner.style.transform = ''
    // Un segundo frame para asegurar layout con el CSS scoped aplicado
    requestAnimationFrame(() => {
      if (!wrapperEl.value || !previewEl.value) return
      // Medir el contenido del wrapper. Si es 0 (componentes con position:absolute
      // sin tamaño propio), usar el tamaño del contenedor como fallback.
      let naturalW = inner.scrollWidth
      let naturalH = inner.scrollHeight
      const containerW = container.clientWidth
      const containerH = container.clientHeight
      if (naturalW <= 0 || naturalH <= 0) {
        naturalW = containerW
        naturalH = containerH
      }
      if (naturalW <= 0 || naturalH <= 0) return
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
  height: 280px;
  min-height: 280px;
  max-height: 280px;
  overflow: hidden;
  padding: 16px;
}

.c-preview--contained {
  min-height: 320px;
  padding: 24px;
  overflow: auto;
}

.c-preview__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 240px;
  min-height: 240px;
  transform-origin: center center;
  flex-shrink: 0;
  isolation: isolate;
  position: relative;
}
</style>
