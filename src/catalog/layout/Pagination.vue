<script setup>
import { computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  page: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  startIndex: { type: Number, required: true },
  endIndex: { type: Number, required: true },
  total: { type: Number, required: true }
})

const emit = defineEmits(['update:page'])

const showControls = computed(() => props.totalPages > 1)
const showFooter = computed(() => props.total > 0)

/**
 * Lista de páginas a mostrar.
 * - Si hay <=7 páginas, muestra todas
 * - Si hay más, muestra: 1, ..., current-1, current, current+1, ..., last
 */
const visiblePages = computed(() => {
  const tp = props.totalPages
  const c = props.page
  if (tp <= 7) {
    return Array.from({ length: tp }, (_, i) => i + 1)
  }
  const pages = new Set([1, tp, c, c - 1, c + 1])
  if (c <= 3) [2, 3, 4].forEach((p) => pages.add(p))
  if (c >= tp - 2) [tp - 1, tp - 2, tp - 3].forEach((p) => pages.add(p))
  return [...pages].filter((p) => p >= 1 && p <= tp).sort((a, b) => a - b)
})

const isEllipsisAfter = (idx) => {
  const pages = visiblePages.value
  return idx < pages.length - 1 && pages[idx + 1] - pages[idx] > 1
}

const onPageClick = (p) => {
  if (p === props.page) return
  emit('update:page', p)
}
</script>

<template>
  <div v-if="showFooter" class="pagination">
    <div class="pagination__info">
      <span class="pagination__count">
        Mostrando <strong>{{ startIndex }}-{{ endIndex }}</strong> de <strong>{{ total }}</strong>
      </span>
    </div>

    <nav v-if="showControls" class="pagination__nav" aria-label="Paginación">
      <button
        class="pagination__btn pagination__btn--edge"
        :disabled="page === 1"
        title="Primera página"
        @click="emit('update:page', 1)"
      >
        <ChevronDoubleLeftIcon class="pagination__icon" />
      </button>
      <button
        class="pagination__btn"
        :disabled="page === 1"
        title="Anterior"
        @click="emit('update:page', page - 1)"
      >
        <ChevronLeftIcon class="pagination__icon" />
      </button>

      <template v-for="(p, i) in visiblePages" :key="p">
        <button
          class="pagination__btn pagination__btn--num"
          :class="{ 'is-active': p === page }"
          @click="onPageClick(p)"
        >
          {{ p }}
        </button>
        <span v-if="isEllipsisAfter(i)" class="pagination__ellipsis">…</span>
      </template>

      <button
        class="pagination__btn"
        :disabled="page === totalPages"
        title="Siguiente"
        @click="emit('update:page', page + 1)"
      >
        <ChevronRightIcon class="pagination__icon" />
      </button>
      <button
        class="pagination__btn pagination__btn--edge"
        :disabled="page === totalPages"
        title="Última página"
        @click="emit('update:page', totalPages)"
      >
        <ChevronDoubleRightIcon class="pagination__icon" />
      </button>
    </nav>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
  padding: 14px 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
}

.pagination__info {
  flex: 0 0 auto;
}

.pagination__count {
  font-size: 13px;
  color: var(--text-secondary);
}

.pagination__count strong {
  color: var(--text-primary);
  font-weight: 600;
}

.pagination__nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.pagination__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.pagination__btn:hover:not(:disabled) {
  background: var(--bg-hover);
  color: var(--text-primary);
  border-color: var(--border-default);
}

.pagination__btn.is-active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-contrast);
}

.pagination__btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination__btn--num {
  min-width: 32px;
}

.pagination__icon {
  width: 16px;
  height: 16px;
}

.pagination__ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 32px;
  color: var(--text-muted);
  font-size: 13px;
  user-select: none;
}

@media (max-width: 640px) {
  .pagination {
    justify-content: center;
  }
  .pagination__info {
    flex: 1 1 100%;
    text-align: center;
  }
}
</style>
