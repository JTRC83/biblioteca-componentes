<script setup>
import LandingCard from '@/catalog/layout/LandingCard.vue'
import LandingModal from '@/catalog/showcase/LandingModal.vue'
import { useLandingStore } from '@/catalog/stores/landing'

const landing = useLandingStore()

const open = (item) => landing.open(item.id)
</script>

<template>
  <div class="l-view">
    <section class="l-view__hero">
      <h1 class="l-view__title">
        Landing <span class="l-view__title-accent">Templates</span>
      </h1>
      <p class="l-view__subtitle">
        Plantillas de pagina completa por sector. Cada landing define la estructura, secciones y mapeo a componentes
        de la biblioteca. Combina con un design system para definir la estetica y genera webs completas.
      </p>
    </section>

    <div class="l-view__grid">
      <LandingCard
        v-for="item in landing.items"
        :key="item.id"
        :landing="item"
        @open="open"
      />
    </div>

    <LandingModal />
  </div>
</template>

<style scoped>
.l-view {
  max-width: 1400px;
  margin: 0 auto;
}

.l-view__hero {
  padding: 16px 0 40px;
}

.l-view__title {
  margin: 0 0 12px 0;
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--text-primary);
}

.l-view__title-accent {
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.l-view__subtitle {
  margin: 0;
  max-width: 640px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.l-view__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>