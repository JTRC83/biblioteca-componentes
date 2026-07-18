<script setup>
import { categories } from '@/catalog/data/categories'
import { stats } from '@/components'
import { designStats } from '@/catalog/data/designSystems'
import { landingStats } from '@/catalog/data/landings'
import { Squares2X2Icon, HeartIcon, SwatchIcon, RectangleStackIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__inner">
      <div class="app-sidebar__group">
        <RouterLink to="/all" class="app-sidebar__item" active-class="is-active" exact-active-class="is-active">
          <Squares2X2Icon class="app-sidebar__icon" />
          <span>Todos</span>
          <span class="app-sidebar__count">{{ stats.total }}</span>
        </RouterLink>
        <RouterLink to="/favorites" class="app-sidebar__item" active-class="is-active">
          <HeartIcon class="app-sidebar__icon" />
          <span>Favoritos</span>
        </RouterLink>
        <RouterLink to="/design" class="app-sidebar__item" active-class="is-active">
          <SwatchIcon class="app-sidebar__icon" />
          <span>Design Systems</span>
          <span class="app-sidebar__count">{{ designStats.total }}</span>
        </RouterLink>
        <RouterLink to="/landings" class="app-sidebar__item" active-class="is-active">
          <RectangleStackIcon class="app-sidebar__icon" />
          <span>Landings</span>
          <span class="app-sidebar__count">{{ landingStats.total }}</span>
        </RouterLink>
      </div>

      <div class="app-sidebar__group">
        <h3 class="app-sidebar__heading">Categorías</h3>
        <RouterLink
          v-for="cat in categories"
          :key="cat.slug"
          :to="`/category/${cat.slug}`"
          class="app-sidebar__item"
          active-class="is-active"
        >
          <component :is="cat.icon" class="app-sidebar__icon" />
          <span>{{ cat.name }}</span>
          <span class="app-sidebar__count">{{ stats.byCategory[cat.slug] || 0 }}</span>
        </RouterLink>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.app-sidebar {
  position: sticky;
  top: 64px;
  align-self: flex-start;
  width: 240px;
  flex-shrink: 0;
  height: calc(100vh - 64px);
  background: var(--bg-surface);
  border-right: 1px solid var(--border-subtle);
  overflow-y: auto;
}

.app-sidebar__inner {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 14px;
}

.app-sidebar__group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.app-sidebar__heading {
  margin: 0 0 8px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.app-sidebar__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.15s ease;
}

.app-sidebar__item:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.app-sidebar__item.is-active {
  background: var(--accent-soft);
  color: var(--accent);
}

.app-sidebar__icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.app-sidebar__count {
  margin-left: auto;
  font-size: 11px;
  color: var(--text-muted);
  background: var(--bg-input);
  padding: 1px 8px;
  border-radius: 999px;
  font-weight: 600;
}

.app-sidebar__item.is-active .app-sidebar__count {
  background: var(--accent);
  color: var(--accent-contrast);
}

@media (max-width: 768px) {
  .app-sidebar {
    position: sticky;
    top: 56px;
    width: 100%;
    max-height: 180px;
    border-right: none;
    border-bottom: 1px solid var(--border-subtle);
    z-index: 40;
  }
  .app-sidebar__inner {
    flex-direction: row;
    overflow-x: auto;
    padding: 10px 14px;
    gap: 12px;
  }
  .app-sidebar__group {
    flex-direction: row;
    flex-shrink: 0;
  }
  .app-sidebar__heading { display: none; }
  .app-sidebar__count { display: none; }
  .app-sidebar__item {
    flex-shrink: 0;
    padding: 6px 10px;
    font-size: 12px;
  }
  .app-sidebar__icon { width: 16px; height: 16px; }
}
</style>
