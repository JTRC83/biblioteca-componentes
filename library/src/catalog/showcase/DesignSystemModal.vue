<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useDesignStore } from '@/catalog/stores/design'
import CodeBlock from '@/catalog/showcase/CodeBlock.vue'
import { XMarkIcon, EyeIcon, DocumentTextIcon, CubeIcon } from '@heroicons/vue/24/outline'

const design = useDesignStore()

const system = computed(() => design.active)

const view = ref('preview')

watch(
  () => system.value?.id,
  () => {
    view.value = 'preview'
  }
)

const onKey = (e) => {
  if (e.key === 'Escape') {
    design.close()
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
</script>

<template>
  <transition name="modal">
    <div v-if="system" class="ds-modal" @click.self="design.close()">
      <div class="ds-modal__panel" role="dialog" aria-modal="true">
        <header class="ds-modal__head">
          <div>
            <h2 class="ds-modal__title">{{ system.name }}</h2>
            <p class="ds-modal__tags">
              <span v-for="tag in system.styleTags" :key="tag" class="ds-modal__tag">#{{ tag }}</span>
            </p>
          </div>

          <div class="ds-modal__head-actions">
            <nav class="ds-modal__tabs">
              <button
                class="ds-modal__tab"
                :class="{ 'is-active': view === 'preview' }"
                @click="view = 'preview'"
              >
                <EyeIcon class="ds-modal__tab-icon" />
                <span>Preview</span>
              </button>
              <button
                class="ds-modal__tab"
                :class="{ 'is-active': view === 'design' }"
                @click="view = 'design'"
              >
                <DocumentTextIcon class="ds-modal__tab-icon" />
                <span>DESIGN.md</span>
              </button>
              <button
                class="ds-modal__tab"
                :class="{ 'is-active': view === 'components' }"
                @click="view = 'components'"
              >
                <CubeIcon class="ds-modal__tab-icon" />
                <span>Componentes</span>
              </button>
            </nav>
            <button class="ds-modal__close" @click="design.close()" aria-label="Cerrar">
              <XMarkIcon class="ds-modal__close-icon" />
            </button>
          </div>
        </header>

        <div class="ds-modal__body">
          <div v-if="view === 'preview'" class="ds-modal__preview">
            <iframe
              :srcdoc="system.preview"
              class="ds-modal__iframe"
              sandbox="allow-same-origin"
              frameborder="0"
            ></iframe>
          </div>

          <div v-else-if="view === 'design'" class="ds-modal__code">
            <CodeBlock :code="system.design" language="markdown" label="DESIGN.md" />
          </div>

          <div v-else-if="view === 'components'" class="ds-modal__code">
            <CodeBlock :code="system.components" language="markdown" label="components.md" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.ds-modal {
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

.ds-modal__panel {
  position: relative;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.ds-modal__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-subtle);
}

.ds-modal__title {
  margin: 0 0 6px 0;
  font-size: 20px;
  color: var(--text-primary);
}

.ds-modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
}

.ds-modal__tag {
  font-size: 12px;
  color: var(--text-muted);
}

.ds-modal__head-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.ds-modal__tabs {
  display: flex;
  gap: 4px;
  background: var(--bg-input);
  border-radius: 10px;
  padding: 4px;
}

.ds-modal__tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.ds-modal__tab:hover {
  color: var(--text-primary);
}

.ds-modal__tab.is-active {
  background: var(--bg-elevated);
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
}

.ds-modal__tab-icon {
  width: 16px;
  height: 16px;
}

.ds-modal__close {
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

.ds-modal__close:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.ds-modal__close-icon {
  width: 18px;
  height: 18px;
}

.ds-modal__body {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
}

.ds-modal__preview {
  flex: 1;
  background: #fff;
  overflow: hidden;
  min-height: 0;
}

.ds-modal__iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.ds-modal__code {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  min-height: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .ds-modal__panel,
.modal-leave-active .ds-modal__panel {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .ds-modal__panel,
.modal-leave-to .ds-modal__panel {
  transform: scale(0.96) translateY(10px);
  opacity: 0;
}

@media (max-width: 768px) {
  .ds-modal__head {
    flex-direction: column;
    padding: 16px;
  }
  .ds-modal__head-actions {
    width: 100%;
    justify-content: space-between;
  }
  .ds-modal__tabs {
    overflow-x: auto;
  }
  .ds-modal__tab span {
    display: none;
  }
}
</style>