import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    search: '',
    sort: 'default',
    tags: [],
    framework: 'all'
  }),
  actions: {
    setSearch(value) {
      this.search = value
    },
    setSort(value) {
      this.sort = value
    },
    toggleTag(tag) {
      if (this.tags.includes(tag)) {
        this.tags = this.tags.filter((t) => t !== tag)
      } else {
        this.tags = [...this.tags, tag]
      }
    },
    clearTags() {
      this.tags = []
    },
    setFramework(value) {
      this.framework = value
    },
    reset() {
      this.search = ''
      this.sort = 'default'
      this.tags = []
      this.framework = 'all'
    }
  }
})
