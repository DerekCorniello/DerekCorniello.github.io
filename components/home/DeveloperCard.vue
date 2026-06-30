<template>
  <section class="developer-card">
    <h2 class="section-title">Developer Card</h2>
    <div class="card-wrapper">
      <object
        type="image/svg+xml"
        data="https://dev-card.corniedj.workers.dev/card.svg"
        width="900"
        height="500"
        style="max-width: 100%;"
      >
        <img src="https://dev-card.corniedj.workers.dev/card.svg" alt="Developer Card" />
      </object>
    </div>
  </section>
</template>

<style scoped>
.developer-card {
  padding: 2rem 0;
}

.card-wrapper {
  display: flex;
  justify-content: center;
}
</style>
