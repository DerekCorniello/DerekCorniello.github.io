<template>
  <article class="project-card">
    <div class="project-icon">
      <component :is="iconComponent" />
    </div>
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">
          <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
            {{ title }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
          <span v-else>{{ title }}</span>
        </h3>
        <div v-if="links.length" class="project-links">
          <a v-for="link in links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="project-link">
            Link to {{ link.label }} &gt;
          </a>
        </div>
      </div>
      <p class="project-description">{{ description }}</p>
      <div class="project-tech">
        <span v-for="tech in tech" :key="tech" :class="['tag', `tag-${tech.toLowerCase().replace(/\./g, '').replace(/\+/g, 'p').replace(/ /g, '-')}`]">
          {{ tech }}
        </span>
      </div>
    </div>
    <div v-if="images.length" class="project-images">
      <LoadingImage v-for="(img, idx) in images" :key="idx" :src="img" :alt="title" />
    </div>
    <div v-else-if="image" class="project-image">
      <LoadingImage :src="image" :alt="title" aspect-ratio="16/9" />
    </div>
  </article>
</template>

<script setup lang="ts">
import LoadingImage from './LoadingImage.vue'

interface Link {
  label: string
  url: string
}

const props = withDefaults(defineProps<{
  title: string
  description: string
  tech: string[]
  iconComponent: any
  url?: string
  links?: Link[]
  images?: string[]
  image?: string
}>(), {
  links: () => [],
  images: () => [],
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-base);
  border-radius: 8px;
  color: var(--accent-red);
}

.project-icon :deep(svg) {
  width: 28px;
  height: 28px;
}

.project-content {
  flex: 1;
  min-width: 0;
}

.project-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.project-title a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  text-decoration: none;
}

.project-title a:hover {
  color: var(--accent-mauve);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--accent-blue);
  font-size: 0.85rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color var(--transition-fast);
}

.project-link:hover {
  color: var(--accent-mauve);
}

.project-description {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}

.project-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
}

@media (max-width: 600px) {
  .project-header {
    flex-direction: column;
  }

  .project-images {
    grid-template-columns: 1fr;
  }
}
</style>
