import { defineStore } from 'pinia'

const STORAGE_KEY = 'biblioteca-favorites'

function loadFavs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch (e) {
    return []
  }
}

function saveFavs(ids) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch (e) {
    // ignore
  }
}

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    ids: loadFavs()
  }),
  actions: {
    toggle(id) {
      if (this.ids.includes(id)) {
        this.ids = this.ids.filter((x) => x !== id)
      } else {
        this.ids = [...this.ids, id]
      }
      saveFavs(this.ids)
    },
    isFavorite(id) {
      return this.ids.includes(id)
    },
    clear() {
      this.ids = []
      saveFavs(this.ids)
    }
  },
  getters: {
    count: (state) => state.ids.length
  }
})
