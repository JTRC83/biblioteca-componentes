<script setup>
import { ref, watch } from 'vue'
import { copyToClipboard } from '@/utils/copy'
import { ClipboardIcon, CheckIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  code: { type: String, required: true },
  language: { type: String, default: 'html' },
  label: { type: String, default: 'HTML' }
})

const copied = ref(false)
let timeout = null

const onCopy = async () => {
  const ok = await copyToClipboard(props.code)
  if (ok) {
    copied.value = true
    clearTimeout(timeout)
    timeout = setTimeout(() => (copied.value = false), 1800)
  }
}

watch(() => props.code, () => {
  copied.value = false
})
</script>

<template>
  <div class="cb">
    <div class="cb__head">
      <span class="cb__label">{{ label }}</span>
      <button class="cb__copy" @click="onCopy">
        <CheckIcon v-if="copied" class="cb__copy-icon" />
        <ClipboardIcon v-else class="cb__copy-icon" />
        <span>{{ copied ? '¡Copiado!' : 'Copiar' }}</span>
      </button>
    </div>
    <pre class="cb__pre"><code>{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.cb {
  background: #0a0a0c;
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow: hidden;
}

.cb__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border-subtle);
}

.cb__label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.cb__copy {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.cb__copy:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
  border-color: var(--border-default);
}

.cb__copy-icon {
  width: 14px;
  height: 14px;
}

.cb__pre {
  margin: 0;
  padding: 14px 16px;
  max-height: 320px;
  overflow: auto;
  font-family: var(--font-mono);
  font-size: 12.5px;
  line-height: 1.55;
  color: #e4e4e7;
  background: transparent;
  white-space: pre;
}

.cb__pre code {
  font: inherit;
  color: inherit;
  background: transparent;
}
</style>
