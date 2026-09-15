<template>
    <div class="links-page">
        <header class="links-header">
            <h1>Connect</h1>
            <p>Find me across the web or reach out directly</p>
        </header>

        <div class="links-grid">
            <a
                href="https://cal.com/derek-corniello"
                target="_blank"
                rel="noopener noreferrer"
                class="link-card"
            >
                <div class="link-icon cal">
                    <CalendarIcon />
                </div>
                <div class="link-content">
                    <h3>Book a Call</h3>
                    <p>Schedule time with me</p>
                </div>
                <ArrowRightIcon class="arrow" />
            </a>

            <a
                href="https://linkedin.com/in/derek-corniello"
                target="_blank"
                rel="noopener noreferrer"
                class="link-card"
            >
                <div class="link-icon linkedin">
                    <LinkedinIcon />
                </div>
                <div class="link-content">
                    <h3>LinkedIn</h3>
                    <p>Connect professionally</p>
                </div>
                <ArrowRightIcon class="arrow" />
            </a>

            <a
                href="https://github.com/DerekCorniello"
                target="_blank"
                rel="noopener noreferrer"
                class="link-card"
            >
                <div class="link-icon github">
                    <GithubIcon />
                </div>
                <div class="link-content">
                    <h3>GitHub</h3>
                    <p>Browse my code</p>
                </div>
                <ArrowRightIcon class="arrow" />
            </a>

            <a
                href="https://x.com/DerekCorniello"
                target="_blank"
                rel="noopener noreferrer"
                class="link-card"
            >
                <div class="link-icon x">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                    </svg>
                </div>
                <div class="link-content">
                    <h3>X</h3>
                    <p>Check out my tech takes</p>
                </div>
                <ArrowRightIcon class="arrow" />
            </a>

            <a
                href="https://youtube.com/@DerekCornDev"
                target="_blank"
                rel="noopener noreferrer"
                class="link-card"
            >
                <div class="link-icon youtube">
                    <YoutubeIcon />
                </div>
                <div class="link-content">
                    <h3>YouTube</h3>
                    <p>Watch my content</p>
                </div>
                <ArrowRightIcon class="arrow" />
            </a>

            <a href="tel:+14408215281" class="link-card">
                <div class="link-icon phone">
                    <PhoneIcon />
                </div>
                <div class="link-content">
                    <h3>Phone</h3>
                    <p>+1 (440) 821-5281</p>
                </div>
                <ArrowRightIcon class="arrow" />
            </a>

            <a href="mailto:corniedj@mail.uc.edu" class="link-card">
                <div class="link-icon email">
                    <MailIcon />
                </div>
                <div class="link-content">
                    <h3>Email</h3>
                    <p>Get in touch</p>
                </div>
                <ArrowRightIcon class="arrow" />
            </a>

            <NuxtLink to="/resume" class="link-card">
                <div class="link-icon resume">
                    <FileTextIcon />
                </div>
                <div class="link-content">
                    <h3>Resume</h3>
                    <p>View my experience</p>
                </div>
                <ArrowRightIcon class="arrow" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Linkedin,
    Github,
    Youtube,
    Mail,
    FileText,
    ArrowRight,
    Calendar,
    Phone,
} from 'lucide-vue-next';

const LinkedinIcon = Linkedin;
const GithubIcon = Github;
const YoutubeIcon = Youtube;
const MailIcon = Mail;
const FileTextIcon = FileText;
const ArrowRightIcon = ArrowRight;
const CalendarIcon = Calendar;
const PhoneIcon = Phone;

useHead({
    title: 'Contact - Derek Corniello',
    meta: [
        {
            name: 'description',
            content:
                'Connect with Derek Corniello across LinkedIn, GitHub, X, YouTube, and more, or schedule a call.',
        },
    ],
});
</script>

<style scoped>
.links-page {
    max-width: 600px;
    margin: 0 auto;
}

.links-header {
    text-align: center;
    margin-bottom: 3rem;
}

.links-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.links-header p {
    color: var(--text-secondary);
}

.links-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.link-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: var(--bg-mantle);
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    transition: all var(--transition-normal);
}

.link-card:hover {
    border-color: var(--accent-mauve);
    box-shadow: 0 0 0 1px var(--accent-mauve);
}

.link-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    flex-shrink: 0;
    transition: all var(--transition-fast);
}

.link-icon :deep(svg) {
    width: 24px;
    height: 24px;
}

.link-icon.cal {
    background: rgba(137, 180, 250, 0.2);
    color: var(--accent-blue);
}

.link-icon.linkedin {
    background: rgba(10, 102, 194, 0.2);
    color: #0a66c2;
}

.link-icon.github {
    background: rgba(203, 166, 247, 0.2);
    color: var(--accent-mauve);
}

.link-icon.x {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
}

.link-icon.youtube {
    background: rgba(255, 0, 0, 0.2);
    color: #ff0000;
}

.link-icon.email {
    background: rgba(137, 180, 250, 0.2);
    color: var(--accent-blue);
}

.link-icon.phone {
    background: rgba(249, 226, 175, 0.2);
    color: var(--accent-yellow);
}

.link-icon.resume {
    background: rgba(166, 227, 161, 0.2);
    color: var(--accent-green);
}

.link-content {
    flex: 1;
}

.link-content h3 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.link-content p {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0;
}

.arrow {
    color: var(--text-muted);
    transition: color var(--transition-fast);
}

.link-card:hover .arrow {
    color: var(--accent-mauve);
}
</style>
