<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useCatalogStore } from '@/catalog/stores/catalog'
import { useFavoritesStore } from '@/catalog/stores/favorites'
import ComponentPreview from './ComponentPreview.vue'
import CodeBlock from './CodeBlock.vue'
import { HeartIcon, XMarkIcon, CodeBracketIcon, EyeIcon } from '@heroicons/vue/24/outline'

const catalog = useCatalogStore()
const favs = useFavoritesStore()

const component = computed(() => catalog.active)
const isFav = computed(() => (component.value ? favs.isFavorite(component.value.id) : false))

const view = ref('code')

watch(
  () => component.value?.id,
  () => {
    view.value = 'code'
  }
)

const onKey = (e) => {
  if (e.key === 'Escape') {
    if (view.value === 'code') {
      view.value = 'preview'
    } else {
      catalog.close()
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

const goToCode = () => {
  view.value = 'code'
}

const goToPreview = () => {
  view.value = 'preview'
}
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

        <div v-if="view === 'preview'" class="modal__preview-only" :class="{ 'modal__preview-only--large': component.category === 'visual-effects' }" @click.self="goToCode">
          <div class="modal__preview preview-surface" :class="{ 'modal__preview--large': component.category === 'visual-effects' }">
            <ComponentPreview :component="component" :contained="true" />
          </div>
          <div class="modal__hint">
            <CodeBracketIcon class="modal__hint-icon" />
            <span>Click para ver el código</span>
          </div>
        </div>

        <div v-else class="modal__body" :class="{ 'modal__body--large': component.category === 'visual-effects' }">
          <div class="modal__preview preview-surface" :class="{ 'modal__preview--large': component.category === 'visual-effects' }">
            <ComponentPreview :component="component" :contained="true" />
            <button class="modal__back-preview" @click="goToPreview" title="Volver al preview">
              <EyeIcon class="modal__back-icon" />
              <span>Solo preview</span>
            </button>
          </div>

          <div class="modal__code">
            <CodeBlock :code="component.html.trim()" language="html" label="HTML" />
            <CodeBlock :code="component.css.trim()" language="css" label="CSS" />
            <CodeBlock v-if="component.js" :code="component.js.trim()" language="javascript" label="JS" />
            <div v-if="component.variables" class="modal__vars">
              <h4 class="modal__vars-title">Variables CSS editables</h4>
              <ul class="modal__vars-list">
                <li v-for="v in component.variables" :key="v.name">
                  <code>{{ v.name }}</code> — {{ v.description }} (default: <code>{{ v.default }}</code>)
                </li>
              </ul>
            </div>
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

.modal__panel:has(.modal__body--large),
.modal__panel:has(.modal__preview-only--large) {
  max-width: 1400px;
  max-height: 96vh;
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

.modal__preview-only {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  min-height: 0;
  flex: 1;
}

.modal__preview-only .modal__preview {
  width: 100%;
  min-height: 520px;
  flex: 1;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.modal__preview-only--large .modal__preview {
  min-height: 720px;
}

.modal__preview-only .modal__preview:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
}

.modal__hint {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  pointer-events: none;
  animation: pulse-hint 2.2s ease-in-out infinite;
}

.modal__hint-icon {
  width: 16px;
  height: 16px;
  color: var(--accent-primary);
}

@keyframes pulse-hint {
  0%, 100% { opacity: 0.7; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-2px); }
}

.modal__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: stretch;
  gap: 20px;
  padding: 20px 24px 24px;
  overflow-y: auto;
  min-height: 0;
  height: 800px;
  max-height: calc(90vh - 100px);
}

.modal__body--large {
  grid-template-columns: 1fr 1fr;
  height: auto;
  max-height: calc(96vh - 100px);
}

.modal__preview--large {
  min-height: 0;
  max-height: 560px;
  aspect-ratio: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 560px;
}

.modal__preview-only--large .modal__preview {
  min-height: 0;
  max-height: 560px;
  aspect-ratio: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 560px;
}

.modal__preview {
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  min-height: 420px;
  height: 100%;
  align-self: stretch;
  padding: 32px;
}

.modal__back-preview {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  z-index: 2;
}

.modal__back-preview:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
  border-color: var(--accent-primary);
}

.modal__back-icon {
  width: 14px;
  height: 14px;
}

.modal__code {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}

.modal__vars {
  padding: 14px 16px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
}

.modal__vars-title {
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.modal__vars-list {
  margin: 0;
  padding: 0 0 0 18px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.modal__vars-list code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
  padding: 1px 5px;
  border-radius: 4px;
}

@media (max-width: 900px) {
  .modal__body { grid-template-columns: 1fr; }
  .modal__preview { min-height: 220px; }
  .modal__preview-only .modal__preview { min-height: 280px; }
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
