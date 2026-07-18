import { defineStore } from 'pinia'
import { designSystems, getDesignSystemById } from '@/catalog/data/designSystems'

export const useDesignStore = defineStore('design', {
  state: () => ({
    items: designSystems,
    activeId: null
  }),
  getters: {
    active(state) {
      return state.activeId ? getDesignSystemById(state.activeId) : null
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