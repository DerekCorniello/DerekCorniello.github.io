<template>
  <section class="hero">
    <div class="hero-layout">
      <div class="hero-visual">
        <img
          src="/headshot.jpg"
          alt="Derek Corniello"
          class="headshot"
        />
      </div>
      <div class="hero-content">
        <h1 class="name">Derek Corniello</h1>
        <h2 class="role">Software Engineer Intern @ Fifth Third Bank</h2>
        <p class="location">
          Cincinnati, OH
        </p>
        <p class="bio">Building scalable, reliable, and performant backend systems. Currently working on cloud-based services with AWS at Fifth Third Bank. Creating a compiler in my free time. You can also find me in the <NuxtLink to="/terminal" class="terminal-link">terminal</NuxtLink>.</p>
        <div class="cta-buttons">
          <NuxtLink to="/projects" class="btn">
            View Projects
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-outline">
            Contact Me
          </NuxtLink>
        </div>
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

.hero-layout {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 850px;
  margin: 0 auto;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.headshot {
  width: 170px;
  height: 170px;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  border: 2px solid var(--border);
  box-shadow: var(--shadow-lg);
}

.hero-content {
  text-align: left;
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.role {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--accent-orange);
  margin-bottom: 0.5rem;
}

.location {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.bio {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.7;
  max-width: 500px;
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
  gap: 0.75rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-visual {
    justify-content: center;
  }

  .hero-content {
    text-align: center;
  }

  .bio {
    max-width: none;
  }

  .cta-buttons {
    justify-content: center;
  }

  .name {
    font-size: 2rem;
  }

  .headshot {
    width: 150px;
    height: 150px;
  }
}
</style>
