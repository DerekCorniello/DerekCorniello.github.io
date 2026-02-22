<template>
  <div class="blog">
    <header class="blog-header">
      <h1>Posts</h1>
      <p>Thoughts on software engineering and development</p>
    </header>

    <div v-if="postsLoading" class="loading-posts">
      <p>Loading posts...</p>
    </div>

    <template v-else>
      <div class="blog-controls">
        <div class="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search posts..."
            class="search-input"
          />
        </div>

        <div class="tags-filter">
          <button
            :class="['tag-filter', { active: selectedTag === null }]"
            @click="selectedTag = null"
          >
            All
          </button>
          <button
            v-for="tag in allTags"
            :key="tag"
            :class="['tag-filter', { active: selectedTag === tag }]"
            @click="selectedTag = tag"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="blog-posts">
      <template v-for="post in filteredPosts" :key="post.slug">
        <NuxtLink
          v-if="post.type === 'blog'"
          :to="`/posts/${post.slug}`"
          class="blog-card"
        >
          <div class="post-date">{{ post.date }}</div>
          <h2>{{ post.title }}</h2>
          <p class="excerpt">{{ post.excerpt }}</p>
          <div class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
          </div>
          <p class="meta">Read more &gt;</p>
        </NuxtLink>

        <a
          v-else
          :href="post.url"
          target="_blank"
          rel="noopener noreferrer"
          class="blog-card youtube-card"
        >
          <div class="video-thumbnail">
            <img 
              :src="post.thumbnail || ''" 
              :alt="post.title"
              @error="(e) => handleThumbnailError(e, post.slug, 0)"
            />
            <div class="play-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
          <div class="card-content">
            <div class="post-date">{{ post.date }}</div>
            <h2>{{ post.title }}</h2>
            <p class="excerpt">{{ post.excerpt }}</p>
            <div v-if="post.likes !== undefined" class="video-stats">
              <span class="stat">{{ post.likesFormatted }} likes</span>
              <span class="stat-divider">/</span>
              <span class="stat">{{ post.viewsFormatted }} views</span>
            </div>
            <div class="post-tags">
              <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
            </div>
            <p class="meta">Watch on YouTube &gt;</p>
          </div>
        </a>
      </template>

      <p v-if="filteredPosts.length === 0" class="no-results">
        No posts found matching your search.
      </p>
    </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePosts, type Post } from '~/composables/usePosts'

const { getAllPosts } = usePosts()

const searchQuery = ref('')
const selectedTag = ref<string | null>(null)
const allPosts = ref<Post[]>([])
const postsLoading = ref(true)

const thumbnailSources = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', 'default']

const handleThumbnailError = (event: Event, videoId: string, currentIndex: number) => {
  const img = event.target as HTMLImageElement
  if (currentIndex < thumbnailSources.length - 1) {
    img.src = `https://img.youtube.com/vi/${videoId}/${thumbnailSources[currentIndex + 1]}.jpg`
  }
}

onMounted(async () => {
  allPosts.value = await getAllPosts()
  postsLoading.value = false
})

const allTags = computed(() => {
  const tags = new Set<string>()
  allPosts.value.forEach(post => post.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
})

const filteredPosts = computed(() => {
  return allPosts.value.filter(post => {
    const matchesSearch = searchQuery.value === '' ||
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesTag = selectedTag.value === null ||
      post.tags.includes(selectedTag.value)
    
    return matchesSearch && matchesTag
  })
})

useHead({
  title: 'Posts',
  meta: [
    { name: 'description', content: 'Read Derek Corniello\'s posts about NeoVim, custom keyboard building, and software development.' },
    { property: 'og:title', content: 'Posts - Derek Corniello' },
    { property: 'og:description', content: 'Thoughts on software engineering, NeoVim, custom keyboards, and development workflows.' },
    { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
    { property: 'og:url', content: 'https://derekcorn.dev/posts' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Posts - Derek Corniello' },
    { name: 'twitter:description', content: 'Thoughts on software engineering and development.' },
    { name: 'twitter:image', content: 'https://derekcorn.dev/preview.png' },
  ],
})
</script>

<style scoped>
.blog {
  max-width: 700px;
  margin: 0 auto;
}

.blog-header {
  text-align: center;
  margin-bottom: 2rem;
}

.blog-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.blog-header p {
  color: var(--text-secondary);
}

.loading-posts {
  text-align: center;
  padding: 3rem;
  color: var(--text-muted);
}

.blog-controls {
  margin-bottom: 2rem;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 1rem;
}

.search-box svg {
  color: var(--text-muted);
}

.search-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
}

.search-input::placeholder {
  color: var(--text-muted);
}

.tags-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-filter {
  padding: 0.35rem 0.75rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 20px;
  color: var(--text-secondary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
}

.tag-filter.active {
  background: var(--accent-mauve);
  color: var(--bg-crust);
  border-color: var(--accent-mauve);
}

.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.blog-card {
  display: block;
  padding: 1.5rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
}

.blog-card:hover {
  border-color: var(--accent-mauve);
}

.blog-card.youtube-card {
  display: flex;
  flex-direction: row;
  padding: 0;
  overflow: hidden;
  border-radius: 12px;
}

.blog-card.youtube-card:hover {
  border-color: var(--accent-red);
}

.blog-card.youtube-card .video-thumbnail {
  position: relative;
  background: #000;
}

.blog-card.youtube-card .video-thumbnail img {
  display: block;
  max-width: 100%;
  height: auto;
}

.blog-card.youtube-card .play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.8;
}

.blog-card.youtube-card:hover .play-icon {
  opacity: 1;
}

.blog-card.youtube-card .card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  justify-content: flex-start;
}

.blog-card.youtube-card .video-stats {
  margin-top: auto;
}

.blog-card.youtube-card .post-tags {
  margin-top: 0;
  margin-bottom: 0;
}

.blog-card.youtube-card .meta {
  margin-top: 0.25rem;
  margin-bottom: 0;
}

.blog-card.youtube-card h2 {
  font-size: 1.1rem;
}

.blog-card h2 {
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.post-date {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.excerpt {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.video-stats {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
}

.video-stats .stat {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.video-stats .stat-divider {
  font-size: 0.75rem;
  color: var(--text-muted);
  opacity: 0.5;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.post-tag {
  padding: 0.2rem 0.6rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  color: var(--accent-blue);
  border: 1px solid var(--accent-blue);
  border-radius: 20px;
}

.meta {
  color: var(--accent-mauve);
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-block;
}

.meta:hover {
  text-decoration: underline;
}

.no-results {
  text-align: center;
  color: var(--text-muted);
  padding: 2rem;
}
</style>
