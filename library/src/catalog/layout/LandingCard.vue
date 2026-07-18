<script setup>
const props = defineProps({
  landing: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open'])
</script>

<template>
  <article class="l-card" @click="emit('open', landing)">
    <div class="l-card__preview" :style="{ background: landing.colorScheme.background, color: landing.colorScheme.text }">
      <iframe
        v-if="landing.preview"
        :srcdoc="landing.preview"
        class="l-card__iframe"
        sandbox="allow-same-origin"
        scrolling="no"
        frameborder="0"
      ></iframe>
      <template v-else>
        <div class="l-card__mock-hero" :style="{ background: `linear-gradient(135deg, ${landing.colorScheme.primary}, ${landing.colorScheme.secondary})` }">
          <div class="l-card__mock-title" :style="{ borderColor: landing.colorScheme.text }"></div>
          <div class="l-card__mock-sub" :style="{ background: landing.colorScheme.textSecondary, opacity: 0.4 }"></div>
          <div class="l-card__mock-btn" :style="{ background: landing.colorScheme.primary }"></div>
        </div>
        <div class="l-card__mock-grid">
          <div v-for="i in 3" :key="i" class="l-card__mock-card" :style="{ background: landing.colorScheme.surface, borderColor: landing.colorScheme.textSecondary, opacity: 0.15 }"></div>
        </div>
      </template>
    </div>
    <footer class="l-card__footer">
      <div class="l-card__info">
        <h3 class="l-card__name">{{ landing.name }}</h3>
        <p class="l-card__industries">
          <span v-for="ind in landing.industry.slice(0, 3)" :key="ind" class="l-card__industry">{{ ind }}</span>
        </p>
      </div>
      <div class="l-card__swatches">
        <span class="l-card__swatch" :style="{ background: landing.colorScheme.primary }" title="Primary"></span>
        <span class="l-card__swatch" :style="{ background: landing.colorScheme.secondary }" title="Secondary"></span>
        <span class="l-card__swatch" :style="{ background: landing.colorScheme.background, border: '1px solid #e2e8f0' }" title="Background"></span>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.l-card {
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
.l-card:hover {
  border-color: var(--border-default);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.l-card__preview {
  height: 360px;
  overflow: hidden;
  position: relative;
}
.l-card__iframe {
  width: 1280px;
  height: 1440px;
  border: none;
  transform: scale(0.25);
  transform-origin: top left;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
}
.l-card__mock-hero {
  height: 80px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  opacity: 0.9;
}
.l-card__mock-title {
  width: 60%;
  height: 8px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-radius: 2px;
}
.l-card__mock-sub {
  width: 40%;
  height: 4px;
  border-radius: 2px;
}
.l-card__mock-btn {
  width: 30%;
  height: 10px;
  border-radius: 3px;
  margin-top: 4px;
}
.l-card__mock-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  flex: 1;
}
.l-card__mock-card {
  border: 1px solid;
  border-radius: 6px;
}
.l-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  gap: 12px;
}
.l-card__info { flex: 1; min-width: 0; }
.l-card__name {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}
.l-card__industries {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
}
.l-card__industry {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: capitalize;
}
.l-card__swatches {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}
.l-card__swatch {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}
</style>