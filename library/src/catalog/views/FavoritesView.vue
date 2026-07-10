<script setup>
import { computed, watch } from 'vue'
import ComponentCard from '@/catalog/layout/ComponentCard.vue'
import ComponentModal from '@/catalog/showcase/ComponentModal.vue'
import Pagination from '@/catalog/layout/Pagination.vue'
import PerPageSelect from '@/catalog/layout/PerPageSelect.vue'
import { useCatalogStore } from '@/catalog/stores/catalog'
import { useFavoritesStore } from '@/catalog/stores/favorites'
import { usePagination } from '@/catalog/composables/usePagination'
import { HeartIcon } from '@heroicons/vue/24/outline'

const catalog = useCatalogStore()
const favs = useFavoritesStore()

const items = computed(() =>
  catalog.items.filter((c) => favs.isFavorite(c.id))
)

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
} = usePagination(items)

const open = (component) => catalog.open(component.id)

watch(items, () => setPage(1), { flush: 'post' })
</script>

<template>
  <div class="favs-view">
    <header class="favs-view__head">
      <div>
        <h1 class="favs-view__title">Favoritos</h1>
        <p class="favs-view__sub">
          {{ items.length }} {{ items.length === 1 ? 'componente guardado' : 'componentes guardados' }}
        </p>
      </div>

      <PerPageSelect
        v-if="items.length"
        :model-value="perPage"
        :options="perPageOptions"
        @update:model-value="setPerPage"
      />
    </header>

    <div v-if="paginated.length" class="favs-view__grid">
      <ComponentCard
        v-for="c in paginated"
        :key="c.id"
        :component="c"
        @open="open"
      />
    </div>

    <div v-else-if="items.length === 0" class="favs-view__empty">
      <HeartIcon class="favs-view__empty-icon" />
      <h2>Aún no tienes favoritos</h2>
      <p>Pulsa el corazón en cualquier componente para guardarlo aquí.</p>
      <RouterLink to="/all" class="favs-view__cta">Explorar componentes</RouterLink>
    </div>

    <div v-else class="favs-view__empty">
      <p>No hay favoritos en esta página.</p>
    </div>

    <Pagination
      v-if="items.length"
      :page="page"
      :total-pages="totalPages"
      :start-index="startIndex"
      :end-index="endIndex"
      :total="items.length"
      @update:page="setPage"
    />

    <ComponentModal />
  </div>
</template>

<style scoped>
.favs-view {
  max-width: 1400px;
  margin: 0 auto;
}

.favs-view__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.favs-view__title {
  margin: 0 0 4px 0;
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
}

.favs-view__sub {
  margin: 0;
  font-size: 13px;
  color: var(--text-muted);
}

.favs-view__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.favs-view__empty {
  padding: 80px 20px;
  text-align: center;
  color: var(--text-secondary);
}

.favs-view__empty-icon {
  width: 48px;
  height: 48px;
  color: var(--text-muted);
  margin: 0 auto 16px;
}

.favs-view__empty h2 {
  margin: 0 0 8px 0;
  font-size: 20px;
  color: var(--text-primary);
}

.favs-view__empty p {
  margin: 0 0 24px 0;
  font-size: 14px;
}

.favs-view__cta {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s ease;
}

.favs-view__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
}
</style>
