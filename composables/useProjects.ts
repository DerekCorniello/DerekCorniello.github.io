export interface Project {
  title: string
  description: string
  tech: string[]
  url?: string
  icon?: string
  links?: { label: string; url: string }[]
  image?: string
  images?: string[]
}

const projects: Project[] = [
  {
    title: 'nvim-keymap-migrator',
    icon: 'keyboard',
    description: 'A CLI tool that extracts user-defined keymaps from your Neovim configuration and integrates them with vim emulator plugins (IdeaVim, VSCodeVim).',
    tech: ['Node.js', 'Neovim'],
    image: '/nkm-download.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/nvim-keymap-migrator' },
      { label: 'npm', url: 'https://www.npmjs.com/package/nvim-keymap-migrator' },
    ],
  },
  {
    title: 'MuxLang',
    icon: 'code-block',
    description: 'A strong and statically-typed programming language with a focus on explicitness and typing. Inspired by Rust, Go, and Python, designed for beginners and simplicity.',
    tech: ['Rust', 'LLVM', 'C'],
    images: ['/muxlang.png'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/mux-lang' },
      { label: 'Docs', url: 'https://mux-lang.dev' },
    ],
  },
  {
    title: 'Better-Elo',
    icon: 'horse',
    description: 'Chess rating system research with momentum-enhanced predictions. Achieves 73.1% accuracy across 20,000+ games.',
    tech: ['Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/better-elo' },
      { label: 'Paper', url: 'https://github.com/DerekCorniello/better-elo/blob/main/corniedj-better-elo.pdf' },
    ],
  },
  {
    title: 'Quick Mouse',
    icon: 'mouse',
    description: 'Turns your smartphone into a wireless mouse using QR codes and WebSockets. Won 1st place at MakeUC 2025.',
    tech: ['Go', 'React', 'WebSockets'],
    images: ['/qm-base.png', '/qm-calib.png', '/qm-settings.png'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/quick-mouse' },
      { label: 'Devpost', url: 'https://devpost.com/software/quick-mouse' },
    ],
  },
  {
    title: '8BitBeats',
    icon: 'music',
    description: 'Terminal-based chiptune generator in Rust. Seed-based tracks, real-time TUI controls, deterministic synthesis.',
    tech: ['Rust', 'TUI', 'Audio'],
    image: '/eightbitbeats.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/8BitBeats' },
      { label: 'Crates.io', url: 'https://crates.io/crates/eightbitbeats' },
    ],
  },
  {
    title: 'pip-req-valid',
    icon: 'code',
    description: 'Web app that validates requirements.txt files. Originally on AWS, now Dockerized for easy deployment.',
    tech: ['Go', 'Vue.js', 'Docker'],
    image: '/reqinspect.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/pip-req-valid' },
    ],
  },
  {
    title: 'gitcmd',
    icon: 'terminal',
    description: 'Custom Git shell built with Rust. Tailored prompts and intuitive command input for workflow efficiency.',
    tech: ['Rust', 'CLI'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/gitcmd' },
      { label: 'Crates.io', url: 'https://crates.io/crates/gitcmd' },
    ],
  },
  {
    title: 'Resume2Web',
    icon: 'file',
    description: 'Hackathon project that converts resumes to websites. Built with React/TypeScript and Python/Flask.',
    tech: ['React', 'TypeScript', 'Flask'],
    image: '/resume2web.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/grillinr/Resume2Web' },
    ],
  },
  {
    title: 'Dotfiles',
    icon: 'settings',
    description: 'Arch Linux with Hyprland, Neovim, Tmux, and Kitty: the ultimate developer experience.',
    tech: ['Hyprland', 'Lua', 'Arch'],
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/dotfiles' },
    ],
  },
  {
    title: 'Billiards Bonanza',
    icon: 'game',
    description: '8-Ball pool game with twists. Built in Unity using C# with custom assets.',
    tech: ['Unity', 'C#'],
    image: '/billiardsbonanza.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/DerekCorniello/Game_BilliardsBonanza' },
    ],
  },
]

const featuredProjectTitles = ['Quick Mouse', 'MuxLang', '8BitBeats']

export function useProjects() {
  const getAllProjects = (): Project[] => {
    return projects
  }

  const getFeaturedProjects = (): Project[] => {
    return featuredProjectTitles.map(title => 
      projects.find(p => p.title === title)
    ).filter((p): p is Project => p !== undefined)
  }

  const getProjectByUrl = (url: string): Project | undefined => {
    return projects.find(p => p.links?.some(link => link.url === url))
  }

  return {
    projects,
    getAllProjects,
    getFeaturedProjects,
    getProjectByUrl,
  }
}
