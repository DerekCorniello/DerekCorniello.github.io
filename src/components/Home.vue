<template>
  <div class="home-container">
    <Starfield />
    <h1 class="hello-world">Hello World</h1>
  </div>
</template>

<script>
import Starfield from '@/components/Starfield.vue';

export default {
  name: 'Home',
  components: {
    Starfield
  }
};
</script>

<style scoped>
.home-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.hello-world {
  position: relative;
  font-size: 3rem;
  color: white;
  z-index: 2;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}
</style>
