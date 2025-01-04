<template>
  <BasePage>
    <div class="blog-content">
      <h1 class="title">Blog</h1>

      <!-- Row for Search, Recent Posts, and Tags -->
      <div class="top-row">
        <!-- Search -->
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

        <!-- Recent Posts -->
        <Container>
          <template #title>Recent Posts</template>
          <ul id="recent" class="list-unstyled">
            <li v-for="(post, index) in recentPosts" :key="index">
              <a :href="post.link">{{ post.title }}</a>
            </li>
          </ul>
        </Container>

        <!-- Tags Dropdown with Checkboxes -->
        <Container>
          <template #title>Tags</template>
          <div class="dropdown">
            <button class="dropdown-btn">Select Tags</button>
            <div class="dropdown-content">
              <label v-for="(tag, index) in tags" :key="index">
                <input 
                  type="checkbox" 
                  :value="tag.tag" 
                  v-model="selectedTags" 
                />
                {{ tag.tag }}
              </label>
            </div>
          </div>
        </Container>
      </div>

      <!-- Main Blog Content -->
      <div class="main-content">
        <div class="blog-items" id="blog-items">
          <div v-for="(item, index) in filteredBlogItems" :key="index" class="blog-item">
            <Container>
              <!-- Title -->
              <template #title> {{ item.title }} </template>

              <!-- Description -->
              <p>{{ item.description }}</p>

              <!-- Read More Link -->
              <div class="read-more">
                <a :href="item.link" :style="{ color: '#00ffcc' }"><strong>Read More</strong></a>
              </div>

              <!-- Tags -->
              <div class="tags-container">
                <span
                  v-for="(tag, tagIndex) in item.tags"
                  :key="tagIndex"
                  class="tag"
                  :style="{ backgroundColor: '#ff66b2' }"
                >
                  {{ tag }}
                </span>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  </BasePage>
</template>

<script>
import BasePage from "@/components/BasePage.vue";
import Container from "@/components/Container.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";

export default {
  name: "Blog",
  components: {
    BasePage,
    Container,
  },
  setup() {
    const blogItems = ref([]);
    const recentPosts = ref([]);
    const tags = ref([]);
    const selectedTags = ref([]);
    const searchQuery = ref("");
    const tagDict = {};

    // Fetching blog data
    onMounted(() => {
      axios.get("/blog-data.json")
        .then(response => {
          const data = response.data;
          data.forEach((val) => {
            // Populate blog items
            blogItems.value.push(val);

            // Add recent posts (limit to 3)
            if (recentPosts.value.length < 3) {
              recentPosts.value.push({ title: val.title, link: val.link });
            }

            // Collect tags and counts
            val.tags.forEach((tag) => {
              if (tagDict[tag]) {
                tagDict[tag]++;
              } else {
                tagDict[tag] = 1;
              }
            });
          });

          // Set tags for display
          tags.value = Object.entries(tagDict).map(([tag, count]) => ({ tag, count }));
        })
        .catch(error => {
          console.error("Error loading blog data:", error);
        });
    });

    // Filter blogs by selected tags and search query
    const filteredBlogItems = computed(() => {
      let filtered = blogItems.value;

      // Filter by tags if selected
      if (selectedTags.value.length > 0) {
        filtered = filtered.filter(item => 
          item.tags.some(tag => selectedTags.value.includes(tag))
        );
      }

      // Filter by search query
      if (searchQuery.value) {
        filtered = filtered.filter(item => {
          const title = item.title.toLowerCase();
          const description = item.description.toLowerCase();
          const tags = item.tags.map(tag => tag.toLowerCase());

          return title.includes(searchQuery.value.toLowerCase()) || 
                 description.includes(searchQuery.value.toLowerCase()) || 
                 tags.some(tag => tag.includes(searchQuery.value.toLowerCase()));
        });
      }

      return filtered;
    });

    return {
      blogItems,
      recentPosts,
      tags,
      selectedTags,
      searchQuery,
      filteredBlogItems,
    };
  },
};
</script>

<style scoped>
.blog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10%;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #00ffcc; /* Neon green for impact */
  margin-bottom: 2rem;
}

.top-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
}

.top-row .container {
  width: 30%; /* Adjust to fit 3 items */
}

.searchbar {
  background: rgba(0, 0, 0, .5); /* Solid black with .5 alpha */
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white; /* Specify both width and style */
}

ul {
  list-style-type: disc; /* Dots for recent posts */
  padding-left: 20px;
}

ul li {
  padding: 0.5rem 0;
}

.main-content {
  width: 100%;
}

.blog-items {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
}

.blog-item {
  width: 100%; /* Make each blog item take up the full width */
  box-sizing: border-box; /* Ensure padding and margin are included in the width calculation */
}

.container {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  width: 100%; /* Ensure full-width for blog content */
  display: flex;
  flex-direction: column;
}

.read-more {
  text-align: center;
  margin-top: 1rem;
}

.tags-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.tag {
  background-color: #ff66b2; /* Secondary pink color for tags */
  color: black;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center; /* Centering the dropdown */
}

.dropdown-btn {
  padding: 0.7rem 1.5rem;
  background-color: #ff66b2; /* Pink color for button */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, .5); /* Matching the background color */
  min-width: 160px;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  width: 100%;
}

.dropdown:hover .dropdown-content {
  display: block;
  border: 1px solid white;
  margin-top: 10px;
}

label {
  display: block;
  margin: 5px 0;
}
</style>
