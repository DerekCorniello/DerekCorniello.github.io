export interface SocialLink {
    name: string;
    url: string;
}

export interface StackInfo {
    languages: string[];
    tools: string[];
    frameworks: string[];
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
    languages: ['Go', 'Rust', 'Python', 'TypeScript', 'Lua', 'C'],
    tools: ['Neovim', 'Docker', 'Kubernetes', 'Linux', 'Arch Linux', 'Terraform'],
    frameworks: ['Gin', 'FastAPI', 'Vue', 'Nuxt'],
};

const aboutInfo: AboutInfo = {
    name: 'Derek Corniello',
    role: 'Software Engineer Intern',
    company: 'LinkedIn',
    location: 'Cincinnati, OH',
    currentFocus: 'Working on developer tools at LinkedIn. Building a compiler in my free time.',
};

export function useSiteData() {
    return {
        socialLinks,
        stackInfo,
        aboutInfo,
    };
}
