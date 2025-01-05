<template>
  <BasePage>
    <div class="content-container">
      <div class="terminal-and-card">
        <div class="terminal-greeting-container">
          <TerminalGreeting />
        </div>
        <div class="landing-card-container">
          <div class="landing-card">
            <div class="intro">
              <p class="tagline">Innovative developer crafting cutting-edge solutions and intuitive designs to solve real-world problems, driven to deliver impactful and innovative solutions</p>
            </div>
            <div class="cta-buttons">
              <button @click="navigateTo('about')" class="cta-button">About Me</button>
              <button @click="navigateTo('contact')" class="cta-button">Get in Touch</button>
              <button @click="navigateTo('projects')" class="cta-button">View Projects</button>
              <button @click="navigateTo('blog')" class="cta-button">Visit Blog</button>
            </div>
          </div>
        </div>
      </div>
    <WordSphere :font-size="1.5"/>
    </div>
  </BasePage>
</template>

<script>
import BasePage from '@/components/BasePage.vue';
import TerminalGreeting from '@/components/TerminalGreeting.vue';
import WordSphere from '@/components/WordSphere.vue';

export default {
  name: 'Home',
  components: {
    BasePage,
    TerminalGreeting,
    WordSphere
  },
  methods: {
    navigateTo(section) {
      this.$router.push({ name: section });
    }
  },
  mounted() {
    document.title = "Derek Corniello's Space!";
  }
};
</script>

<style scoped>
html, body {
  background-color: #000; 
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh; 
  padding: 0 2rem; 
  box-sizing: border-box; 
}

.terminal-and-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.terminal-greeting-container,
.landing-card-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.landing-card {
  position: relative;
  background: rgba(0, 0, 0, 0.5); 
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  text-align: center;
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.word-sphere-container {
  width: 100%;
  height: 400px;
  margin-top: 2rem;
}

.tagline {
  font-size: 1.5rem;
  color: #ffffffaa;
  margin: 0.5rem 0;
}

.cta-buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
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

@media (min-width: 968px) {
  .content-container {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    height: 75vh;
  }

  .terminal-and-card {
    width: 50%;
  }

  .word-sphere-container {
    width: 50%;
    margin-top: 0;
    height: 100%;
  }
}

@media (max-width: 768px) {
  .landing-card {
    margin-top: 50px;
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
    flex-direction: column;
  }
}
</style>
