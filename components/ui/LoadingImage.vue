<template>
  <div class="image-wrapper" :style="{ aspectRatio: aspectRatio }">
    <div v-if="!loaded" class="shimmer"></div>
    <img
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      @load="onLoad"
      @error="onError"
      :class="{ 'image-loaded': loaded }"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  aspectRatio?: string
  lazy?: boolean
}>(), {
  aspectRatio: 'auto',
  lazy: true,
})

const emit = defineEmits<{
  (e: 'load'): void
  (e: 'error', err: Event): void
}>()

const loaded = ref(false)

const onLoad = () => {
  loaded.value = true
  emit('load')
}

const onError = (err: Event) => {
  emit('error', err)
}
</script>

<style scoped>
.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: var(--bg-base);
  border: 1px solid var(--border);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper img.image-loaded {
  opacity: 1;
}

.shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    var(--bg-base) 0%,
    var(--bg-mantle) 50%,
    var(--bg-base) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
