<script setup>
import AppHeader from '@/catalog/layout/AppHeader.vue'
import AppSidebar from '@/catalog/layout/AppSidebar.vue'
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <div class="app-body">
      <AppSidebar />
      <main class="app-main">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--bg-app);
}

.app-body {
  display: flex;
  flex: 1;
  align-items: flex-start;
}

.app-main {
  flex: 1;
  min-width: 0;
  padding: 24px 32px 80px;
}

@media (max-width: 768px) {
  .app-main {
    padding: 16px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
