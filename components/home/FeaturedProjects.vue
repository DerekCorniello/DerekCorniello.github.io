<template>
  <section class="featured-projects">
    <h2 class="section-title">Featured Projects</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in featuredProjects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :tech="project.tech"
        :icon-component="project.iconComponent"
        :url="project.url"
      />
    </div>
    <div class="view-all">
      <NuxtLink to="/projects" class="btn">
        View All Projects
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mouse, ChessKing, Music } from 'lucide-vue-next'
import ProjectCard from '~/components/ui/ProjectCard.vue'

const featuredProjects = [
  {
    title: 'Quick Mouse',
    url: 'https://github.com/DerekCorniello/quick-mouse',
    icon: 'mouse',
    iconComponent: Mouse,
    description: '1st place @ MakeUC 2025. Turn your phone into a wireless mouse using QR codes.',
    tech: ['Go', 'React', 'WebSockets'],
  },
  {
    title: 'Better-Elo',
    url: 'https://github.com/DerekCorniello/better-elo',
    icon: 'chess-king',
    iconComponent: ChessKing,
    description: 'Chess rating system with 73.1% accuracy using momentum-based algorithms.',
    tech: ['Python'],
  },
  {
    title: '8BitBeats',
    url: 'https://github.com/DerekCorniello/8BitBeats',
    icon: 'music',
    iconComponent: Music,
    description: 'Terminal-based chiptune generator in Rust with real-time TUI controls.',
    tech: ['Rust', 'TUI', 'Audio'],
  },
]
</script>

<style scoped>
.featured-projects {
  padding: 2rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.view-all {
  text-align: center;
  margin-top: 2rem;
}
</style>
