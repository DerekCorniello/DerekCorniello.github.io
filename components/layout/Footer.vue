<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="copyright">
        &copy; {{ currentYear }} Derek Corniello
      </p>
      <div class="social-links">
        <a href="https://github.com/DerekCorniello" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/derek-corniello" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="https://x.com/DerekCorniello" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://youtube.com/@DerekCornDev" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </svg>
        </a>
        <a href="mailto:corniedj@mail.uc.edu" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--bg-mantle);
  border-top: 1px solid var(--border);
  padding: 1.5rem 1rem;
  margin-top: auto;
}

.footer-inner {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.copyright {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--text-secondary);
  background: var(--bg-base);
  border-radius: 8px;
}

.social-links a:hover {
  color: var(--accent-orange);
}

@media (max-width: 480px) {
  .social-links {
    gap: 0.5rem;
  }

  .social-links a {
    width: 32px;
    height: 32px;
  }

  .social-links svg {
    width: 16px;
    height: 16px;
  }
}
</style>
