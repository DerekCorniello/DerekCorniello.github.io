<template>
  <div class="terminal-layout">
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Terminal',
  meta: [
    { name: 'description', content: 'Interactive terminal portfolio' },
  ],
})
</script>

<style scoped>
.terminal-layout {
  min-height: 100vh;
  background-color: var(--bg-base);
  font-family: 'Space Grotesk', sans-serif;
}
</style>
