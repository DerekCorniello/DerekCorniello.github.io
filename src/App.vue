<template>
  <div>
    <Starfield />
    <router-view />
  </div>
</template>

<script>
import Starfield from '@/components/Starfield.vue'

export default {
  name: 'App',
  components: {
    Starfield,
  },
}
</script>
