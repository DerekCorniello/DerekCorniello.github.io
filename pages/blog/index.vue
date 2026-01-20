<template>
  <div class="blog">
    <header class="blog-header">
      <h1>Blog</h1>
      <p>Thoughts on software engineering and development</p>
    </header>

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
      <NuxtLink
        v-for="post in filteredPosts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
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

      <p v-if="filteredPosts.length === 0" class="no-results">
        No posts found matching your search.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedTag = ref<string | null>(null)

const posts = [
  {
    slug: 'nvim-transition',
    date: 'Jul 21, 2024',
    title: 'My Transition from VSCode to NeoVim',
    excerpt: 'My experience transitioning from VSCode to NeoVim, including setting up lazy.nvim, Mason, and other plugins that improved my development workflow.',
    tags: ['Neovim', 'Development'],
  },
  {
    slug: 'keyboard',
    date: 'Aug 22, 2025',
    title: 'I Built a Custom Keyboard!',
    excerpt: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, firmware, handwiring process, and lessons learned along the way.',
    tags: ['Hardware', 'DIY'],
  },
]

const allTags = computed(() => {
  const tags = new Set<string>()
  posts.forEach(post => post.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
})

const filteredPosts = computed(() => {
  return posts.filter(post => {
    const matchesSearch = searchQuery.value === '' ||
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesTag = selectedTag.value === null ||
      post.tags.includes(selectedTag.value)
    
    return matchesSearch && matchesTag
  })
})

useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Read Derek Corniello\'s blog posts about NeoVim, custom keyboard building, and software development.' },
    { property: 'og:title', content: 'Blog - Derek Corniello' },
    { property: 'og:description', content: 'Thoughts on software engineering, NeoVim, custom keyboards, and development workflows.' },
    { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
    { property: 'og:url', content: 'https://derekcorn.dev/blog' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Blog - Derek Corniello' },
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
  font-family: var(--font-mono);
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
  font-family: var(--font-mono);
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
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.post-tag {
  padding: 0.2rem 0.6rem;
  font-family: var(--font-mono);
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
