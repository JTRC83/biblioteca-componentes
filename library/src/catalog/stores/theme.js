import { defineStore } from 'pinia'

const STORAGE_KEY = 'biblioteca-theme'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'dark'
  }),
  actions: {
    init() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'dark' || stored === 'light') {
          this.theme = stored
        }
      } catch (e) {
        // localStorage no disponible
      }
      this.apply()
    },
    apply() {
      document.documentElement.setAttribute('data-theme', this.theme)
    },
    toggle() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, this.theme)
      } catch (e) {
        // ignore
      }
      this.apply()
    },
    set(theme) {
      if (theme !== 'dark' && theme !== 'light') return
      this.theme = theme
      try {
        localStorage.setItem(STORAGE_KEY, theme)
      } catch (e) {
        // ignore
      }
      this.apply()
    }
  },
  getters: {
    isDark: (state) => state.theme === 'dark'
  }
})
