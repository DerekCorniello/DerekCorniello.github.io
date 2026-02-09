<template>
  <section class="recent-blog">
    <h2 class="section-title">Recent Posts</h2>
    <div class="posts-grid">
      <article
        v-for="post in recentPosts"
        :key="post.slug"
        class="post-card"
      >
        <div class="post-date">{{ post.date }}</div>
        <h3 class="post-title">
          <NuxtLink :to="`/blog/${post.slug}`">
            {{ post.title }}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </NuxtLink>
        </h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <div class="post-meta">
          <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
        </div>
      </article>
    </div>
    <div class="view-all">
      <NuxtLink to="/blog" class="btn">
        View All Posts
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const recentPosts = [
  {
    slug: 'keyboard',
    date: 'Aug 22, 2025',
    title: 'I Built a Custom Keyboard!',
    excerpt: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, firmware, and lessons learned.',
    tags: ['Hardware', 'DIY'],
  },
  {
    slug: 'nvim-transition',
    date: 'Jul 21, 2024',
    title: 'My Transition from VSC*de to NeoVim',
    excerpt: 'My experience transitioning from VSC*de to NeoVim, including setting up lazy.nvim, Mason, and other plugins.',
    tags: ['Neovim', 'Development'],
  },
]
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

.post-card {
  display: block;
  padding: 1.25rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.post-date {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.post-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.post-title a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
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
