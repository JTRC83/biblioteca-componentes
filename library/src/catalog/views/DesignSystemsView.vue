<script setup>
import DesignSystemCard from '@/catalog/layout/DesignSystemCard.vue'
import DesignSystemModal from '@/catalog/showcase/DesignSystemModal.vue'
import { useDesignStore } from '@/catalog/stores/design'

const design = useDesignStore()

const open = (system) => design.open(system.id)
</script>

<template>
  <div class="ds-view">
    <section class="ds-view__hero">
      <h1 class="ds-view__title">
        Design <span class="ds-view__title-accent">Systems</span>
      </h1>
      <p class="ds-view__subtitle">
        Sistemas de design portables en formato DESIGN.md. Colores, tipografía, espaciado y componentes
        listos para aplicar a cualquier sector. Combina con una landing template y los componentes de la biblioteca.
      </p>
    </section>

    <div class="ds-view__grid">
      <DesignSystemCard
        v-for="system in design.items"
        :key="system.id"
        :system="system"
        @open="open"
      />
    </div>

    <DesignSystemModal />
  </div>
</template>

<style scoped>
.ds-view {
  max-width: 1400px;
  margin: 0 auto;
}

.ds-view__hero {
  padding: 16px 0 40px;
}

.ds-view__title {
  margin: 0 0 12px 0;
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--text-primary);
}

.ds-view__title-accent {
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ds-view__subtitle {
  margin: 0;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.ds-view__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>