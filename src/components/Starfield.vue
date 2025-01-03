<template>
  <canvas ref="canvas" class="starfield"></canvas>
</template>

<script>
import { nextTick } from 'vue';
import initStarfield from '../scripts/starfield.js';

export default {
  name: 'Starfield',
  mounted() {
    nextTick(() => {
      const canvas = this.$refs.canvas;
      if (canvas) {
        initStarfield(canvas);
      }
    });
  },
};
</script>

<style scoped>
.starfield {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
