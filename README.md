![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Vue.js](https://img.shields.io/badge/Vue.js-%234FC08D.svg?style=for-the-badge&logo=vue.js&logoColor=white) ![Nuxt](https://img.shields.io/badge/Nuxt-00DC82.svg?style=for-the-badge&logo=nuxtdotjs&logoColor=white)

# [derekcorniello.github.io](https://www.derekcorniello.github.io)
My personal portfolio site that showcases my skills, work, and projects as a software engineer in training!

## Features
- Responsive Design
- Visualizations of my skills
- Async loading of media
- Interactive terminal-style greeting for first-time users
- Smooth page transitions with dynamic routing
- ... and more!

## Tech Stack
- **Nuxt 3**: Vue.js meta-framework for server-side rendering, static site generation, and file-based routing.
- **Vue.js**: Framework used for the frontend of the site, utilizing Nuxt's built-in routing and Vue components for modular structure.
- **JavaScript**: Used for interactive features, dynamic content, and handling routing logic.
- **HTML5**: Markup for the structure of the website.
- **CSS3**: Styling and layout with modern CSS features, including custom animations and transitions.
- **Tailwind CSS**: Used for utility-first styling to ensure flexibility and responsiveness.
- **Three.js**: Used for creating space-themed 3D elements and visual effects.
- **GitHub Pages**: Hosting platform used to deploy the website.

## Development

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Setup

Install dependencies:
```bash
npm install
```

### Development Server

Start the development server on `http://localhost:3000`:
```bash
npm run dev
```

### Production

Build the application for production:
```bash
npm run build
```

Generate static site:
```bash
npm run generate
```

Preview the production build locally:
```bash
npm run preview
```

### Other Commands

Lint and fix files:
```bash
npm run lint
```

Format code with Prettier:
```bash
npm run format
```

## Project Structure

```
├── app.vue              # Root Vue component
├── nuxt.config.ts       # Nuxt configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── assets/
│   └── styles.css       # Global styles
├── components/          # Reusable Vue components
│   ├── Container.vue
│   ├── Starfield.vue
│   └── TerminalGreeting.vue
├── layouts/             # Layout components
│   ├── default.vue      # Main page layout
│   └── blog.vue         # Blog post layout
├── pages/               # File-based routing pages
│   ├── index.vue        # Home page (/)
│   ├── about.vue        # About page (/about)
│   ├── projects.vue     # Projects page (/projects)
│   ├── contact.vue      # Contact page (/contact)
│   ├── resume.vue       # Resume redirect (/resume)
│   ├── blog/
│   │   └── index.vue    # Blog listing (/blog)
│   └── blogs/
│       ├── nvim-transition.vue   # Blog post (/blogs/nvim-transition)
│       └── keyboard.vue          # Blog post (/blogs/keyboard)
├── public/              # Static assets
│   ├── images/
│   ├── blog-data.json
│   ├── resume.pdf
│   └── ...
└── scripts/
    └── starfield.js     # Three.js starfield animation
```

## Sections
- About Me
- My Job History
- My code involvement and breakdown
- My blog posts
- My portfolio
- My resume
- Links to all of my socials

#### License:
Licensed under the Apache 2.0 License

## Connect with Me!
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/derek-corniello) [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/derekcorniello) [![X](https://img.shields.io/badge/X-%231DA1F2.svg?style=for-the-badge&logo=x&logoColor=white)](https://x.com/derekcorniello)
