<template>
  <div></div>
</template>

<script setup>
// Redirect to resume PDF in a new tab
if (typeof window !== 'undefined') {
  window.open('/resume.pdf', '_blank')
}

// Navigate back to home
const router = useRouter()
router.replace('/')
</script>
