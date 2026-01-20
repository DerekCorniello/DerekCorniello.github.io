<template>
  <div class="app-container">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <LayoutHeader />
    <main id="main-content" class="main-content error-page">
      <div class="error-content">
        <h1>{{ error.statusCode }}</h1>
        <p class="error-message">{{ error.message }}</p>
        <div class="error-links">
          <NuxtLink to="/" class="btn">
            Go Home
          </NuxtLink>
          <a href="javascript:history.back()" class="btn btn-outline">
            Go Back
          </a>
        </div>
      </div>
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.error-content {
  text-align: center;
  padding: 2rem;
}

.error-content h1 {
  font-size: 6rem;
  color: var(--accent-red);
  margin-bottom: 1rem;
  line-height: 1;
}

.error-message {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.error-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
