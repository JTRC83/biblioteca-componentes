<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import ComponentCard from '@/catalog/layout/ComponentCard.vue'
import ComponentModal from '@/catalog/showcase/ComponentModal.vue'
import Pagination from '@/catalog/layout/Pagination.vue'
import PerPageSelect from '@/catalog/layout/PerPageSelect.vue'
import { useCatalogStore } from '@/catalog/stores/catalog'
import { useFiltersStore } from '@/catalog/stores/filters'
import { useFilteredComponents } from '@/catalog/composables/useFilteredComponents'
import { usePagination } from '@/catalog/composables/usePagination'
import { FunnelIcon, XMarkIcon, ChevronUpDownIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const catalog = useCatalogStore()
const filters = useFiltersStore()
const { list } = useFilteredComponents()

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

const sortOptions = [
  { value: 'newest', label: 'Más recientes' },
  { value: 'name-asc', label: 'Nombre A-Z' },
  { value: 'name-desc', label: 'Nombre Z-A' }
]

const initFromQuery = () => {
  const q = route.query.q
  if (typeof q === 'string') filters.setSearch(q)
}

watch(list, () => setPage(1), { flush: 'post' })

onMounted(initFromQuery)
watch(() => route.query.q, initFromQuery)
</script>

<template>
  <div class="all-view">
    <header class="all-view__head">
      <div>
        <h1 class="all-view__title">Todos los componentes</h1>
        <p class="all-view__count">{{ list.length }} {{ list.length === 1 ? 'componente' : 'componentes' }}</p>
      </div>

      <div class="all-view__controls">
        <div class="all-view__search">
          <input
            type="search"
            placeholder="Buscar por nombre o tag…"
            :value="filters.search"
            @input="filters.setSearch($event.target.value)"
          />
        </div>

        <div class="all-view__select">
          <ChevronUpDownIcon class="all-view__select-icon" />
          <select :value="filters.sort" @change="filters.setSort($event.target.value)">
            <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
        </div>

        <PerPageSelect
          :model-value="perPage"
          :options="perPageOptions"
          @update:model-value="setPerPage"
        />
      </div>
    </header>

    <div v-if="filters.search || filters.tags.length" class="all-view__filters">
      <span class="all-view__filter-label">
        <FunnelIcon class="all-view__filter-icon" /> Filtros activos:
      </span>
      <button
        v-if="filters.search"
        class="all-view__chip"
        @click="filters.setSearch('')"
      >
        "{{ filters.search }}" <XMarkIcon class="all-view__chip-x" />
      </button>
      <button
        v-for="tag in filters.tags"
        :key="tag"
        class="all-view__chip"
        @click="filters.toggleTag(tag)"
      >
        #{{ tag }} <XMarkIcon class="all-view__chip-x" />
      </button>
      <button class="all-view__clear" @click="filters.reset()">Limpiar todo</button>
    </div>

    <div v-if="paginated.length" class="all-view__grid">
      <ComponentCard
        v-for="c in paginated"
        :key="c.id"
        :component="c"
        @open="open"
      />
    </div>

    <div v-else class="all-view__empty">
      <p>Ningún componente coincide con tu búsqueda.</p>
      <button class="all-view__empty-btn" @click="filters.reset()">Limpiar filtros</button>
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
</template>

<style scoped>
.all-view {
  max-width: 1400px;
  margin: 0 auto;
}

.all-view__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.all-view__title {
  margin: 0 0 4px 0;
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
}

.all-view__count {
  margin: 0;
  font-size: 13px;
  color: var(--text-muted);
}

.all-view__controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.all-view__search input {
  width: 260px;
  padding: 8px 14px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s ease;
}

.all-view__search input:focus {
  border-color: var(--accent);
}

.all-view__select {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.all-view__select-icon {
  position: absolute;
  left: 10px;
  width: 14px;
  height: 14px;
  color: var(--text-muted);
  pointer-events: none;
}

.all-view__select select {
  appearance: none;
  padding: 8px 28px 8px 30px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 13px;
  cursor: pointer;
  outline: none;
}

.all-view__select select:focus {
  border-color: var(--accent);
}

.all-view__filters {
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

.all-view__filter-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.all-view__filter-icon {
  width: 14px;
  height: 14px;
}

.all-view__chip {
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
  transition: all 0.15s ease;
}

.all-view__chip:hover {
  border-color: var(--accent);
}

.all-view__chip-x {
  width: 12px;
  height: 12px;
}

.all-view__clear {
  margin-left: auto;
  padding: 4px 10px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.all-view__clear:hover {
  color: var(--danger);
}

.all-view__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.all-view__empty {
  padding: 80px 20px;
  text-align: center;
  color: var(--text-secondary);
}

.all-view__empty p {
  margin: 0 0 16px 0;
  font-size: 15px;
}

.all-view__empty-btn {
  padding: 8px 18px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 13px;
  cursor: pointer;
}

.all-view__empty-btn:hover {
  background: var(--bg-hover);
}
</style>
