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
        <div class="terminal-line">
          <span ref="typewriter" class="terminal-text"></span>
          <span class="cursor">_</span>
        </div>
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
  border-radius: 10px;
  width: 100%;
  max-width: 1000px;
  background-color: rgba(0, 0, 0, 0.85);
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.4);
  border: 2px solid rgba(0, 255, 204, 0.5);
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  
  @media (min-width: 640px) {
    padding: 1.5rem;
    border-radius: 12px;
    transform: scale(1.05);
    box-shadow: 0 0 35px rgba(0, 255, 204, 0.4);
  }
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
  padding: 1rem 0.5rem;
  
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
}

.ascii-art {
  color: #00ffcc;
  text-align: center;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  opacity: 0.9;
  font-size: 0.5rem;
  text-shadow: 0 0 6px rgba(0, 255, 204, 0.7);
  letter-spacing: 0.5px;
  font-weight: bold;
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  
  @media (min-width: 400px) {
    font-size: 0.6rem;
    line-height: 1.15;
  }
  
  @media (min-width: 640px) {
    font-size: 0.8rem;
    margin-bottom: 2rem;
    line-height: 1.2;
  }
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  
  pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}

.greeting-text {
  text-align: center;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
  box-sizing: border-box;
}

.terminal-line {
  display: inline-block;
  text-align: center;
  position: relative;
  max-width: 100%;
  white-space: nowrap;
}

.terminal-text {
  color: #00ffcc;
  text-shadow: 0 0 8px rgba(0, 255, 204, 0.7);
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 500;
  line-height: 1.6;
  display: inline;
  text-align: center;
  white-space: pre-wrap;
  
  @media (min-width: 400px) {
    font-size: 1.2rem;
  }
  
  @media (min-width: 640px) {
    font-size: 1.4rem;
    letter-spacing: 1px;
    text-shadow: 0 0 10px #00ffcc;
  }
  
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
}

.cursor {
  display: inline;
  font-family: var(--font-mono, 'Fira Code', monospace);
  color: #00ffcc;
  animation: blink .75s step-end infinite;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-left: 2px;
  text-shadow: 0 0 8px rgba(0, 255, 204, 0.7);
  
  @media (min-width: 400px) {
    font-size: 1.2rem;
  }
  
  @media (min-width: 640px) {
    font-size: 1.4rem;
    line-height: 1.6;
    text-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Adjust ASCII art for very small screens */
@media (max-width: 360px) {
  .ascii-art {
    font-size: 0.4rem;
    line-height: 1;
  }
  
  .terminal-text {
    font-size: 0.9rem;
  }
}
</style>
