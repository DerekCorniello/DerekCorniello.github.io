<template>
  <BasePage>
    <div class="content-container">
      <div class="terminal-and-card">
        <div class="floating-headshot-container">
          <img
            src="/headshot.jpeg"
            alt="Derek Corniello Headshot"
            class="floating-headshot"
            ref="headshot"
            @mousemove="handleHeadshotTilt"
            @mouseleave="resetHeadshotTilt"
            @touchmove.passive="handleTouchMove"
            @touchend.passive="resetHeadshotTilt"
          />
        </div>
        <div class="terminal-greeting-container">
          <TerminalGreeting />
        </div>
        <div class="landing-card-container">
          <div class="landing-card">
            <div class="intro">
              <p class="tagline">
                Innovative developer crafting cutting-edge solutions and intuitive designs to solve
                real-world problems, driven to deliver impactful and innovative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      <WordSphere
        class="word-sphere"
        :font-size="1.2"
        :rotation-speed="0.0015"
        text-color="#00ffcc"
      />
    </div>
  </BasePage>
</template>

<script>
import BasePage from '@/components/BasePage.vue'
import TerminalGreeting from '@/components/TerminalGreeting.vue'
import WordSphere from '@/components/WordSphere.vue'

export default {
  name: 'Home',
  components: {
    BasePage,
    TerminalGreeting,
    WordSphere,
  },
  data() {
    return {}
  },
  methods: {
    handleTouchMove(e) {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const mouseEvent = new MouseEvent('mousemove', {
          clientX: touch.clientX,
          clientY: touch.clientY,
        })
        this.handleHeadshotTilt(mouseEvent)
      }
    },
    navigateTo(section) {
      this.$router.push({ name: section })
    },
    handleHeadshotTilt(e) {
      const headshot = this.$refs.headshot
      const rect = headshot.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const maxTilt = 16
      const rotateY = ((x - centerX) / centerX) * maxTilt
      const rotateX = -((y - centerY) / centerY) * maxTilt
      headshot.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      headshot.style.transition = 'transform 0.15s cubic-bezier(.25,.8,.25,1)'
      headshot.style.animation = 'none'
    },
    resetHeadshotTilt() {
      const headshot = this.$refs.headshot
      headshot.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg)'
      headshot.style.transition = 'transform 0.45s cubic-bezier(.25,.8,.25,1)'
      setTimeout(() => {
        headshot.style.transition = ''
        headshot.style.animation = 'float 5.5s ease-in-out infinite'
      }, 450)
    },
  },
  mounted() {
    document.title = "Derek Corniello's Space!"
    if (this.$refs.headshot) {
      this.$refs.headshot.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg)'
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');

html,
body {
  background-color: #000;
  font-family: 'Fira Code', monospace;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
}

.terminal-and-card {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 0.5rem;
  }
}

.terminal-greeting-container {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: float-reverse 6s ease-in-out infinite;
  transform-origin: center;
  max-width: 800px;
  margin: 0 auto;
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
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 204, 0.2);
  text-align: center;
  width: 100%;
  max-width: 800px;
  transition: all 0.3s ease;
  z-index: 2;
  animation: float-reverse 6s ease-in-out infinite;
  margin: 1rem auto;
  box-sizing: border-box;
}

.tagline {
  font-size: 1rem;
  color: #ffffff;
  margin: 0.75rem 0 0.5rem;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
  position: relative;
  z-index: 2;

  @media (min-width: 640px) {
    font-size: 1.2rem;
    margin: 1rem 0 0.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.word-sphere {
  width: 100%;
  height: 300px;
  margin: 2rem 0;
  position: relative;

  @media (min-width: 640px) {
    height: 350px;
    margin: 3rem 0;
  }

  @media (min-width: 1024px) {
    height: 450px;
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

@media (min-width: 1200px) {
  .content-container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 2rem;
    max-width: 1600px;
    margin: 0 auto;
    height: auto;
    min-height: 100vh;
  }

  .terminal-and-card {
    width: auto;
    max-width: 800px;
    flex: 0 0 auto;
    margin: 0;
  }

  .word-sphere {
    width: 500px;
    height: 500px;
    margin: 0;
    flex: 0 0 auto;
  }

  .terminal-greeting-container {
    transform: scale(1);
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .landing-card {
    margin: 30px auto 0;
    padding: 1.5rem 1rem;
    width: 100%;
    max-width: 400px;
  }

  .tagline {
    font-size: 1rem;
    margin: 0.75rem 0 0.5rem;
    padding: 0;
    line-height: 1.5;
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
  border: none;
  box-shadow:
    0 0 0 2px rgba(0, 255, 204, 0.4),
    0 0 4px 6px rgba(0, 255, 204, 0.2),
    0 0 8px 8px rgba(0, 255, 204, 0.1);
  transition:
    transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  animation: float 5.5s ease-in-out infinite;
  cursor: pointer;
  will-change: transform;
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
