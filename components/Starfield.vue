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
}
</style>
