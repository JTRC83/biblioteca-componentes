import { defineStore } from 'pinia'
import { components, getComponentById } from '@/components'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    items: components,
    activeId: null
  }),
  getters: {
    byCategory: (state) => {
      return (category) => state.items.filter((c) => c.category === category)
    },
    allTags: (state) => {
      const set = new Set()
      state.items.forEach((c) => (c.tags || []).forEach((t) => set.add(t)))
      return [...set].sort()
    },
    active(state) {
      return state.activeId ? getComponentById(state.activeId) : null
    }
  },
  actions: {
    open(id) {
      this.activeId = id
    },
    close() {
      this.activeId = null
    }
  }
})
