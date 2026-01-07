<template>
  <div></div>
</template>

<script setup>
if (typeof window !== 'undefined') {
  window.open('/resume.pdf', '_blank')
}

const router = useRouter()
router.replace('/')
</script>
