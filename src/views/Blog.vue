<template>
  <BasePage>
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
              <router-link :to="post.link" :class="r-link">{{ post.title }}</router-link>
            </li>
          </ul>
        </Container>

        
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

      
      <div class="main-content">
        <div class="blog-items" id="blog-items">
          <div v-for="(item, index) in filteredBlogItems" :key="index" class="blog-item">
            <Container>
              <template #title> {{ item.title }} </template>
              <p>{{ item.description }}</p>
              <br>
              <div class="read-more">
                <router-link :to="item.link" class="r-link" :style="{ color: '#00ffcc' }"><strong>Read More</strong></router-link>
              </div>
              <br>
              <div class="tags-container">
                <span
                  v-for="(tag, tagIndex) in item.tags"
                  :key="tagIndex"
                  class="tag"
                  :style="{ backgroundColor: '#ff66b2', color: '#FFFFFF' }"
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
  mounted() {
    document.title = "Derek Corniello's Blogs";
  }
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
  font-size: 3rem;
  font-weight: bold;
  color: #00ffcc; 
  margin: 0;
  text-align: center;
  padding-bottom: 0.5rem;
}

.top-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
}

.top-row .container {
  width: 30%; 
  height: 10%;
}

.searchbar {
  background: rgba(0, 0, 0, .5); 
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white; 
}

ul {
  list-style-type: disc; 
  padding-left: .25rem;
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
  width: 100%; 
  box-sizing: border-box; 
}

.container {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  width: 100%; 
  display: flex;
  flex-direction: column;
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
  position: absolute;
  background-color: rgba(0, 0, 0, .5); 
  min-width: 160px;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
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
