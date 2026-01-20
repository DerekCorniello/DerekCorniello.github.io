// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Derek Corniello",
      meta: [
        {
          name: 'description',
          content: 'Derek Corniello - Software Engineer Intern at Fifth Third Bank',
        },
        {
          name: 'keywords',
          content: 'Derek Corniello, software engineer intern, Go, Rust, Python, software engineering, Cincinnati',
        },
        { name: 'author', content: 'Derek Corniello' },
        { property: 'og:title', content: "Derek Corniello" },
        {
          property: 'og:description',
          content: 'Software Engineer Intern at Fifth Third Bank',
        },
        { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
        { property: 'og:url', content: 'https://derekcorn.dev/' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "Derek Corniello" },
        {
          name: 'twitter:description',
          content: 'Software Engineer Intern at Fifth Third Bank',
        },
        { name: 'twitter:image', content: 'https://derekcorn.dev/preview.png' },
        {
          name: 'google-site-verification',
          content: 'kO3UtmTEPE9AvAaw4G3slfx9nJFKUZoCRA49vuNR7Bg',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap&font-display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Derek Corniello',
            description: 'Software Engineer Intern at Fifth Third Bank',
            jobTitle: 'Software Engineer Intern',
            url: 'https://derekcorn.dev',
            sameAs: [
              'https://github.com/DerekCorniello',
              'https://www.linkedin.com/in/derek-corniello',
              'https://x.com/DerekCorniello',
              'https://www.youtube.com/@DerekCornDev',
            ],
          }),
        },
      ],
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'auto',
    },
  },

  ssr: true,
})
