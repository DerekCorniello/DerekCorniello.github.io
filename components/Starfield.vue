<template>
  <canvas ref="canvas" class="starfield"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(() => {
  // Defer Three.js loading to improve initial page render
  // This reduces main-thread work and improves FCP
  const loadStarfield = async () => {
    // Dynamically import the entire starfield module (including Three.js)
    const initStarfield = (await import('~/scripts/starfield.js')).default
    initStarfield(canvas.value)
    
    // Add visible class after Three.js initializes
    canvas.value.classList.add('visible')
  }
  
  // Start loading after a short delay to prioritize initial page render
  setTimeout(loadStarfield, 100)
})
</script>

<style scoped>
.starfield {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.starfield.visible {
  opacity: 1;
}
</style>
