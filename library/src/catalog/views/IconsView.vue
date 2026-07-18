<script setup>
import { computed, ref } from 'vue'
import IconCard from '@/catalog/layout/IconCard.vue'
import ComponentModal from '@/catalog/showcase/ComponentModal.vue'
import { useCatalogStore } from '@/catalog/stores/catalog'

const catalog = useCatalogStore()

const allIcons = computed(() => catalog.items.filter((c) => c.category === 'icons'))

const search = ref('')

const filtered = computed(() => {
  if (!search.value) return allIcons.value
  const q = search.value.toLowerCase()
  return allIcons.value.filter((i) =>
    i.name.toLowerCase().includes(q) ||
    i.tags.some((t) => t.toLowerCase().includes(q)) ||
    (i.iconCategory || '').toLowerCase().includes(q)
  )
})

const lucideIcons = computed(() => filtered.value.filter((i) => i.iconCategory !== 'Brands'))
const brandIcons = computed(() => filtered.value.filter((i) => i.iconCategory === 'Brands'))

const groupedLucide = computed(() => {
  const groups = {}
  for (const icon of lucideIcons.value) {
    const cat = icon.iconCategory || 'Other'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(icon)
  }
  return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]))
})

const open = (icon) => catalog.open(icon.id)
</script>

<template>
  <div class="icons-view">
    <header class="icons-view__head">
      <div>
        <h1 class="icons-view__title">Icons</h1>
        <p class="icons-view__subtitle">{{ allIcons.length }} iconos. Lucide UI + logos de marcas de Simple Icons.</p>
      </div>
      <div class="icons-view__search">
        <input
          type="search"
          placeholder="Buscar icono…"
          v-model="search"
          class="icons-view__input"
        />
      </div>
    </header>

    <section
      v-for="[categoryName, icons] in groupedLucide"
      :key="categoryName"
      class="icons-view__group"
    >
      <div class="icons-view__group-head">
        <h2 class="icons-view__group-title">{{ categoryName }}</h2>
        <span class="icons-view__group-count">{{ icons.length }}</span>
      </div>
      <div class="icons-view__grid icons-view__grid--small">
        <IconCard
          v-for="icon in icons"
          :key="icon.id"
          :icon="icon"
          @open="open"
        />
      </div>
    </section>

    <section v-if="brandIcons.length" class="icons-view__group">
      <div class="icons-view__group-head">
        <h2 class="icons-view__group-title">Brands</h2>
        <span class="icons-view__group-count">{{ brandIcons.length }}</span>
      </div>
      <div class="icons-view__grid icons-view__grid--large">
        <IconCard
          v-for="icon in brandIcons"
          :key="icon.id"
          :icon="icon"
          @open="open"
        />
      </div>
    </section>

    <div v-if="filtered.length === 0" class="icons-view__empty">
      <p>No se encontraron iconos para "{{ search }}"</p>
    </div>

    <ComponentModal />
  </div>
</template>

<style scoped>
.icons-view {
  max-width: 1400px;
  margin: 0 auto;
}

.icons-view__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0 40px;
  flex-wrap: wrap;
}

.icons-view__title {
  margin: 0 0 6px 0;
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--text-primary);
}

.icons-view__subtitle {
  margin: 0;
  font-size: 15px;
  color: var(--text-secondary);
}

.icons-view__search {
  flex-shrink: 0;
}

.icons-view__input {
  width: 240px;
  padding: 10px 16px;
  background: var(--bg-input);
  border: 1px solid var(--border-default);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease;
}

.icons-view__input:focus {
  border-color: var(--accent);
}

.icons-view__input::placeholder {
  color: var(--text-muted);
}

.icons-view__group {
  margin-bottom: 48px;
}

.icons-view__group-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-subtle);
}

.icons-view__group-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.icons-view__group-count {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-input);
  padding: 2px 10px;
  border-radius: 999px;
}

.icons-view__grid {
  display: grid;
  gap: 10px;
}

.icons-view__grid--small {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

.icons-view__grid--large {
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
}

.icons-view__empty {
  text-align: center;
  padding: 64px 0;
  color: var(--text-muted);
  font-size: 15px;
}

@media (max-width: 768px) {
  .icons-view__head {
    flex-direction: column;
  }
  .icons-view__input {
    width: 100%;
  }
  .icons-view__grid--small {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
  }
  .icons-view__grid--large {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 10px;
  }
}
</style>