<script setup>
import { computed } from 'vue'
import ComponentPreview from '@/catalog/showcase/ComponentPreview.vue'
import { useFavoritesStore } from '@/catalog/stores/favorites'
import { HeartIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  component: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open'])

const favs = useFavoritesStore()
const isFav = computed(() => favs.isFavorite(props.component.id))
</script>

<template>
  <article class="c-card">
    <div class="c-card__preview preview-surface">
      <ComponentPreview :component="component" />
    </div>

    <footer class="c-card__footer">
      <div class="c-card__info">
        <h3 class="c-card__name">{{ component.name }}</h3>
        <p class="c-card__tags">
          <span v-for="tag in component.tags" :key="tag" class="c-card__tag">#{{ tag }}</span>
        </p>
      </div>

      <div class="c-card__actions">
        <button
          class="c-card__code"
          @click="emit('open', component)"
          title="Ver código HTML y CSS"
        >
          <CodeBracketIcon class="c-card__code-icon" />
        </button>
        <button
          class="c-card__fav"
          :class="{ 'is-fav': isFav }"
          :title="isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'"
          @click.stop="favs.toggle(component.id)"
        >
          <HeartIcon class="c-card__fav-icon" />
        </button>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.c-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.c-card:hover {
  border-color: var(--border-default);
  box-shadow: var(--shadow-md);
}

.c-card__preview {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  padding: 0;
  border-bottom: 1px solid var(--border-subtle);
  overflow: hidden;
}

.c-card__footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
}

.c-card__info {
  flex: 1;
  min-width: 0;
}

.c-card__name {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.c-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
}

.c-card__tag {
  font-size: 11px;
  color: var(--text-muted);
}

.c-card__actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.c-card__code,
.c-card__fav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.c-card__code:hover {
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.4);
  color: var(--accent-primary);
}

.c-card__fav:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.c-card__fav.is-fav {
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.4);
  color: #ef4444;
}

.c-card__code-icon,
.c-card__fav-icon {
  width: 16px;
  height: 16px;
}
</style>
