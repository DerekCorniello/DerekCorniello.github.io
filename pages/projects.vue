<template>
  <div class="projects">
    <header class="projects-header">
      <h1>Projects</h1>
      <p class="subtitle">The things I've built along the way</p>
    </header>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :tech="project.tech"
        :icon="project.icon"
        :links="project.links"
        :images="project.images"
        :image="project.image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/ui/ProjectCard.vue'
import { useProjects } from '~/composables/useProjects'

const { getAllProjects } = useProjects()
const projects = getAllProjects()

useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'Explore Derek Corniello\'s projects - from chess rating algorithms to hackathon winners, built with Go, Rust, Python, and more.' },
    { property: 'og:title', content: 'Projects - Derek Corniello' },
    { property: 'og:description', content: 'My programming language, chess rating systems, terminal music generators, wireless mouse apps - all built with Go, Rust, Python, and more.' },
    { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
    { property: 'og:url', content: 'https://derekcorn.dev/projects' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Projects - Derek Corniello' },
    { name: 'twitter:description', content: 'Chess rating systems, terminal music generators, and more.' },
    { name: 'twitter:image', content: 'https://derekcorn.dev/preview.png' },
  ],
})
</script>

<style scoped>
.projects {
  max-width: 900px;
  margin: 0 auto;
}

.projects-header {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--text-secondary);
}

.projects-grid {
  display: grid;
  gap: 1.5rem;
}
</style>
