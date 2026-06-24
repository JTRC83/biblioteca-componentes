import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'biblioteca-per-page'
const DEFAULT_OPTIONS = [12, 24, 48, 96, 'all']

function loadStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return 12
    const n = Number(raw)
    if (Number.isFinite(n) && DEFAULT_OPTIONS.includes(n)) return n
    if (raw === 'all') return 'all'
    return 12
  } catch (e) {
    return 12
  }
}

function saveStored(value) {
  try {
    localStorage.setItem(STORAGE_KEY, String(value))
  } catch (e) {
    // ignore
  }
}

/**
 * Pagina una lista reactiva.
 *
 * @param {import('vue').Ref<Array> | import('vue').ComputedRef<Array>} source Lista fuente
 * @param {Array<number|string>} options Opciones para "por página". Por defecto [12, 24, 48, 96, 'all']
 */
export function usePagination(source, options = DEFAULT_OPTIONS) {
  const perPage = ref(loadStored())
  const page = ref(1)

  const totalPages = computed(() => {
    if (perPage.value === 'all') return 1
    return Math.max(1, Math.ceil(source.value.length / perPage.value))
  })

  const paginated = computed(() => {
    if (perPage.value === 'all') return source.value
    const size = perPage.value
    const start = (page.value - 1) * size
    return source.value.slice(start, start + size)
  })

  const startIndex = computed(() => {
    if (source.value.length === 0) return 0
    if (perPage.value === 'all') return 1
    return (page.value - 1) * perPage.value + 1
  })

  const endIndex = computed(() => {
    if (source.value.length === 0) return 0
    if (perPage.value === 'all') return source.value.length
    return Math.min(page.value * perPage.value, source.value.length)
  })

  const setPage = (p) => {
    const target = Math.min(Math.max(1, Number(p) || 1), totalPages.value)
    page.value = target
    // Scroll al inicio de la página al cambiar de página
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const next = () => setPage(page.value + 1)
  const prev = () => setPage(page.value - 1)

  const setPerPage = (value) => {
    perPage.value = value
    saveStored(value)
    page.value = 1
  }

  // Reset a página 1 cuando cambia la lista (filtros, búsqueda, etc.)
  watch(
    () => source.value.length,
    () => {
      if (page.value > totalPages.value) {
        page.value = totalPages.value
      }
    }
  )

  // Reset a página 1 cuando cambia la query de búsqueda o filtros
  // Detectamos cambios en la "identidad" del array
  watch(
    () => source.value,
    (newVal, oldVal) => {
      if (newVal !== oldVal && page.value > totalPages.value) {
        page.value = totalPages.value
      }
    },
    { flush: 'post' }
  )

  return {
    page,
    perPage,
    totalPages,
    paginated,
    startIndex,
    endIndex,
    setPage,
    next,
    prev,
    setPerPage,
    options
  }
}
