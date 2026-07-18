import { defineStore } from 'pinia'
import { landings, getLandingById } from '@/catalog/data/landings'

export const useLandingStore = defineStore('landing', {
  state: () => ({
    items: landings,
    activeId: null
  }),
  getters: {
    active(state) {
      return state.activeId ? getLandingById(state.activeId) : null
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