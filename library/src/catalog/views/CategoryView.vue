<script setup>
import { computed, watch } from 'vue'
import ComponentCard from '@/catalog/layout/ComponentCard.vue'
import ComponentModal from '@/catalog/showcase/ComponentModal.vue'
import Pagination from '@/catalog/layout/Pagination.vue'
import PerPageSelect from '@/catalog/layout/PerPageSelect.vue'
import { useCatalogStore } from '@/catalog/stores/catalog'
import { useFiltersStore } from '@/catalog/stores/filters'
import { useFilteredComponents } from '@/catalog/composables/useFilteredComponents'
import { usePagination } from '@/catalog/composables/usePagination'
import { getCategoryBySlug } from '@/catalog/data/categories'
import { XMarkIcon, FunnelIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  slug: { type: String, required: true }
})

const catalog = useCatalogStore()
const filters = useFiltersStore()

const category = computed(() => getCategoryBySlug(props.slug))
const source = computed(() => (category.value ? catalog.items.filter((c) => c.category === category.value.slug) : []))

const { list } = useFilteredComponents(source)

const {
  paginated,
  page,
  perPage,
  totalPages,
  startIndex,
  endIndex,
  setPage,
  setPerPage,
  options: perPageOptions
} = usePagination(list)

const open = (component) => catalog.open(component.id)

const classicLoaders = computed(() => paginated.value.filter(c => c.iconCategory !== 'SVG Spinners'))
const svgSpinners = computed(() => paginated.value.filter(c => c.iconCategory === 'SVG Spinners'))

watch(list, () => setPage(1), { flush: 'post' })
</script>

<template>
  <div v-if="category" class="cat-view">
    <header class="cat-view__head">
      <div class="cat-view__title-row">
        <component :is="category.icon" class="cat-view__icon" />
        <div>
          <h1 class="cat-view__title">{{ category.name }}</h1>
          <p class="cat-view__desc">{{ category.description }}</p>
        </div>
      </div>

      <div class="cat-view__controls">
        <div class="cat-view__search">
          <input
            type="search"
            placeholder="Buscar en esta categoría…"
            :value="filters.search"
            @input="filters.setSearch($event.target.value)"
          />
        </div>

        <PerPageSelect
          :model-value="perPage"
          :options="perPageOptions"
          @update:model-value="setPerPage"
        />
      </div>
    </header>

    <div v-if="filters.tags.length" class="cat-view__filters">
      <span class="cat-view__filter-label">
        <FunnelIcon class="cat-view__filter-icon" /> Filtros:
      </span>
      <button
        v-for="tag in filters.tags"
        :key="tag"
        class="cat-view__chip"
        @click="filters.toggleTag(tag)"
      >
        #{{ tag }} <XMarkIcon class="cat-view__chip-x" />
      </button>
      <button class="cat-view__clear" @click="filters.clearTags()">Limpiar tags</button>
    </div>

    <p class="cat-view__count">{{ list.length }} {{ list.length === 1 ? 'componente' : 'componentes' }}</p>

    <div v-if="paginated.length" class="cat-view__grid" :class="{ 'cat-view__grid--mini-only': classicLoaders.length === 0 && svgSpinners.length > 0 }">
      <ComponentCard
        v-for="c in classicLoaders"
        :key="c.id"
        :component="c"
        @open="open"
      />
    </div>

    <template v-if="svgSpinners.length > 0">
      <div v-if="classicLoaders.length > 0" class="cat-view__separator">
        <span class="cat-view__separator-label">SVG Spinners</span>
      </div>

      <div class="cat-view__grid cat-view__grid--mini">
        <ComponentCard
          v-for="c in svgSpinners"
          :key="c.id"
          :component="c"
          @open="open"
        />
      </div>
    </template>

    <div v-else class="cat-view__empty">
      <p>No hay componentes en esta vista con los filtros actuales.</p>
      <button class="cat-view__empty-btn" @click="filters.reset()">Limpiar filtros</button>
    </div>

    <Pagination
      v-if="list.length"
      :page="page"
      :total-pages="totalPages"
      :start-index="startIndex"
      :end-index="endIndex"
      :total="list.length"
      @update:page="setPage"
    />

    <ComponentModal />
  </div>

  <div v-else class="cat-view__missing">
    <p>Categoría no encontrada.</p>
    <RouterLink to="/" class="cat-view__empty-btn">Volver al inicio</RouterLink>
  </div>
</template>

<style scoped>
.cat-view {
  max-width: 1400px;
  margin: 0 auto;
}

.cat-view__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.cat-view__title-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cat-view__icon {
  width: 36px;
  height: 36px;
  color: var(--accent);
  flex-shrink: 0;
}

.cat-view__title {
  margin: 0 0 4px 0;
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
}

.cat-view__desc {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.cat-view__controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.cat-view__search input {
  width: 240px;
  padding: 8px 14px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 13px;
  outline: none;
}

.cat-view__search input:focus {
  border-color: var(--accent);
}

.cat-view__filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  padding: 10px 14px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
}

.cat-view__filter-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.cat-view__filter-icon {
  width: 14px;
  height: 14px;
}

.cat-view__chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px 4px 10px;
  background: var(--accent-soft);
  border: 1px solid transparent;
  border-radius: 999px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.cat-view__chip:hover {
  border-color: var(--accent);
}

.cat-view__chip-x {
  width: 12px;
  height: 12px;
}

.cat-view__clear {
  margin-left: auto;
  padding: 4px 10px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 12px;
  cursor: pointer;
}

.cat-view__clear:hover {
  color: var(--danger);
}

.cat-view__count {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: var(--text-muted);
}

.cat-view__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.cat-view__grid:has(.c-card--large) {
  grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
}

.cat-view__grid--mini {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}

.cat-view__grid--mini-only {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}

.cat-view__separator {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 40px 0 20px;
}

.cat-view__separator::before,
.cat-view__separator::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-subtle);
}

.cat-view__separator-label {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

.cat-view__empty,
.cat-view__missing {
  padding: 80px 20px;
  text-align: center;
  color: var(--text-secondary);
}

.cat-view__empty p,
.cat-view__missing p {
  margin: 0 0 16px 0;
  font-size: 15px;
}

.cat-view__empty-btn {
  display: inline-block;
  padding: 8px 18px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
}

.cat-view__empty-btn:hover {
  background: var(--bg-hover);
}
</style>
