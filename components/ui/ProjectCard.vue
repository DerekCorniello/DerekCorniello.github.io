<template>
  <article class="project-card" :class="{ 'card-large': size === 'large' }">
    <div class="project-icon">
      <PhMouse v-if="icon === 'mouse'" :size="iconSize" />
      <PhCrown v-else-if="icon === 'chess-piece'" :size="iconSize" />
      <PhMusicNotes v-else-if="icon === 'music'" :size="iconSize" />
      <PhCode v-else-if="icon === 'code'" :size="iconSize" />
      <PhCodeBlock v-else-if="icon === 'code-block'" :size="iconSize" />
      <PhTerminal v-else-if="icon === 'terminal'" :size="iconSize" />
      <PhFile v-else-if="icon === 'file'" :size="iconSize" />
      <PhGear v-else-if="icon === 'settings'" :size="iconSize" />
      <PhGameController v-else-if="icon === 'game'" :size="iconSize" />
      <PhHorse v-else-if="icon === 'horse'" :size="iconSize" />
      <PhFolder v-else :size="iconSize" />
    </div>
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">
          <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
            {{ title }}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
          <span v-else>{{ title }}</span>
        </h3>
        <div v-if="links.length" class="project-links">
          <a v-for="link in links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="project-link">
            {{ link.label }} >
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
      <LoadingImage :src="image" :alt="title" />
    </div>
  </article>
</template>

<script setup lang="ts">
import LoadingImage from './LoadingImage.vue'
import { PhMouse } from '@phosphor-icons/vue'
import { PhCrown } from '@phosphor-icons/vue'
import { PhMusicNotes } from '@phosphor-icons/vue'
import { PhCode } from '@phosphor-icons/vue'
import { PhCodeBlock } from '@phosphor-icons/vue'
import { PhTerminal } from '@phosphor-icons/vue'
import { PhFile } from '@phosphor-icons/vue'
import { PhGear } from '@phosphor-icons/vue'
import { PhGameController } from '@phosphor-icons/vue'
import { PhFolder } from '@phosphor-icons/vue'
import { PhHorse } from '@phosphor-icons/vue'

interface Link {
  label: string
  url: string
}

const props = withDefaults(defineProps<{
  title: string
  description: string
  tech: string[]
  icon?: string
  url?: string
  links?: Link[]
  images?: string[]
  image?: string
  size?: 'normal' | 'large'
}>(), {
  links: () => [],
  images: () => [],
  size: 'normal'
})

const iconSize = computed(() => props.size === 'large' ? 28 : 24)
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
}

.card-large {
  padding: 1.5rem;
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
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-base);
  border-radius: 8px;
  color: var(--accent-red);
}

.card-large .project-icon {
  width: 52px;
  height: 52px;
}

.project-content {
  flex: 1;
  min-width: 0;
}

.project-title {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.project-title a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text-primary);
  text-decoration: none;
}

.project-title a:hover {
  color: var(--accent-mauve);
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.project-link {
  color: var(--accent-blue);
  font-size: 0.8rem;
  text-decoration: none;
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

.card-large .project-description {
  font-size: 0.9rem;
  max-width: 600px;
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
