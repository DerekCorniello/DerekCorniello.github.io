<template>
  <header class="header">
    <div class="header-inner">
      <nav class="nav" aria-label="Main navigation">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
        <NuxtLink to="/posts" class="nav-link">Posts</NuxtLink>
        <NuxtLink to="/resume" class="nav-link">Resume</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  min-height: var(--header-height);
  background: var(--bg-base);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-inner {
  max-width: var(--container-max);
  width: 100%;
  padding: 0 0.75rem;
}

.nav {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  padding: 0.4rem 0.6rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 6px;
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--accent-mauve);
}

.nav-link.router-link-active {
  color: var(--accent-mauve);
  background: rgba(203, 166, 247, 0.1);
}

@media (max-width: 480px) {
  .nav-link {
    padding: 0.35rem 0.5rem;
    font-size: 0.75rem;
  }
}
</style>
