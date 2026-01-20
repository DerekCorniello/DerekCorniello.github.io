<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Derek Corniello` : 'Derek Corniello'
  },
  meta: [
    { name: 'description', content: 'Derek Corniello - Software Engineer building with Go, Rust, Python, and more. Explore my projects, blog, and the tech I use.' },
    { name: 'author', content: 'Derek Corniello' },
    { name: 'theme-color', content: '#1a1d24' },
    { property: 'og:site_name', content: 'Derek Corniello' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@DerekCorniello' },
  ],
  link: [
    { rel: 'canonical', href: 'https://derekcorn.dev' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  ],
})
</script>
