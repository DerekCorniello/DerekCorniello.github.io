<template>
  <div class="home-container">
    <Starfield />
    <TerminalGreeting />
  </div>
</template>

<script>
import Starfield from '@/components/Starfield.vue';
import TerminalGreeting from '@/components/TerminalGreeting.vue';

export default {
  name: 'Home',
  components: {
    Starfield,
    TerminalGreeting
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
</style>
