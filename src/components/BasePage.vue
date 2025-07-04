<template>
  <Starfield />
  <div class="base-page">
    <header class="page-header">
      <div class="header-content">
          <router-link to="/"><h1>Derek Corniello</h1></router-link>
        <nav class="header-links">
          <router-link class="r-link" to="/about">About Me</router-link>
          <router-link class="r-link" to="/projects">Projects</router-link>
          <router-link class="r-link" to="/blog">Blog</router-link>
          <router-link class="r-link" to="/contact">Contact</router-link>
          <router-link class="r-link" to="/resume">Resume</router-link>
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
            <a href="https://www.linkedin.com/in/derek-corniello" target="_blank" style="text-decoration: none;">
              <i class="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/DerekCorniello" target="_blank" style="text-decoration: none;">
              <i class="bi bi-github"></i> GitHub
            </a>
            <a href="https://twitter.com/DerekCorniello" target="_blank" style="text-decoration: none;">
                <i class="bi bi-twitter-x"></i> X
            </a>
            <a href="/resume" target="_blank" style="text-decoration: none;">
              <i class="bi bi-file-earmark-text"></i> Resume
            </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Starfield from '@/components/Starfield.vue';

export default {
  name: 'BasePage',
  components: {
    Starfield,
  },
};
</script>

<style scoped>
a {
    margin-left: 6px;
    margin-right: 6px;
}

.base-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-header, .page-footer {
  background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  width: 100%;
  padding: 1rem;
}

.page-header .header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-header h1 {
  font-size: 1.5rem;
  margin: 0;
}

.page-header .header-links {
  display: flex;
  gap: 1rem;
}

.page-header .header-links a {
  color: #00ffcc;
  text-decoration: none;
}

.page-footer {
  display: flex;
  justify-content: center; 
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
}

.footer-content {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
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

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.2rem;
  }

  .page-header .header-links {
    gap: 0.8rem;
  }

  .page-footer {
    font-size: 0.9rem;
  }
}
</style>
