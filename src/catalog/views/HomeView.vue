<script setup>
import { categories } from '@/catalog/data/categories'
import { stats } from '@/components'
import ComponentCard from '@/catalog/layout/ComponentCard.vue'
import ComponentModal from '@/catalog/showcase/ComponentModal.vue'
import { useCatalogStore } from '@/catalog/stores/catalog'

const catalog = useCatalogStore()

const featured = ['buttons', 'cards', 'loaders', 'backgrounds']

const open = (component) => catalog.open(component.id)
</script>

<template>
  <div class="home">
    <section class="home__hero">
      <h1 class="home__title">
        Biblioteca de <span class="home__title-accent">componentes</span>
      </h1>
      <p class="home__subtitle">
        {{ stats.total }} componentes visuales estilo uiverse.
        HTML y CSS separados, listos para copiar y reutilizar.
      </p>
      <div class="home__cta">
        <RouterLink to="/all" class="home__btn home__btn--primary">Explorar todos</RouterLink>
        <RouterLink to="/category/buttons" class="home__btn home__btn--ghost">Ver botones</RouterLink>
      </div>
    </section>

    <section
      v-for="slug in featured"
      :key="slug"
      class="home__section"
    >
      <header class="home__section-head">
        <h2 class="home__section-title">
          <RouterLink :to="`/category/${slug}`">
            {{ categories.find((c) => c.slug === slug)?.name }}
          </RouterLink>
        </h2>
        <RouterLink :to="`/category/${slug}`" class="home__section-more">Ver todo →</RouterLink>
      </header>
      <div class="home__grid">
        <ComponentCard
          v-for="c in stats.byCategory[slug] ? catalog.items.filter((i) => i.category === slug).slice(0, 4) : []"
          :key="c.id"
          :component="c"
          @open="open"
        />
      </div>
    </section>

    <ComponentModal />
  </div>
</template>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

.home__hero {
  padding: 48px 0 56px;
  text-align: center;
}

.home__title {
  margin: 0 0 12px 0;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--text-primary);
}

.home__title-accent {
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home__subtitle {
  margin: 0 auto 28px;
  max-width: 580px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.home__cta {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.home__btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s ease;
}

.home__btn--primary {
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  color: #fff;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);
}

.home__btn--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
}

.home__btn--ghost {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
}

.home__btn--ghost:hover {
  background: var(--bg-hover);
  border-color: var(--border-strong);
}

.home__section {
  margin-bottom: 48px;
}

.home__section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 16px;
}

.home__section-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}

.home__section-title a {
  color: inherit;
}

.home__section-title a:hover {
  color: var(--accent);
}

.home__section-more {
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
}

.home__section-more:hover {
  color: var(--accent);
}

.home__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
</style>
