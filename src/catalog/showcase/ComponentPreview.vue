<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
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

onMounted(() => {
  mountStyle()
  render()
})

onBeforeUnmount(() => {
  if (styleEl.value) {
    styleEl.value.remove()
    styleEl.value = null
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
  }
)
</script>

<template>
  <div :class="['c-preview', contained ? 'c-preview--contained' : 'c-preview--card']">
    <div ref="wrapperEl" :class="scopeId" class="c-preview__inner"></div>
  </div>
</template>

<style scoped>
.c-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.c-preview--card {
  min-height: 100px;
}

.c-preview--contained {
  min-height: 320px;
  padding: 24px;
}

.c-preview__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
