<template>
  <BasePage>
    <div class="blog-container">
      <h1 class="blog-title">{{ title }}</h1>
      
      <div class="blog-content">
        <slot></slot> 
      </div>
    </div>
  </BasePage>
</template>

<script>
import BasePage from '@/components/BasePage.vue';

export default {
  name: 'BaseBlog',
  components: {
    BasePage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.blog-container {
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8); 
  border-radius: 8px;
}

.blog-title {
  font-size: 2.5rem;
  color: #ff66b2; 
  margin-bottom: 1rem;
}

.blog-content {
  font-size: 1.2rem;
  color: white;
}
</style>
