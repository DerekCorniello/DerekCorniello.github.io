<template>
  <BasePage>
    <div class="blog-container">
      <h1 class="blog-title">{{ title }}</h1>

      <div class="blog-content">
        <slot></slot>
      </div>
    </div>
  </BasePage>
</template>

<script>
import BasePage from '@/components/BasePage.vue'

export default {
  name: 'BaseBlog',
  components: {
    BasePage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.blog-container {
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
}

.blog-title {
  font-size: 2.5rem;
  color: #ff66b2;
  margin-bottom: 1rem;
}

.blog-content {
  font-size: 1.2rem;
  color: white;
  line-height: 1.7;
}

.blog-content :deep(p) {
  margin: 1.5rem 0;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  list-style-position: outside;
  padding-left: 2.5rem;
  margin: 1.5rem 0;
  line-height: 1.8;
}

.blog-content :deep(li) {
  margin: 0.8rem 0;
  color: white;
  padding-left: 0.5rem;
}

.blog-content :deep(ul ul),
.blog-content :deep(ol ol) {
  margin: 0.5rem 0 0.5rem 1.5rem;
}

.blog-content :deep(a) {
  color: #00ffcc;
  text-decoration: none;
  transition:
    color 0.3s ease,
    opacity 0.2s ease;
  position: relative;
}

.blog-content :deep(a:hover) {
  text-decoration: underline;
  opacity: 0.9;
}

.blog-content :deep(.image-container) {
  margin: 2.5rem auto;
  max-width: 100%;
  text-align: center;
}

.blog-content :deep(img) {
  border-radius: 8px;
  border: 4px solid #00ffcc;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 255, 204, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);
}

.blog-content :deep(img:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 204, 0.3);
}

.blog-content :deep(.image-caption) {
  color: #a0a0a0;
  font-size: 0.95rem;
  font-style: italic;
  margin: 0.8rem auto 0;
  text-align: center;
  max-width: 90%;
  line-height: 1.5;
}

.blog-content :deep(h1),
.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4) {
  margin: 2.5rem 0 1.5rem;
  line-height: 1.3;
}

/* Blockquotes */
.blog-content :deep(blockquote) {
  border-left: 3px solid #00ffcc;
  margin: 1.5rem 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
  color: #d1d1d1;
  font-style: italic;
}

/* Code blocks */
.blog-content :deep(pre) {
  margin: 1.5rem 0;
  padding: 1.2rem;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  overflow-x: auto;
}

/* Responsive adjustments */
@media (min-width: 640px) {
  .blog-content :deep(ul),
  .blog-content :deep(ol) {
    padding-left: 2rem;
  }

  .blog-content :deep(.image-container) {
    margin: 3rem auto;
  }

  .blog-content :deep(img) {
    max-width: 90%;
  }

  .blog-content :deep(.image-caption) {
    max-width: 80%;
  }
}

@media (min-width: 1024px) {
  .blog-content {
    font-size: 1.1rem;
  }

  .blog-content :deep(.image-container) {
    max-width: 85%;
  }

  .blog-content :deep(img) {
    max-width: 80%;
  }

  .blog-content :deep(.image-caption) {
    max-width: 70%;
    font-size: 1rem;
  }
}

/* Large screens */
@media (min-width: 1280px) {
  .blog-content :deep(.image-container) {
    max-width: 80%;
  }

  .blog-content :deep(img) {
    max-width: 75%;
  }
}
</style>
