<script setup>
const props = defineProps({
  icon: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open'])

const isBrand = props.icon.iconCategory === 'Brands'
</script>

<template>
  <article class="i-card" :class="{ 'i-card--brand': isBrand }" @click="emit('open', icon)">
    <div class="i-card__svg" v-html="icon.html"></div>
  </article>
</template>

<style scoped>
.i-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.15s ease;
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;
}
.i-card:hover {
  border-color: var(--accent);
  background: var(--bg-hover);
  transform: translateY(-1px);
}
.i-card :deep(.lucide-icon),
.i-card :deep(.brand-icon),
.i-card :deep(.extra-icon) {
  padding: 0;
  border: none;
  background: none;
  gap: 6px;
  width: 100%;
}
.i-card :deep(.lucide-icon__svg),
.i-card :deep(.brand-icon__svg),
.i-card :deep(.extra-icon__svg) {
  width: 40px;
  height: 40px;
  color: var(--text-primary);
  transition: color 0.15s ease;
  flex-shrink: 0;
}
.i-card:hover :deep(.lucide-icon__svg),
.i-card:hover :deep(.brand-icon__svg),
.i-card:hover :deep(.extra-icon__svg) {
  color: var(--accent);
}
.i-card :deep(.lucide-icon__name),
.i-card :deep(.brand-icon__name),
.i-card :deep(.extra-icon__name) {
  font-size: 10px;
  max-width: 100px;
}

.i-card--brand {
  padding: 16px;
  border-radius: 12px;
}
.i-card--brand :deep(.brand-icon__svg) {
  width: 40px;
  height: 40px;
}
.i-card--brand :deep(.brand-icon__svg svg) {
  width: 28px;
  height: 28px;
}
.i-card--brand :deep(.brand-icon__name) {
  font-size: 10px;
  max-width: 90px;
}
</style>