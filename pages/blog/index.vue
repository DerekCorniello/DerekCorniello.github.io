<template>
  <NuxtLayout>
    <div class="blog-content">
      <h1 class="title">Blog</h1>

      <div class="top-row">
        <Container>
          <template #title>Search</template>
          <input
            type="text"
            id="search-input"
            class="searchbar"
            placeholder="Search..."
            v-model="searchQuery"
          />
        </Container>

        <Container>
          <template #title>Recent Posts</template>
          <ul id="recent" class="list-unstyled">
            <li v-for="(post, index) in recentPosts" :key="index">
              <NuxtLink :to="post.link" class="r-link">{{ post.title }}</NuxtLink>
            </li>
          </ul>
        </Container>

        <Container>
          <template #title>Tags</template>
          <div class="dropdown">
            <button class="dropdown-btn">Select Tags</button>
            <div class="dropdown-content">
              <label v-for="(tag, index) in tags" :key="index">
                <input type="checkbox" :value="tag.tag" v-model="selectedTags" />
                {{ tag.tag }}
              </label>
            </div>
          </div>
        </Container>
      </div>

      <div class="main-content">
        <div class="blog-items" id="blog-items">
          <div v-for="(item, index) in filteredBlogItems" :key="index" class="blog-item">
            <Container>
              <template #title> {{ item.title }} </template>
              <p>{{ item.description }}</p>
              <br />
              <div class="read-more">
                <NuxtLink :to="item.link" class="r-link" :style="{ color: '#00ffcc' }"
                  ><strong>Read More</strong></NuxtLink
                >
              </div>
              <br />
              <div class="tags-container">
                <span
                  v-for="(tag, tagIndex) in item.tags"
                  :key="tagIndex"
                  class="tag"
                  :style="{ margin: '1rem', backgroundColor: '#ff66b2', color: '#FFFFFF' }"
                >
                  {{ tag }}
                </span>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

useHead({
  title: "Derek Corniello's Blogs",
})

const blogItems = ref([])
const recentPosts = ref([])
const tags = ref([])
const selectedTags = ref([])
const searchQuery = ref('')
const tagDict = {}

// Fetching blog data
onMounted(() => {
  axios
    .get('/blog-data.json')
    .then((response) => {
      const data = response.data
      data.forEach((val) => {
        // Populate blog items
        blogItems.value.push(val)

        // Add recent posts (limit to 3)
        if (recentPosts.value.length < 3) {
          recentPosts.value.push({ title: val.title, link: val.link })
        }

        // Collect tags and counts
        val.tags.forEach((tag) => {
          if (tagDict[tag]) {
            tagDict[tag]++
          } else {
            tagDict[tag] = 1
          }
        })
      })

      // Set tags for display
      tags.value = Object.entries(tagDict).map(([tag, count]) => ({ tag, count }))
    })
    .catch((error) => {
      console.error('Error loading blog data:', error)
    })
})

// Filter blogs by selected tags and search query
const filteredBlogItems = computed(() => {
  let filtered = blogItems.value

  // Filter by tags if selected
  if (selectedTags.value.length > 0) {
    filtered = filtered.filter((item) =>
      item.tags.some((tag) => selectedTags.value.includes(tag)),
    )
  }

  // Filter by search query
  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      const title = item.title.toLowerCase()
      const description = item.description.toLowerCase()
      const tags = item.tags.map((tag) => tag.toLowerCase())

      return (
        title.includes(searchQuery.value.toLowerCase()) ||
        description.includes(searchQuery.value.toLowerCase()) ||
        tags.some((tag) => tag.includes(searchQuery.value.toLowerCase()))
      )
    })
  }

  return filtered
})
</script>

<style scoped>
.blog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #00ffcc;
  margin: 0;
  text-align: center;
  padding-bottom: 0.5rem;
}

.top-row {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 2rem;
}

.top-row .container {
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .top-row {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2%;
  }

  .top-row .container {
    width: 49%;
  }

  .top-row .container:first-child {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .top-row {
    flex-wrap: nowrap;
    gap: 2%;
  }

  .top-row .container {
    width: 32%;
  }

  .top-row .container:first-child {
    width: 32%;
  }
}

.searchbar {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
}

ul {
  list-style-type: disc;
  padding-left: 0.25rem;
}

ul li {
  padding: 0.5rem 0;
}

.main-content {
  width: 100%;
}

.blog-items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
}

.blog-item {
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .blog-items {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }
}

.container {
  padding: 1.25rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.read-more {
  text-align: center;
  font-size: 1.5rem;
}

.tags-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tag {
  background-color: #ff66b2;
  color: black;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
}

.dropdown-btn {
  padding: 0.7rem 1.5rem;
  background-color: #ff66b2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

.dropdown-content {
  display: none;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

/* Custom scrollbar for WebKit browsers */
.dropdown-content::-webkit-scrollbar {
  width: 6px;
}

.dropdown-content::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown-content::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.dropdown:hover .dropdown-content {
  display: block;
  border: 1px solid white;
}

label {
  display: block;
  margin: 5px 0;
}
</style>
