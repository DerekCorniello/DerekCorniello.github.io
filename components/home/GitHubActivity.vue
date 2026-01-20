<template>
  <section class="github-activity">
    <h2 class="section-title">GitHub Stats</h2>
    <div class="github-grid">
      <div class="github-card full-width no-select">
        <div class="stats-row no-select">
          <div class="stat-image">
            <img 
              :src="`https://github-readme-stats.vercel.app/api?username=DerekCorniello&theme=tokyonight&bg_color=14171c&hide_border=true&show_icons=true`" 
              alt="GitHub Stats" 
            />
          </div>
          <div class="stat-image">
            <img 
              :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=DerekCorniello&langs_count=8&layout=compact&exclude_repo=dotfiles,NeoVim-Setup&size_weight=0.5&count_weight=0.5&hide=MATLAB,HTML,CSS,JavaScript&theme=tokyonight&hide_border=true&bg_color=14171c`" 
              alt="Top Languages" 
            />
          </div>
        </div>
      </div>
    </div>
    <div class="view-all">
      <a href="https://github.com/DerekCorniello" target="_blank" rel="noopener noreferrer" class="btn">
        View on GitHub
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'GitHub Stats - Derek Corniello',
})
</script>

<style scoped>
.github-activity {
  padding: 2rem 0;
}

.github-grid {
  display: flex;
  justify-content: center;
}

.github-card {
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
}

.github-card.full-width {
  width: 100%;
  max-width: 900px;
}

.stats-row {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 0;
}

.stat-image {
  flex: 0 0 auto;
  height: 200px;
  display: flex;
  align-items: flex-start;
  min-width: 0;
}

.stat-image img {
  height: 100%;
  width: auto;
  max-width: 100%;
}

.view-all {
  text-align: center;
  margin-top: 1.5rem;
}

@media (max-width: 600px) {
  .stats-row {
    flex-direction: column;
    align-items: center;
  }

  .stat-image {
    width: 100%;
    height: auto;
  }

  .stat-image img {
    width: 100%;
    height: auto;
  }
}
</style>
