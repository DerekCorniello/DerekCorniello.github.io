<template>
  <section class="recent-blog">
    <h2 class="section-title">Recent Posts</h2>
    <div v-if="loading" class="loading-posts">
      <p>Loading posts...</p>
    </div>
    <div v-else class="posts-grid">
      <article
        v-for="post in recentPosts"
        :key="post.slug"
        class="post-card"
      >
        <div class="card-header">
          <div class="post-date">{{ post.date }}</div>
          <svg v-if="post.type === 'youtube'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="post-icon">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="post-icon">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>
        <h3 class="post-title">
          <a v-if="post.type === 'youtube'" :href="post.url" target="_blank" rel="noopener noreferrer" class="post-link">
            {{ post.title }}
          </a>
          <NuxtLink v-else :to="`/posts/${post.slug}`" class="post-link">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <div class="post-meta">
          <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
        </div>
      </article>
    </div>
    <div class="view-all">
      <NuxtLink to="/posts" class="btn">
        View All Posts
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Post {
  slug?: string
  type: 'blog' | 'youtube'
  date: string
  dateObj: Date
  title: string
  excerpt: string
  tags: string[]
  url?: string
}

const recentPosts = ref<Post[]>([])
const loading = ref(true)

const fetchRecentPosts = async () => {
  const blogPosts = [
    {
      slug: 'keyboard',
      type: 'blog' as const,
      date: 'Aug 22, 2025',
      dateObj: new Date('2025-08-22'),
      title: 'I Built a Custom Keyboard!',
      excerpt: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, firmware, and lessons learned.',
      tags: ['Hardware', 'DIY'],
    },
    {
      slug: 'nvim-transition',
      type: 'blog' as const,
      date: 'Jul 21, 2024',
      dateObj: new Date('2024-07-21'),
      title: 'My Transition from VSC*de to NeoVim',
      excerpt: 'My experience transitioning from VSC*de to NeoVim, including setting up lazy.nvim, Mason, and other plugins.',
      tags: ['Neovim', 'Development'],
    },
  ]

  let youtubeVideos: Post[] = []

  try {
    const channelId = 'UCRhMRc50jbl7B_dfjS5lsqw'
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    if (data.status === 'ok' && data.items) {
      youtubeVideos = data.items.slice(0, 4).map((item: any) => {
        const videoId = item.guid.split(':').pop()
        return {
          type: 'youtube' as const,
          id: videoId,
          date: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          dateObj: new Date(item.pubDate),
          title: item.title,
          excerpt: item.description ? item.description.replace(/<[^>]*>/g, '').slice(0, 80) : '',
          tags: ['YouTube'],
          url: `https://www.youtube.com/watch?v=${videoId}`,
        }
      })
    }
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error)
  }

  const allPosts = [...blogPosts, ...youtubeVideos]
  allPosts.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())
  recentPosts.value = allPosts.slice(0, 4)
  loading.value = false
}

onMounted(() => {
  fetchRecentPosts()
})
</script>

<style scoped>
.recent-blog {
  padding: 2rem 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.loading-posts {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
}

.post-card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.post-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.post-card .post-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 0.5rem;
}

.post-date {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.post-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.post-title .post-link {
  color: var(--text-primary);
  text-decoration: none;
}

.post-title a:hover {
  color: var(--accent-mauve);
}

.post-excerpt {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.post-meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.post-tag {
  padding: 0.15rem 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  color: var(--accent-blue);
  border: 1px solid var(--accent-blue);
  border-radius: 20px;
}

.view-all {
  text-align: center;
  margin-top: 1.5rem;
}
</style>
