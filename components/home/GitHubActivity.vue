<template>
  <section class="github-activity">
    <h2 class="section-title">GitHub Stats</h2>
    <div class="github-grid">
      <div class="github-card full-width no-select">
        <div class="stats-row no-select">
          <div v-if="loading" class="loading-container">
            <div class="loading-spinner"></div>
            <p>Loading stats...</p>
          </div>
          <template v-else-if="error">
            <p class="error-message">Sorry, GitHub stats failed to load. You can see the full picture <a :href="githubUrl" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </template>
          <template v-else>
            <img 
              :src="statsUrl" 
              alt="GitHub Stats"
              class="stat-img"
            />
            <img 
              :src="langsUrl" 
              alt="Top Languages"
              class="stat-img"
            />
          </template>
        </div>
      </div>
    </div>
    <div class="view-all">
      <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="btn">
        View on GitHub
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const githubUrl = 'https://github.com/DerekCorniello'
const statsUrl = 'https://github-readme-stats.vercel.app/api?username=DerekCorniello&theme=tokyonight&bg_color=14171c&hide_border=true&show_icons=true'
const langsUrl = 'https://github-readme-stats.vercel.app/api/top-langs/?username=DerekCorniello&langs_count=8&layout=compact&exclude_repo=dotfiles,NeoVim-Setup&size_weight=0.5&count_weight=0.5&hide=MATLAB,HTML,CSS,JavaScript&theme=tokyonight&hide_border=true&bg_color=14171c'

const loading = ref(true)
const error = ref(false)
let errorCount = 0

const checkComplete = () => {
  if (errorCount >= 2) {
    loading.value = false
    error.value = true
  }
}

onMounted(() => {
  const imgs = document.querySelectorAll('.stat-img')
  imgs.forEach((img) => {
    img.addEventListener('error', () => {
      errorCount++
      checkComplete()
    })
    img.addEventListener('load', () => {
      errorCount++
      checkComplete()
    })
  })
  setTimeout(() => {
    if (loading.value) {
      loading.value = false
      if (errorCount < 2) error.value = true
    }
  }, 10000)
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
  align-items: center;
  min-height: 200px;
}

.stat-img {
  height: 200px;
  width: auto;
  max-width: 100%;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  text-align: center;
}

.error-message a {
  color: var(--primary);
  text-decoration: underline;
}

.error-message a:hover {
  color: #b48ef7;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-container p {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin: 0;
}

.error-container {
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.error-message {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.error-link {
  color: var(--primary);
  font-size: 0.875rem;
  text-decoration: none;
}

.view-all {
  text-align: center;
  margin-top: 1.5rem;
}

@media (max-width: 900px) {
  .stats-row {
    flex-direction: column;
    align-items: center;
    min-height: auto;
  }
  
  .stat-img {
    width: 100%;
    height: auto;
  }
}
</style>
