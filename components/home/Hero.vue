<template>
  <section class="hero">
    <div class="hero-content">
      <div class="headshot-container">
        <img
          src="/headshot.jpg"
          alt="Derek Corniello"
          class="headshot"
        />
      </div>
      <h1 class="name">Derek Corniello</h1>
      <h2 class="role">Software Engineer Intern @ Fifth Third Bank</h2>
      <p class="location">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        Cincinnati, OH
      </p>
      <p class="bio">Building scalable, reliable, and performant backend systems. Currently working on cloud-based services with AWS at Fifth Third Bank. Creating a compiler in my free time. You can also find me in the <NuxtLink to="/terminal" class="terminal-link">terminal</NuxtLink>.</p>
      <div class="cta-buttons">
        <NuxtLink to="/projects" class="btn">
          View Projects
        </NuxtLink>
        <NuxtLink to="/contact" class="btn">
          Contact Me
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  padding: 2rem 0;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.headshot-container {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.headshot {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 3px solid var(--accent-orange);
  box-shadow: var(--shadow-lg);
}

.name {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.role {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--accent-orange);
  margin-bottom: 0.75rem;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.bio {
  color: var(--accent-green);
  font-size: 0.95rem;
  margin-bottom: 2rem;
  font-family: var(--font-mono);
}

.terminal-link {
  color: var(--accent-mauve);
  text-decoration: none;
  font-weight: 500;
}

.terminal-link:hover {
  text-decoration: underline;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 480px) {
  .name {
    font-size: 2rem;
  }

  .role {
    font-size: 1.1rem;
  }

  .headshot {
    width: 120px;
    height: 120px;
  }
}
</style>
