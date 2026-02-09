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

const projects = [
  {
    title: 'MuxLang',
    icon: 'code-block',
    description: 'A strong and statically-typed programming language with a focus on explicitness and typing. Inspired by Rust, Go, and Python, designed for beginners and simplicity.',
    tech: ['Rust', 'LLVM', 'C'],
    images: ['/muxlang.png'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/mux-lang' },
      { label: 'Docs', url: 'https://mux-lang.dev' },
    ],
  },
  {
    title: 'Better-Elo',
    icon: 'horse',
    description: 'Chess rating system research with momentum-enhanced predictions. Achieves 73.1% accuracy across 20,000+ games.',
    tech: ['Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/better-elo' },
      { label: 'Paper', url: 'https://github.com/DerekCorniello/better-elo/blob/main/corniedj-better-elo.pdf' },
    ],
  },
  {
    title: 'Quick Mouse',
    icon: 'mouse',
    description: 'Turns your smartphone into a wireless mouse using QR codes and WebSockets. Won 1st place at MakeUC 2025.',
    tech: ['Go', 'React', 'WebSockets'],
    images: ['/qm-base.png', '/qm-calib.png', '/qm-settings.png'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/quick-mouse' },
      { label: 'Devpost', url: 'https://devpost.com/software/quick-mouse' },
    ],
  },
  {
    title: '8BitBeats',
    icon: 'music',
    description: 'Terminal-based chiptune generator in Rust. Seed-based tracks, real-time TUI controls, deterministic synthesis.',
    tech: ['Rust', 'TUI', 'Audio'],
    image: '/eightbitbeats.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/8BitBeats' },
      { label: 'Crates.io', url: 'https://crates.io/crates/eightbitbeats' },
    ],
  },
  {
    title: 'pip-req-valid',
    icon: 'code',
    description: 'Web app that validates requirements.txt files. Originally on AWS, now Dockerized for easy deployment.',
    tech: ['Go', 'Vue.js', 'Docker'],
    image: '/reqinspect.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/pip-req-valid' },
    ],
  },
  {
    title: 'gitcmd',
    icon: 'terminal',
    description: 'Custom Git shell built with Rust. Tailored prompts and intuitive command input for workflow efficiency.',
    tech: ['Rust', 'CLI'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/gitcmd' },
      { label: 'Crates.io', url: 'https://crates.io/crates/gitcmd' },
    ],
  },
  {
    title: 'Resume2Web',
    icon: 'file',
    description: 'Hackathon project that converts resumes to websites. Built with React/TypeScript and Python/Flask.',
    tech: ['React', 'TypeScript', 'Flask'],
    image: '/resume2web.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/grillinr/Resume2Web' },
    ],
  },
  {
    title: 'Dotfiles',
    icon: 'settings',
    description: 'Arch Linux with Hyprland, Neovim, Tmux, and Kitty: the ultimate developer experience.',
    tech: ['Hyprland', 'Lua', 'Arch'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/dotfiles' },
    ],
  },
  {
    title: 'Billiards Bonanza',
    icon: 'game',
    description: '8-Ball pool game with twists. Built in Unity using C# with custom assets.',
    tech: ['Unity', 'C#'],
    image: '/billiardsbonanza.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/Game_BilliardsBonanza' },
    ],
  },
]
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
