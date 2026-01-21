<template>
  <div class="resume-page">
    <header class="resume-header">
      <h1>Resume</h1>
    </header>
    <div class="download-wrapper">
      <a href="/resume.pdf" download class="btn btn-download">
        Download PDF
      </a>
    </div>

    <div class="resume-pdf">
      <iframe src="/resume.pdf" title="Resume PDF"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Resume - Derek Corniello',
  meta: [
    {
      name: 'description',
      content: 'View Derek Corniello\'s resume - Software Engineer Intern at Fifth Third Bank.',
    },
  ],
})
</script>

<style scoped>
.resume-page {
  width: 100%;
  margin: 0 auto;
}

.resume-header {
  text-align: center;
  margin-bottom: 1rem;
}

.resume-header h1 {
  font-size: 2rem;
}

.download-wrapper {
  text-align: center;
  margin-bottom: 1.5rem;
}

.btn-download {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}

.resume-pdf {
  width: 95%;
  aspect-ratio: 8.5 / 11;
  max-height: 75vh;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: auto;
  margin: 0 auto;
}

.resume-pdf iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
