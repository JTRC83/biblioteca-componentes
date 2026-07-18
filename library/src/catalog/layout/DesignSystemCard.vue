<script setup>
const props = defineProps({
  system: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open'])
</script>

<template>
  <article class="ds-card" @click="emit('open', system)">
    <div class="ds-card__preview">
      <iframe
        :srcdoc="system.preview"
        class="ds-card__iframe"
        sandbox="allow-same-origin"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </div>
    <footer class="ds-card__footer">
      <div class="ds-card__info">
        <h3 class="ds-card__name">{{ system.name }}</h3>
        <p class="ds-card__tags">
          <span v-for="tag in system.styleTags" :key="tag" class="ds-card__tag">#{{ tag }}</span>
        </p>
      </div>
      <div class="ds-card__swatches">
        <span
          v-for="(color, key) in system.colorScheme"
          :key="key"
          class="ds-card__swatch"
          :style="{ background: color }"
          :title="`${key}: ${color}`"
        ></span>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.ds-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ds-card:hover {
  border-color: var(--border-default);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.ds-card__preview {
  position: relative;
  height: 280px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-subtle);
  background: #fff;
}

.ds-card__iframe {
  width: 400%;
  height: 400%;
  border: none;
  transform: scale(0.25);
  transform-origin: top left;
  pointer-events: none;
}

.ds-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  gap: 12px;
}

.ds-card__info {
  flex: 1;
  min-width: 0;
}

.ds-card__name {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.ds-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
}

.ds-card__tag {
  font-size: 11px;
  color: var(--text-muted);
}

.ds-card__swatches {
  display: flex;
  gap: 3px;
  flex-shrink: 0;
}

.ds-card__swatch {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .ds-card__preview {
    height: 220px;
  }
}
</style>