<template>
  <div class="terminal-container">
    <span ref="typewriter" class="terminal-text"></span>
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
  font-family: "Inconsolata", monospace;
  font-size: 2rem;
  color: #00ffcc;
  white-space: normal; /* Allow text to wrap onto the next line */
  padding: 1rem;
  border-radius: 10px;
  width: 50ch;
  background-color: rgba(0, 0, 0, 0.5); 
  overflow: hidden;
  display: inline-block; /* Ensure it doesn't stretch across the entire width */
}

.terminal-text {
  padding-right: 5px;
  display: inline-block;
  text-align: center;
  text-shadow: 0 0 8px #00ffcc; 
}
</style>
