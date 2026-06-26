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
      const naturalW = inner.scrollWidth
      const naturalH = inner.scrollHeight
      if (naturalW <= 0 || naturalH <= 0) return
      const maxW = container.clientWidth - 8
      const maxH = container.clientHeight - 8
      const scaleW = Math.min(1, maxW / naturalW)
      const scaleH = Math.min(1, maxH / naturalH)
      const scale = Math.min(scaleW, scaleH)
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
  height: 260px;
  min-height: 260px;
  max-height: 260px;
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
  transform-origin: center center;
  flex-shrink: 0;
}
</style>
