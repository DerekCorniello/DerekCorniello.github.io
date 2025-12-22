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
      <div class="blog-container">
        <h1 class="blog-title">{{ title }}</h1>

        <div class="blog-content">
          <slot></slot>
        </div>
      </div>
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

defineProps({
  title: {
    type: String,
    required: true,
  },
})

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

.page-content {
  flex: 1 0 auto;
  padding: 2rem;
  color: white;
}

.blog-container {
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  max-width: 1200px;
  width: 100%;
}

.blog-title {
  font-size: 2.5rem;
  color: #ff66b2;
  margin-bottom: 1rem;
}

.blog-content {
  font-size: 1.2rem;
  color: white;
  line-height: 1.7;
}

.blog-content :deep(p) {
  margin: 1.5rem 0;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  list-style-position: outside;
  padding-left: 2.5rem;
  margin: 1.5rem 0;
  line-height: 1.8;
}

.blog-content :deep(li) {
  margin: 0.8rem 0;
  color: white;
  padding-left: 0.5rem;
}

.blog-content :deep(ul ul),
.blog-content :deep(ol ol) {
  margin: 0.5rem 0 0.5rem 1.5rem;
}

.blog-content :deep(a) {
  color: #00ffcc;
  text-decoration: none;
  transition:
    color 0.3s ease,
    opacity 0.2s ease;
  position: relative;
}

.blog-content :deep(a:hover) {
  text-decoration: underline;
  opacity: 0.9;
}

.blog-content :deep(.image-container) {
  margin: 2.5rem auto;
  max-width: 100%;
  text-align: center;
}

.blog-content :deep(img) {
  border-radius: 8px;
  border: 4px solid #00ffcc;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 255, 204, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);
}

.blog-content :deep(img:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 204, 0.3);
}

.blog-content :deep(.image-caption) {
  color: #a0a0a0;
  font-size: 0.95rem;
  font-style: italic;
  margin: 0.8rem auto 0;
  text-align: center;
  max-width: 90%;
  line-height: 1.5;
}

.blog-content :deep(h1),
.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4) {
  margin: 2.5rem 0 1.5rem;
  line-height: 1.3;
}

/* Blockquotes */
.blog-content :deep(blockquote) {
  border-left: 3px solid #00ffcc;
  margin: 1.5rem 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
  color: #d1d1d1;
  font-style: italic;
}

/* Code blocks */
.blog-content :deep(pre) {
  margin: 1.5rem 0;
  padding: 1.2rem;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  overflow-x: auto;
}

/* Responsive adjustments */
@media (min-width: 640px) {
  .blog-content :deep(ul),
  .blog-content :deep(ol) {
    padding-left: 2rem;
  }

  .blog-content :deep(.image-container) {
    margin: 3rem auto;
  }

  .blog-content :deep(img) {
    max-width: 90%;
  }

  .blog-content :deep(.image-caption) {
    max-width: 80%;
  }
}

@media (min-width: 1024px) {
  .blog-content {
    font-size: 1.1rem;
  }

  .blog-content :deep(.image-container) {
    max-width: 85%;
  }

  .blog-content :deep(img) {
    max-width: 80%;
  }

  .blog-content :deep(.image-caption) {
    max-width: 70%;
    font-size: 1rem;
  }
}

/* Large screens */
@media (min-width: 1280px) {
  .blog-content :deep(.image-container) {
    max-width: 80%;
  }

  .blog-content :deep(img) {
    max-width: 75%;
  }
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
