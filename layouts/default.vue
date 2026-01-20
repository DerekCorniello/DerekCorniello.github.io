<template>
  <div class="app-container">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <LayoutHeader />
    <main id="main-content" class="main-content">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 80px 1rem 4rem;
}
</style>
