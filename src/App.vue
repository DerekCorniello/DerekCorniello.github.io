<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>
