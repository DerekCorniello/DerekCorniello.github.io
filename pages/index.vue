<template>
  <div class="home">
    <HomeHero />
    <section class="companies-section">
      <div class="companies-timeline">
        <div class="company-item past">
          <img src="/siemens-logo.png" alt="Siemens" class="company-logo" />
          <div class="company-info">
            <span class="company-name">Siemens DISW</span>
            <span class="status-badge">[Past]</span>
          </div>
        </div>
        <span class="separator">/</span>
        <div class="company-item present">
          <img src="/fifththird-logo.png" alt="Fifth Third" class="company-logo fifth-third" />
          <div class="company-info">
            <span class="company-name">Fifth Third Bank</span>
            <span class="status-badge">[Present]</span>
          </div>
        </div>
        <span class="separator">/</span>
        <div class="company-item future">
          <img src="/linkedin-logo.png" alt="LinkedIn" class="company-logo" />
          <div class="company-info">
            <span class="company-name">LinkedIn</span>
            <span class="status-badge">[Future]</span>
          </div>
        </div>
      </div>
    </section>
    <HomeFeaturedProjects />
    <HomeRecentBlog />
    <HomeGitHubActivity />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Derek Corniello - Software Engineer building with Go, Rust, Python, and more. Explore my projects, blog, and the tech I use.' },
    { property: 'og:title', content: 'Derek Corniello' },
    { property: 'og:description', content: 'Software Engineer building with Go, Rust, Python, and more. Explore my projects, blog, and the tech I use.' },
    { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
    { property: 'og:url', content: 'https://derekcorn.dev' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Derek Corniello' },
    { name: 'twitter:description', content: 'Software Engineer building with Go, Rust, Python, and more.' },
    { name: 'twitter:image', content: 'https://derekcorn.dev/preview.png' },
  ],
})
</script>

<style scoped>
.home {
  animation: fadeIn var(--transition-slow) ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.companies-section {
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}

.companies-timeline {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.company-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.company-item.past {
  border-color: var(--accent-red);
}

.company-item.present {
  border-color: var(--accent-mauve);
}

.company-item.future {
  border-color: var(--accent-blue);
}

.company-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 4px;
  flex-shrink: 0;
}

.company-logo.fifth-third {
  width: 40px;
  height: 40px;
}

.company-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  align-items: center;
}

.company-name {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.status-badge {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  margin-top: 0.1rem;
}

.company-item.past .status-badge {
  color: var(--accent-red);
  background: rgba(243, 139, 168, 0.1);
}

.company-item.present .status-badge {
  color: var(--accent-mauve);
  background: rgba(203, 166, 247, 0.1);
}

.company-item.future .status-badge {
  color: var(--accent-blue);
  background: rgba(137, 180, 250, 0.1);
}

.separator {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 1.25rem;
}
</style>
