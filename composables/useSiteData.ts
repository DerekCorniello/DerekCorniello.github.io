export interface SocialLink {
    name: string;
    url: string;
}

export interface StackInfo {
    languages: string[];
    tools: string[];
    infra: string[];
}

export interface AboutInfo {
    name: string;
    role: string;
    company: string;
    location: string;
    currentFocus: string;
}

const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/DerekCorniello' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/derek-corniello' },
    { name: 'Twitter', url: 'https://x.com/DerekCorniello' },
    { name: 'YouTube', url: 'https://www.youtube.com/@DerekCornDev' },
    { name: 'Email', url: 'corniedj@mail.uc.edu' },
];

const stackInfo: StackInfo = {
    languages: ['Go', 'Rust', 'Python', 'TypeScript', 'Java'],
    tools: ['Unity', 'Docker', 'Neovim', 'Git', 'Arch Linux'],
    infra: ['Terraform', 'AWS', 'Cloudflare', 'PostgreSQL', 'Kafka'],
};

const aboutInfo: AboutInfo = {
    name: 'Derek Corniello',
    role: 'Software Engineer',
    company: 'Independent',
    location: 'Cincinnati, OH',
    currentFocus:
        'Building a compiler in my free time and exploring scalable, reliable backend systems.',
};

export function useSiteData() {
    return {
        socialLinks,
        stackInfo,
        aboutInfo,
    };
}
