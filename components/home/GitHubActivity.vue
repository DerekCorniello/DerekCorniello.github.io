<template>
  <section class="github-activity">
    <h2 class="section-title">GitHub Stats</h2>
    <div class="github-grid">
      <div class="github-card">
        <img 
          :src="statsUrl" 
          alt="GitHub Stats"
          class="stat-img"
        />
      </div>
      <div class="github-card">
        <img 
          :src="langsUrl" 
          alt="Top Languages"
          class="stat-img"
        />
      </div>
    </div>
    <div class="github-chart-container">
      <h3 class="chart-title">Contributions in the Last Year</h3>
      <img 
        :src="chartUrl" 
        alt="Derek Corniello's GitHub chart"
        class="github-chart"
      />
    </div>
    <div class="view-all">
      <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="btn">
        View on GitHub
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const githubUrl = 'https://github.com/DerekCorniello'
const statsUrl = 'https://github-readme-stats-fast.vercel.app/api?username=DerekCorniello&theme=transparent&show_icons=true&hide_border=true'
const langsUrl = 'https://github-readme-stats-fast.vercel.app/api/top-langs/?username=DerekCorniello&hide_border=true&theme=transparent&layout=compact&langs_count=8&exclude_repo=dotfiles,NeoVim-Setup&size_weight=0.5&count_weight=0.5&hide=MATLAB,HTML,CSS,JavaScript'
const chartUrl = 'https://ghchart.rshah.org/1a473e/DerekCorniello'
</script>

<style scoped>
.github-activity {
  padding: 2rem 0;
}

.github-grid {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.github-card {
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-card:first-child {
  flex: 1.5;
  min-width: 350px;
}

.github-card:last-child {
  flex: 1;
  min-width: 250px;
}

.stat-img {
  height: 200px;
  width: auto;
  max-width: 100%;
  border-radius: 8px;
}

.view-all {
  text-align: center;
  margin-top: 1.5rem;
}

.github-chart-container {
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem;
  margin-top: 1.5rem;
}

.chart-title {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  font-weight: 500;
  text-align: center;
}

.github-chart {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .github-grid {
    flex-direction: column;
    align-items: center;
  }

  .github-card:first-child,
  .github-card:last-child {
    width: 100%;
    min-width: auto;
    flex: 1;
  }

  .stat-img {
    width: 100%;
    height: auto;
  }
}
</style>
