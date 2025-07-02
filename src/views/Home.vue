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
              <button @click="navigateTo('about')" class="cta-button">
                About me
              </button>
              <button @click="navigateTo('contact')" class="cta-button">
                Contact
              </button>
              <button @click="navigateTo('projects')" class="cta-button">
                Projects
              </button>
              <button @click="navigateTo('blog')" class="cta-button">
                Blog
              </button>
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
  data() {
    return {};
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
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.terminal-and-card {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.terminal-greeting-container {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: float-reverse 6s ease-in-out infinite;
}

.landing-card-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.landing-card {
  position: relative;
  background: rgba(0, 10, 20, 0.5);
  backdrop-filter: blur(10px);
  color: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 204, 0.2);
  text-align: center;
  width: 70%;
  max-width: 800px;
  transition: all 0.3s ease;
  z-index: 2;
  animation: float-reverse 6s ease-in-out infinite;
  margin: 2rem auto;
}

.landing-card:hover {
  box-shadow: 0 8px 40px rgba(0, 255, 204, 0.25);
  border-color: rgba(0, 255, 204, 0.3);
}

.tagline {
  font-size: 1.4rem;
  color: #ffffff;
  margin: 1rem 0 2rem;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
  position: relative;
  z-index: 2;
}

.cta-buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.cta-button {
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #001a1a;
  background: #00ffcc;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-family: var(--font-mono, 'Fira Code', monospace);
  text-align: center;
  min-width: 120px;
  box-shadow: 0 4px 15px rgba(0, 255, 204, 0.3);
}

.cta-button:hover {
  background: #00e6b8;
  box-shadow: 0 6px 20px rgba(0, 255, 204, 0.4);
  transform: translateY(-2px);
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 255, 204, 0.3);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

/* Add some floating space particles */
.space-particle {
  position: absolute;
  background: rgba(0, 255, 204, 0.6);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
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
    width: 100%;
  }
  
  .cta-button {
    width: 100%;
    margin: 0.3rem 0;
  }
}
</style>
