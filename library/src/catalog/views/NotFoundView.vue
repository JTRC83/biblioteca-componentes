<script setup>
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>La página que buscas no existe.</p>
    <RouterLink to="/" class="not-found__cta">Volver al inicio</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 100px 20px;
}

.not-found h1 {
  margin: 0;
  font-size: 80px;
  font-weight: 800;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.not-found p {
  margin: 0 0 24px 0;
  color: var(--text-secondary);
}

.not-found__cta {
  display: inline-block;
  padding: 10px 20px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.not-found__cta:hover {
  background: var(--bg-hover);
}
</style>
