<template>
  <div class="container">
    <div class="container-inner">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container'
};
</script>

<style scoped>
.container {
  background: rgba(0, 10, 20, 0.5);
  border: 1px solid rgba(0, 255, 204, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  margin: 2rem auto;
  width: 70%;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.container-inner {
  position: relative;
  z-index: 1;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  padding-bottom: 1.5rem;
  text-align: center;
}

.divider-container {
  position: relative;
  height: 2px;
  margin: 1rem 0 2rem;
}

.divider-line {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 204, 0.8),
    transparent
  );
  width: 100%;
  position: absolute;
}

.divider-glow {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 204, 0.2),
    transparent
  );
  filter: blur(2px);
  width: 100%;
  position: absolute;
}

.body {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: left;
  padding: 0.5rem 0;
}


@media (max-width: 768px) {
  .container {
    padding: 1.75rem;
    width: 95%;
  }

  .title {
    font-size: 1.8rem;
    padding-bottom: 1rem;
  }

  .body {
    font-size: 1rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.25rem;
  }

  .title {
    font-size: 1.5rem;
  }
}
</style>
