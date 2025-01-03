<template>
  <div class="home-container">
    <Starfield />
    <div class="center-container">
      <div class="terminal-greeting-container">
        <TerminalGreeting />
      </div>
      <div class="landing-card">
        <div class="intro">
          <p class="tagline">Innovative developer crafting cutting-edge solutions and intuitive designs to solve real-world problems—driven to deliver impact and elevate user experiences</p>
        </div>
        <div class="cta-buttons">
          <button @click="navigateTo('projects')" class="cta-button">View Projects</button>
          <button @click="navigateTo('contact')" class="cta-button">Get in Touch</button>
          <button @click="navigateTo('blog')" class="cta-button">Visit Blog</button>
          <button @click="navigateTo('about')" class="cta-button">About Me</button>
          <button @click="navigateTo('base')" class="cta-button">Test</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Starfield from '@/components/Starfield.vue';
import TerminalGreeting from '@/components/TerminalGreeting.vue';

export default {
  name: 'Home',
  components: {
    Starfield,
    TerminalGreeting
  },
  methods: {
    navigateTo(section) {
      this.$router.push({ name: section });
    }
  }
};
</script>

<style scoped>
.home-container {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the content */
  align-items: center;     /* Horizontally center the content */
  background-color: black;
}

.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.terminal-greeting-container {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.landing-card {
  position: relative;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  text-align: center;
  width: 90%;
  max-width: 700px; /* Add a maximum width for larger screens */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tagline {
  font-size: 1.2rem;
  color: #ffffffaa;
  margin: 0.5rem 0;
}

.cta-buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
}

.cta-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: black;
  background-color: #00ffcc;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 255, 204, 0.8);
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .landing-card {
    margin-top: 50px; /* Adjust spacing for smaller screens */
    padding: 1.5rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .cta-button {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  .cta-buttons {
    flex-direction: column; /* Stack buttons vertically on small screens */
  }
}
</style>
