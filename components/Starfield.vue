<template>
  <canvas ref="canvas" class="starfield"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import initStarfield from '~/scripts/starfield.js'

const canvas = ref(null)

onMounted(() => {
  if (canvas.value) {
    initStarfield(canvas.value)
    // Add visible class after a short delay for smooth fade-in
    setTimeout(() => {
      canvas.value.classList.add('visible')
    }, 100)
  }
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
