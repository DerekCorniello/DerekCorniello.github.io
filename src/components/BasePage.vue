<template>
  <Starfield />
  <div class="base-page">
    <header class="page-header">
      <div class="header-content">
          <router-link to="/"><h1>Derek Corniello</h1></router-link>
        <nav class="header-links">
          <router-link to="/about">About Me</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/resume">Resume</router-link>
        </nav>
      </div>
    </header>

    <main class="page-content">
      <slot></slot> <!-- Content injected here -->
    </main>
    <footer class="page-footer">
      <div class="footer-content">
        <p>Created by: Derek Corniello</p>
        <p><a href="https://github.com/DerekCorniello/DerekCorniello.github.io" target="_blank">Source Code</a></p>
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
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
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

.page-header .header-links a:hover {
  text-decoration: underline;
}

.page-footer {
  display: flex;
  justify-content: center; /* Centers the content */
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  color: white;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
}

.footer-content {
  display: flex; /* Ensures proper flexbox behavior */
  flex-direction: column; /* Stack the items vertically */
  align-items: center; /* Center the items horizontally */
}

.page-footer a {
  color: #ff4081;
  text-decoration: none;
}

.page-footer a:hover {
  text-decoration: underline;
}

/* Allow page content to take up remaining space */
.page-content {
  flex: 1 0 auto; /* Ensures this section grows but does not stretch infinitely */
  padding: 2rem;
  color: white;
}

/* Media queries for responsiveness */
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
