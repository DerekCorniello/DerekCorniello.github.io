<template>
  <div class="container">
    <h2 class="title">
      <slot name="title"></slot> <!-- Named slot for the title -->
    </h2>
    <hr class="divider" />
    <div class="body">
      <slot></slot> <!-- Default slot for the body content -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.7); /* Dark semi-transparent background */
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  max-width: 70%;
}

.title {
  font-size: 2rem;
  color: #00ffcc; /* Neon-like green */
  margin: 0;
  padding-bottom: 1rem; /* Space below title */
  text-align: center;
}

.divider {
  border: 0;
  height: 1px;
  background: #00ffcc; /* Divider color matching the title */
  margin-bottom: 1rem;
}

.body {
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  padding-top: 1rem; /* Space above the body content */
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .body {
    font-size: 1rem;
  }
}
</style>
