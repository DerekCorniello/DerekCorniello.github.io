<template>
  <div class="contact">
    <header class="contact-header">
      <h1>Get in Touch</h1>
      <p>Feel free to reach out for collaborations or just to say hi!</p>
    </header>

    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <div class="contact-details">
            <span class="label">Email</span>
            <span class="value">corniedj@mail.uc.edu</span>
          </div>
          <button @click="copyToClipboard('corniedj@mail.uc.edu')" class="copy-btn" :class="{ copied: copiedEmail }" title="Copy email">
            <svg v-if="!copiedEmail" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </button>
        </div>

        <div class="contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <div class="contact-details">
            <span class="label">Phone</span>
            <span class="value">+1 (440) 821-5281</span>
          </div>
          <button @click="copyToClipboard('+14408215281')" class="copy-btn" :class="{ copied: copiedPhone }" title="Copy phone">
            <svg v-if="!copiedPhone" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </button>
        </div>

        <div class="contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <div class="contact-details">
            <span class="label">Location</span>
            <span class="value">Cincinnati, OH</span>
          </div>
        </div>
      </div>

      <div class="social-links">
        <a href="https://linkedin.com/in/derek-corniello" target="_blank" rel="noopener noreferrer" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
        <a href="https://github.com/DerekCorniello" target="_blank" rel="noopener noreferrer" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          GitHub
        </a>
        <a href="https://x.com/DerekCorniello" target="_blank" rel="noopener noreferrer" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          X
        </a>
        <a href="https://youtube.com/@DerekCornDev" target="_blank" rel="noopener noreferrer" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </svg>
          YouTube
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Contact - Derek Corniello',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Derek Corniello. Email, phone, and social links for collaboration opportunities.',
    },
  ],
})

const copiedEmail = ref(false)
const copiedPhone = ref(false)

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    if (text.includes('@')) {
      copiedEmail.value = true
      setTimeout(() => copiedEmail.value = false, 2000)
    } else {
      copiedPhone.value = true
      setTimeout(() => copiedPhone.value = false, 2000)
    }
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped>
.contact {
  max-width: 700px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.contact-header p {
  color: var(--text-secondary);
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.contact-item svg {
  color: var(--accent-mauve);
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-details .label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-details .value {
  color: var(--text-primary);
  font-family: var(--font-mono);
}

.copy-btn {
  padding: 0.5rem;
  background: var(--bg-base);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-btn:hover {
  color: var(--accent-mauve);
  border-color: var(--accent-mauve);
}

.copy-btn.copied {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  transition: all var(--transition-normal);
}

.social-link:hover {
  border-color: var(--accent-mauve);
  color: var(--accent-mauve);
  transform: translateY(-2px);
}
</style>
