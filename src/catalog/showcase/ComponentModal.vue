<script setup>
import { computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useCatalogStore } from '@/catalog/stores/catalog'
import { useFavoritesStore } from '@/catalog/stores/favorites'
import ComponentPreview from './ComponentPreview.vue'
import CodeBlock from './CodeBlock.vue'
import { HeartIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const catalog = useCatalogStore()
const favs = useFavoritesStore()

const component = computed(() => catalog.active)
const isFav = computed(() => (component.value ? favs.isFavorite(component.value.id) : false))

const onKey = (e) => {
  if (e.key === 'Escape') catalog.close()
}

onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

watch(
  () => component.value?.id,
  () => {
    // al cambiar, no hacer nada especial
  }
)
</script>

<template>
  <transition name="modal">
    <div v-if="component" class="modal" @click.self="catalog.close()">
      <div class="modal__panel" role="dialog" aria-modal="true">
        <header class="modal__head">
          <div>
            <h2 class="modal__title">{{ component.name }}</h2>
            <p class="modal__tags">
              <span v-for="tag in component.tags" :key="tag" class="modal__tag">#{{ tag }}</span>
            </p>
          </div>

          <div class="modal__head-actions">
            <button
              class="modal__fav"
              :class="{ 'is-fav': isFav }"
              @click="favs.toggle(component.id)"
              :title="isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'"
            >
              <HeartIcon class="modal__fav-icon" />
              <span>{{ isFav ? 'Guardado' : 'Guardar' }}</span>
            </button>
            <button class="modal__close" @click="catalog.close()" aria-label="Cerrar">
              <XMarkIcon class="modal__close-icon" />
            </button>
          </div>
        </header>

        <div class="modal__body">
          <div class="modal__preview preview-surface">
            <ComponentPreview :component="component" :contained="true" />
          </div>

          <div class="modal__code">
            <CodeBlock :code="component.html.trim()" language="html" label="HTML" />
            <CodeBlock :code="component.css.trim()" language="css" label="CSS" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  padding: 20px;
}

.modal__panel {
  position: relative;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 20px;
  width: 100%;
  max-width: 1100px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.modal__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-subtle);
}

.modal__title {
  margin: 0 0 6px 0;
  font-size: 20px;
  color: var(--text-primary);
}

.modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
}

.modal__tag {
  font-size: 12px;
  color: var(--text-muted);
}

.modal__head-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.modal__fav {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.modal__fav:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.modal__fav.is-fav {
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.4);
  color: #ef4444;
}

.modal__fav-icon {
  width: 16px;
  height: 16px;
}

.modal__close {
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

.modal__close:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.modal__close-icon {
  width: 18px;
  height: 18px;
}

.modal__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 24px 24px;
  overflow-y: auto;
  min-height: 0;
}

.modal__preview {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  min-height: 360px;
  padding: 32px;
}

.modal__code {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

@media (max-width: 900px) {
  .modal__body { grid-template-columns: 1fr; }
  .modal__preview { min-height: 220px; }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .modal__panel,
.modal-leave-active .modal__panel {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal__panel,
.modal-leave-to .modal__panel {
  transform: scale(0.96) translateY(10px);
  opacity: 0;
}
</style>
