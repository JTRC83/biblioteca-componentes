<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useThemeStore } from '@/catalog/stores/theme'
import { useFavoritesStore } from '@/catalog/stores/favorites'
import { MagnifyingGlassIcon, SunIcon, MoonIcon, HeartIcon, BookmarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()
const theme = useThemeStore()
const favs = useFavoritesStore()

const search = ref('')
const isSearchOpen = ref(false)

const onSearch = () => {
  router.push({ name: 'all', query: { q: search.value } })
  isSearchOpen.value = false
}

const isHome = computed(() => route.name === 'home')
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <RouterLink to="/" class="app-header__brand">
        <span class="app-header__logo">B</span>
        <span class="app-header__name">Biblioteca</span>
      </RouterLink>

      <nav class="app-header__nav">
        <RouterLink to="/all" class="app-header__link" active-class="is-active">Todos</RouterLink>
        <RouterLink to="/favorites" class="app-header__link" active-class="is-active">
          <HeartIcon class="app-header__icon" />
          <span v-if="favs.count" class="app-header__badge">{{ favs.count }}</span>
        </RouterLink>
      </nav>

      <div class="app-header__actions">
        <div class="app-header__search">
          <MagnifyingGlassIcon class="app-header__search-icon" />
          <input
            v-model="search"
            type="search"
            placeholder="Buscar componentes…"
            @keyup.enter="onSearch"
          />
        </div>

        <button
          class="app-header__icon-btn"
          :title="theme.isDark ? 'Cambiar a claro' : 'Cambiar a oscuro'"
          @click="theme.toggle()"
        >
          <SunIcon v-if="theme.isDark" class="app-header__icon" />
          <MoonIcon v-else class="app-header__icon" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  backdrop-filter: blur(8px);
}

.app-header__inner {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 24px;
  max-width: 1600px;
  margin: 0 auto;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  color: var(--text-primary);
  text-decoration: none;
}

.app-header__logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  color: #fff;
  font-weight: 800;
  font-size: 16px;
}

.app-header__nav {
  display: flex;
  gap: 4px;
  flex: 1;
}

.app-header__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.15s ease;
}

.app-header__link:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.app-header__link.is-active {
  color: var(--accent);
  background: var(--accent-soft);
}

.app-header__icon {
  width: 18px;
  height: 18px;
}

.app-header__badge {
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.app-header__search {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 0 10px 0 36px;
  width: 240px;
  transition: border-color 0.15s ease;
}

.app-header__search:focus-within {
  border-color: var(--accent);
}

.app-header__search input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 8px 0;
  color: var(--text-primary);
  font-size: 13px;
}

.app-header__search input::placeholder {
  color: var(--text-muted);
}

.app-header__search-icon {
  position: absolute;
  left: 10px;
  width: 16px;
  height: 16px;
  color: var(--text-muted);
}

.app-header__icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.15s ease;
}

.app-header__icon-btn:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
  border-color: var(--border-default);
}

@media (max-width: 768px) {
  .app-header__inner { gap: 12px; padding: 10px 14px; }
  .app-header__name { display: none; }
  .app-header__search { width: 160px; }
  .app-header__nav { gap: 0; }
  .app-header__link { padding: 8px 10px; }
}
</style>
