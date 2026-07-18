<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useLandingStore } from '@/catalog/stores/landing'
import CodeBlock from '@/catalog/showcase/CodeBlock.vue'
import { XMarkIcon, DocumentTextIcon, SwatchIcon, CubeIcon, CommandLineIcon, EyeIcon } from '@heroicons/vue/24/outline'

const landing = useLandingStore()

const item = computed(() => landing.active)

const view = ref('prompt')

watch(
  () => item.value?.id,
  () => {
    view.value = item.value?.preview ? 'preview' : 'prompt'
  }
)

const onKey = (e) => {
  if (e.key === 'Escape') {
    landing.close()
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
    <div v-if="item" class="l-modal" @click.self="landing.close()">
      <div class="l-modal__panel" role="dialog" aria-modal="true">
        <header class="l-modal__head">
          <div>
            <h2 class="l-modal__title">{{ item.name }}</h2>
            <p class="l-modal__tags">
              <span v-for="tag in item.styleTags" :key="tag" class="l-modal__tag">#{{ tag }}</span>
            </p>
          </div>

          <div class="l-modal__head-actions">
            <nav class="l-modal__tabs">
              <button
                v-if="item.preview"
                class="l-modal__tab"
                :class="{ 'is-active': view === 'preview' }"
                @click="view = 'preview'"
              >
                <EyeIcon class="l-modal__tab-icon" />
                <span>Preview</span>
              </button>
              <button
                class="l-modal__tab"
                :class="{ 'is-active': view === 'prompt' }"
                @click="view = 'prompt'"
              >
                <CommandLineIcon class="l-modal__tab-icon" />
                <span>Prompt</span>
              </button>
              <button
                class="l-modal__tab"
                :class="{ 'is-active': view === 'design' }"
                @click="view = 'design'"
              >
                <SwatchIcon class="l-modal__tab-icon" />
                <span>Design</span>
              </button>
              <button
                class="l-modal__tab"
                :class="{ 'is-active': view === 'components' }"
                @click="view = 'components'"
              >
                <CubeIcon class="l-modal__tab-icon" />
                <span>Componentes</span>
              </button>
            </nav>
            <button class="l-modal__close" @click="landing.close()" aria-label="Cerrar">
              <XMarkIcon class="l-modal__close-icon" />
            </button>
          </div>
        </header>

        <div class="l-modal__body">
          <div v-if="view === 'preview' && item.preview" class="l-modal__preview">
            <iframe
              :srcdoc="item.preview"
              class="l-modal__iframe"
              sandbox="allow-same-origin"
              frameborder="0"
            ></iframe>
          </div>
          <div v-else-if="view === 'prompt'" class="l-modal__code">
            <CodeBlock :code="item.prompt" language="markdown" label="prompt.md" />
          </div>
          <div v-else-if="view === 'design'" class="l-modal__code">
            <CodeBlock :code="item.design" language="markdown" label="design.md" />
          </div>
          <div v-else-if="view === 'components'" class="l-modal__code">
            <CodeBlock :code="item.components" language="markdown" label="components.md" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.l-modal {
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

.l-modal__panel {
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

.l-modal__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-subtle);
}

.l-modal__title {
  margin: 0 0 6px 0;
  font-size: 20px;
  color: var(--text-primary);
}

.l-modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
}

.l-modal__tag {
  font-size: 12px;
  color: var(--text-muted);
}

.l-modal__head-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.l-modal__tabs {
  display: flex;
  gap: 4px;
  background: var(--bg-input);
  border-radius: 10px;
  padding: 4px;
}

.l-modal__tab {
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

.l-modal__tab:hover {
  color: var(--text-primary);
}

.l-modal__tab.is-active {
  background: var(--bg-elevated);
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
}

.l-modal__tab-icon {
  width: 16px;
  height: 16px;
}

.l-modal__close {
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

.l-modal__close:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.l-modal__close-icon {
  width: 18px;
  height: 18px;
}

.l-modal__body {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
}

.l-modal__preview {
  flex: 1;
  background: #fff;
  overflow: hidden;
  min-height: 0;
}

.l-modal__iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.l-modal__code {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  min-height: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .l-modal__panel,
.modal-leave-active .l-modal__panel {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .l-modal__panel,
.modal-leave-to .l-modal__panel {
  transform: scale(0.96) translateY(10px);
  opacity: 0;
}

@media (max-width: 768px) {
  .l-modal__head {
    flex-direction: column;
    padding: 16px;
  }
  .l-modal__head-actions {
    width: 100%;
    justify-content: space-between;
  }
  .l-modal__tabs {
    overflow-x: auto;
  }
  .l-modal__tab span {
    display: none;
  }
}
</style>