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
        <p><a href="https://github.com/DerekCorniello/DerekCorniello.github.io" target="_blank" class="source-code-button">Source Code</a></p>
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
