<template>
  <Starfield />
  <div class="base-page">
    <header class="page-header">
      <div class="header-content">
        <h1>Derek Corniello</h1>
        <nav class="header-links">
          <router-link to="projects">Projects</router-link>
          <router-link to="contact">Contact</router-link>
          <router-link to="blog">Blog</router-link>
          <router-link to="about">About Me</router-link>
        </nav>
      </div>
    </header>

    <main class="page-content">
      <slot></slot> <!-- Content injected here -->
    </main>

    <footer class="page-footer">
      <div class="footer-content">
        Created by: Derek Corniello - <a href="https://github.com/DerekCorniello/DerekCorniello.github.io" target="_blank" style="margin-left: 0px;">Source Code</a>
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

body {
  overscroll-behavior: none; /* Prevents scrolling when content is minimal */
}

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
  display: inline-flex; /* Ensures proper alignment of text and link */
  gap: 0.3rem; /* Adds consistent spacing between elements */
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
