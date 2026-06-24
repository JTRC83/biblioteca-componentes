<script setup>
import { ChevronUpDownIcon } from '@heroicons/vue/24/outline'

defineProps({
  modelValue: { type: [Number, String], required: true },
  options: { type: Array, default: () => [12, 24, 48, 96, 'all'] }
})

const emit = defineEmits(['update:modelValue'])

const onChange = (e) => {
  const value = e.target.value
  emit('update:modelValue', value === 'all' ? 'all' : Number(value))
}

const format = (v) => (v === 'all' ? 'Todos' : v)
</script>

<template>
  <div class="pps" :title="`Mostrando ${format(modelValue)} por página`">
    <label class="pps__label">Por página</label>
    <div class="pps__select">
      <ChevronUpDownIcon class="pps__icon" />
      <select :value="modelValue" @change="onChange">
        <option v-for="opt in options" :key="opt" :value="opt">{{ format(opt) }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.pps {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.pps__label {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.pps__select {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.pps__icon {
  position: absolute;
  left: 8px;
  width: 14px;
  height: 14px;
  color: var(--text-muted);
  pointer-events: none;
  z-index: 1;
}

.pps__select select {
  appearance: none;
  padding: 7px 28px 7px 28px;
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s ease;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23a1a1aa'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 14px;
  padding-right: 28px;
}

.pps__select select:focus {
  border-color: var(--accent);
}

.pps__select select:hover {
  border-color: var(--border-default);
}
</style>
