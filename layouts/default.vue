<template>
  <div class="base-page">
    <header class="page-header">
      <div class="header-content">
        <div class="directory-path">
          <NuxtLink to="/" class="r-link home-link">~/</NuxtLink>
          <span class="current-path">{{ currentPath }}</span>
        </div>
        <nav class="header-links">
          <NuxtLink class="r-link" to="/about">About Me</NuxtLink>
          <NuxtLink class="r-link" to="/projects">Projects</NuxtLink>
          <NuxtLink class="r-link" to="/blog">Blog</NuxtLink>
          <NuxtLink class="r-link" to="/contact">Contact</NuxtLink>
          <NuxtLink class="r-link" to="/resume">Resume</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="page-content">
      <slot></slot>
    </main>
    <footer class="page-footer">
      <div class="footer-content">
        <p>Created by: Derek Corniello</p>
        <div class="links">
          <a
            href="https://www.linkedin.com/in/derek-corniello"
            target="_blank"
            style="text-decoration: none"
          >
            <i class="bi bi-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/DerekCorniello" target="_blank" style="text-decoration: none">
            <i class="bi bi-github"></i> GitHub
          </a>
          <a
            href="https://twitter.com/DerekCorniello"
            target="_blank"
            style="text-decoration: none"
          >
            <i class="bi bi-twitter-x"></i> X
          </a>
          <a
            href="https://www.youtube.com/@DerekCornDev"
            target="_blank"
            style="text-decoration: none"
          >
            <i class="bi bi-youtube"></i> YouTube
          </a>
          <a href="/resume" target="_blank" style="text-decoration: none">
            <i class="bi bi-file-earmark-text"></i> Resume
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()

const currentPath = computed(() => {
  const path = route.path

  if (path === '/' || path === '') {
    return ''
  }

  // Remove leading slash and add trailing slash
  return path.substring(1) + (path.endsWith('/') ? '' : '/')
})
</script>

<style scoped>
.base-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.page-header {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  color: white;
  width: 100%;
  padding: 0.75rem 1rem 1.25rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 255, 204, 0.3);
  overflow: visible;
}

.page-header::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 16px;
  background: linear-gradient(
    to bottom,
    rgba(0, 255, 204, 0.25) 0%,
    rgba(0, 255, 204, 0.1) 70%,
    transparent 100%
  );
  filter: blur(4px);
  z-index: 1001;
  pointer-events: none;
  transform: scale(1);
  opacity: 0.8;
}

.page-header .header-content {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
}

.directory-path {
  margin: 0.5rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
    justify-content: flex-start;
  }
}

.home-link {
  color: #00ffcc;
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 4px;

  &:hover {
    color: #00ffcc;
    background-color: rgba(0, 255, 204, 0.1);
  }
}

.current-path {
  color: rgba(255, 255, 255, 0.8);
}

.page-header .header-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-top: 0;
    gap: 1.25rem;
  }
}

.page-header .header-links a {
  color: #00ffcc;
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover,
  &.router-link-active {
    color: #00ffcc;
    background-color: rgba(0, 255, 204, 0.1);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
  }
}

.page-footer {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  color: #00ffcc;
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: visible;
  border-top: 1px solid rgba(0, 255, 204, 0.3);
}

.page-footer::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 0;
  right: 0;
  height: 16px;
  background: linear-gradient(
    to bottom,
    rgba(0, 255, 204, 0.25) 0%,
    rgba(0, 255, 204, 0.1) 70%,
    transparent 100%
  );
  filter: blur(4px);
  z-index: 1001;
  pointer-events: none;
  transform: scale(1);
  opacity: 0.8;
}

.footer-content {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
}

.footer-content p {
  margin: 0;
  color: #a0aec0;
  font-size: 0.9rem;
}

.footer-content .links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }
}

.page-footer .footer-content .links a {
  color: #00ffcc;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  margin: 0;

  i {
    font-size: 1.1em;
  }
}

.page-content {
  flex: 1;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  margin-top: 2.5rem;
  padding: 1rem 0;

  @media (max-width: 767px) {
    margin-top: 6rem;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    margin-top: 7rem;
  }

  @media (max-width: 360px) {
    margin-top: 8rem;
  }
}

.page-content > :deep(*) {
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  max-width: 1200px;
  width: 100%;
}

.page-content {
  flex: 1 0 auto;
  padding: 2rem;
  color: white;
}

.links {
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
}

.links a {
  color: rgba(0, 173, 216, 0.95);
  text-decoration: none;
  margin: 0 0.5rem;
}
.links a:hover {
  text-decoration: none;
  text-shadow:
    0 0 1px #00ffcc,
    0 0 2px #00ffcc;
}

@media (max-width: 768px) {
  .page-header .header-links {
    gap: 0.8rem;
  }

  .page-footer {
    font-size: 0.9rem;
  }
}
</style>
