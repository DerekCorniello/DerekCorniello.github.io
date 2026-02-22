<template>
  <section class="featured-projects">
    <h2 class="section-title">Featured Projects</h2>
    <div class="projects-bento">
      <ProjectCard
        class="project-large"
        :title="featuredProjects[0].title"
        :description="featuredProjects[0].description"
        :tech="featuredProjects[0].tech"
        :url="featuredProjects[0].links?.[0]?.url"
        :icon="featuredProjects[0].icon"
        size="large"
      />
      <ProjectCard
        v-for="project in featuredProjects.slice(1)"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :tech="project.tech"
        :url="project.links?.[0]?.url"
        :icon="project.icon"
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
import ProjectCard from '~/components/ui/ProjectCard.vue'
import { useProjects } from '~/composables/useProjects'

const { getFeaturedProjects } = useProjects()
const featuredProjects = getFeaturedProjects()
</script>

<style scoped>
.featured-projects {
  padding: 2rem 0;
}

.section-title {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--accent-red);
  text-align: center;
}

.projects-bento {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
}

.project-large {
  grid-column: 1 / -1;
}

.view-all {
  text-align: center;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .projects-bento {
    grid-template-columns: 1fr;
  }

  .project-large {
    grid-column: 1;
  }
}
</style>
