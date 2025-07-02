<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <div class="terminal-buttons">
        <span class="terminal-button red"></span>
        <span class="terminal-button yellow"></span>
        <span class="terminal-button green"></span>
      </div>
      <div class="terminal-title">terminal@dereks-space:~</div>
    </div>
    <div class="terminal-content">
      <div class="ascii-art">
        <pre>
 _____                _       _____                 _      _ _       
|  __ \              | |     / ____|               (_)    | | |      
| |  | | ___ _ __ ___| | __ | |     ___  _ __ _ __  _  ___| | | ___  
| |  | |/ _ \ '__/ _ \ |/ / | |    / _ \| '__| '_ \| |/ _ \ | |/ _ \ 
| |__| |  __/ | |  __/   <  | |___| (_) | |  | | | | |  __/ | | (_) |
|_____/ \___|_|  \___|_|\_\  \_____\___/|_|  |_| |_|_|\___|_|_|\___/ 
        </pre>
      </div>
      <div class="greeting-text">
        <span ref="typewriter" class="terminal-text"></span>
        <span class="cursor">_</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "TerminalGreeting",
  mounted() {
    this.animateTypewriter();
  },
  methods: {
    animateTypewriter() {
      const text = "Welcome, traveler, to Derek Corniello's Space!";
      const typewriter = this.$refs.typewriter;
      typewriter.innerHTML += "> "

      let i = 0;
      const speed = 100; // Typing speed (milliseconds per character)
      const typingDuration = 3000; // Total duration of typing effect (3 seconds)

      // Calculate individual character delay based on total duration
      const delay = typingDuration / text.length;

      // Create the typing effect by adding one character at a time
      const typingEffect = () => {
        if (i < text.length) {
          typewriter.innerHTML += text.charAt(i);
          i++;
          setTimeout(typingEffect, delay);
        }
      };

      typingEffect();
    },
  },
};
</script>

<style scoped>
.terminal-container {
  font-family: var(--font-mono, 'Fira Code', monospace);
  font-size: 1.5rem;
  color: #00ffcc;
  border-radius: 12px;
  width: 100%;
  max-width: 1000px;
  background-color: rgba(0, 0, 0, 0.85);
  overflow: hidden;
  box-shadow: 0 0 35px rgba(0, 255, 204, 0.4);
  border: 2px solid rgba(0, 255, 204, 0.5);
  margin: 0 auto;
  transform: scale(1.05);
  padding: 1.5rem;
}

.terminal-header {
  background: rgba(0, 0, 0, 0.4);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 255, 204, 0.2);
}

.terminal-buttons {
  display: flex;
  gap: 6px;
  margin-right: 10px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.7;
}

.terminal-button.red { background: #ff5f56; }
.terminal-button.yellow { background: #ffbd2e; }
.terminal-button.green { background: #27c93f; }

.terminal-title {
  font-size: 1.2rem;
  margin-top: 0.2rem;
  color: #00ffcc;
  opacity: 0.7;
}

.terminal-content {
  padding: 1.5rem;
}

.ascii-art {
  color: #00ffcc;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.2;
  opacity: 0.9;
  font-size: 1.1rem;
  text-shadow: 0 0 8px rgba(0, 255, 204, 0.7);
  letter-spacing: 1px;
  font-weight: bold;
}

.greeting-text {
  text-align: center;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
}

.terminal-text {
  color: #00ffcc;
  text-shadow: 0 0 10px #00ffcc;
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-weight: 500;
}

.cursor {
  display: inline-block;
  font-family: var(--font-mono, 'Fira Code', monospace);
  color: #00ffcc;
  animation: blink .75s step-end infinite;
  font-size: 1.4rem;
  line-height: 1;
  margin-left: 2px;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .terminal-text {
    font-size: 1.1rem;
  }
  
  .ascii-art {
    font-size: 0.6rem;
  }
}
</style>
