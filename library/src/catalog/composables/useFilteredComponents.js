import { computed } from 'vue'
import { components } from '@/components'
import { useFiltersStore } from '@/catalog/stores/filters'
import { useFavoritesStore } from '@/catalog/stores/favorites'

export function useFilteredComponents(source = null) {
  const filters = useFiltersStore()
  const favs = useFavoritesStore()

  const list = computed(() => {
    const sourceItems = source?.value ?? components

    let items = sourceItems.slice()

    // Filtro de búsqueda
    const q = filters.search.trim().toLowerCase()
    if (q) {
      items = items.filter((c) => {
        const inName = c.name.toLowerCase().includes(q)
        const inId = c.id.toLowerCase().includes(q)
        const inTag = (c.tags || []).some((t) => t.toLowerCase().includes(q))
        return inName || inId || inTag
      })
    }

    // Filtro de tags
    if (filters.tags.length) {
      items = items.filter((c) => filters.tags.every((t) => (c.tags || []).includes(t)))
    }

    // Orden
    switch (filters.sort) {
      case 'name-asc':
        items.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        items.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'newest':
        items.sort((a, b) => (a.id < b.id ? 1 : -1))
        break
      case 'default':
      default:
        break
    }

    return items
  })

  return {
    list,
    filters,
    favs
  }
}
