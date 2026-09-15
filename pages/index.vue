<template>
    <div class="home">
        <HomeHero />
        <section class="companies-section">
            <div class="companies-timeline">
                <span class="companies-label">Experience with</span>
                <div class="company-past">
                    <div class="company-past-item">
                        <img src="/linkedin-logo.png" alt="LinkedIn" class="company-logo-sm" />
                        <span class="company-past-name">LinkedIn</span>
                    </div>
                    <div class="company-past-item">
                        <img src="/siemens-logo.png" alt="Siemens" class="company-logo-sm" />
                        <span class="company-past-name">Siemens DISW</span>
                    </div>
                    <div class="company-past-item">
                        <img src="/fifththird-logo.png" alt="Fifth Third" class="company-logo-sm" />
                        <span class="company-past-name">Fifth Third Bank</span>
                    </div>
                </div>
            </div>
        </section>
        <HomeFeaturedProjects />
        <HomeRecentBlog />
        <HomeDeveloperCard />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Home',
    meta: [
        {
            name: 'description',
            content:
                'Derek Corniello - Software Engineer building developer tools with Go, Rust, Python, and more. Explore my projects, blog, and the tech I use.',
        },
        { property: 'og:title', content: 'Derek Corniello' },
        {
            property: 'og:description',
            content:
                'Software Engineer building with Go, Rust, Python, and more. Explore my projects, blog, and the tech I use.',
        },
        { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
        { property: 'og:url', content: 'https://derekcorn.dev' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:title', content: 'Derek Corniello' },
        {
            name: 'twitter:description',
            content: 'Software Engineer building with Go, Rust, Python, and more.',
        },
        { name: 'twitter:image', content: 'https://derekcorn.dev/preview.png' },
    ],
});
</script>

<style scoped>
.home {
    animation: fadeIn var(--transition-slow) ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.companies-section {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
}

.companies-timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
}

.companies-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.company-past {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.company-past-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.company-past-item + .company-past-item::before {
    content: '/';
    color: var(--text-muted);
    margin-right: 1rem;
}

.company-past-name {
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    color: var(--text-primary);
}

.company-logo-sm {
    width: 18px;
    height: 18px;
    object-fit: contain;
    border-radius: 3px;
    flex-shrink: 0;
}

</style>
