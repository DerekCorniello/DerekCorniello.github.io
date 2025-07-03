<template>
  <BasePage>
    <div class="content-container">
      
      <div class="terminal-and-card">
        <div class="floating-headshot-container">
          <img
            src="/favicon.ico"
            alt="Derek Corniello Headshot"
            class="floating-headshot"
            ref="headshot"
            @mousemove="handleHeadshotTilt"
            @mouseleave="resetHeadshotTilt"
          />
        </div>
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
    },
    handleHeadshotTilt(e) {
      const headshot = this.$refs.headshot;
      const rect = headshot.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxTilt = 16;
      const rotateY = ((x - centerX) / centerX) * maxTilt;
      const rotateX = -((y - centerY) / centerY) * maxTilt;
      headshot.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      headshot.style.boxShadow = [
        '0 0 0 4px rgba(0,255,204,0.25)',
        '0 0 12px 4px rgba(0,255,204,0.25)',
        '0 0 24px 8px rgba(0,255,204,0.25)',
        '0 0 48px 16px rgba(0,255,204,0.25)'
      ].join(', ');
      headshot.style.transition = 'transform 0.15s cubic-bezier(.25,.8,.25,1), box-shadow 0.15s cubic-bezier(.25,.8,.25,1)';
      headshot.style.animation = 'none';
    },
    resetHeadshotTilt() {
      const headshot = this.$refs.headshot;
      headshot.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg)';
      headshot.style.transition = 'transform 0.45s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)';
      headshot.style.boxShadow = [
        '0 0 0 2px rgba(0,255,204,0.25)',
        '0 0 8px 2px rgba(0,255,204,0.25)',
        '0 0 16px 4px rgba(0,255,204,0.25)',
        '0 0 32px 12px rgba(0,255,204,0.25)'
      ].join(', ');
      setTimeout(() => {
        headshot.style.transition = '';
        headshot.style.animation = 'float 5.5s ease-in-out infinite';
      }, 500);
    }
  },
  mounted() {
    document.title = "Derek Corniello's Space!";
    if (this.$refs.headshot) {
      this.$refs.headshot.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg)';
    }
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
.floating-headshot-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  position: relative;
}

.floating-headshot {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #000;
  /* Glow matches terminal hover (rgba(0,255,204,0.25)) */
  border: none;
  box-shadow:
    0 0 0 2px rgba(0,255,204,0.25), /* tight bright ring */
    0 0 8px 2px rgba(0,255,204,0.25), /* inner glow */
    0 0 16px 4px rgba(0,255,204,0.25), /* medium glow */
    0 0 32px 12px rgba(0,255,204,0.25); /* soft outer glow */
  transition: transform 0.25s cubic-bezier(.25,.8,.25,1), box-shadow 0.25s cubic-bezier(.25,.8,.25,1);
  animation: float 5.5s ease-in-out infinite;
  cursor: pointer;
  will-change: transform;
}

.floating-headshot:hover {
  /* 3D tilt effect on hover */
  transform: perspective(400px) rotateY(12deg) rotateX(8deg);
  box-shadow:
    0 0 0 12px rgba(0, 255, 204, 0.92),
    0 0 32px 8px rgba(0, 255, 204, 0.85);
}

@media (max-width: 600px) {
  .floating-headshot {
    width: 80px;
    height: 80px;
  }
  .floating-headshot-container {
    margin-bottom: 1rem;
  }
}

</style>
