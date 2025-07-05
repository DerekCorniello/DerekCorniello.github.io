<template>
  <BasePage>
    <h1 class="title">Projects</h1>
    <p class="subtitle">Click any project name to view it's source and/or demo!</p>
    <div class="containers-holder">
      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">🎵</span>
            <a href="https://github.com/DerekCorniello/8BitBeats" target="_blank" style="text-decoration: underline white;">8BitBeats</a> / 
            <a href="https://crates.io/crates/eightbitbeats" target="_blank" style="text-decoration: underline white;">crates.io</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white" alt="Rust" class="tech-badge">
            <img src="https://img.shields.io/badge/TUI-4EAA25?style=flat&logo=terminal&logoColor=white" alt="TUI" class="tech-badge">
            <img src="https://img.shields.io/badge/Audio-FF8C00?style=flat&logo=audio-technica&logoColor=white" alt="Audio" class="tech-badge">
          </div>
        </template>
        A terminal-based chiptune generator written in Rust. It lets users create, preview, and replay 8-bit songs using 
        seed-based track IDs. With real-time TUI controls and efficient audio synthesis, it generates deterministic tracks 
        in milliseconds, offering a nostalgic and programmable music creation experience right from the command line.
        <img src="/eightbitbeats.png" alt="[8BitBeats Screenshot]">
      </Container>
  
      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">🐍</span>
            <a href="https://reqinspect.com" target="_blank" style="text-decoration: underline white;">reqinspect.com</a> / <a href="https://github.com/DerekCorniello/pip-req-valid" target="_blank" style="text-decoration: underline white;">pip-req-valid</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" alt="Go" class="tech-badge">
            <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white" alt="Vue.js" class="tech-badge">
            <img src="https://img.shields.io/badge/AWS-FF9900?style=flat&logo=amazonaws&logoColor=white" alt="AWS" class="tech-badge">
          </div>
        </template>
        A web app hosted on AWS that validates `requirements.txt` files for pip. It uses Go for backend processing 
        and Vue.js for the frontend, both hosted on AWS architecture. It checks for missing or outdated dependencies 
        and helps ensure that your Python project’s dependencies are up-to-date and properly formatted.
        <br><br>
        <img src="/reqinspect.png" alt="[reqinspect.com Screenshot]">
      </Container>

      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">⌨️</span>
            <a href="https://github.com/DerekCorniello/gitcmd" target="_blank" style="text-decoration: underline white;">gitcmd</a> / 
            <a href="https://crates.io/crates/gitcmd" target="_blank" style="text-decoration: underline white;">crates.io</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white" alt="Rust" class="tech-badge">
            <img src="https://img.shields.io/badge/CLI-4EAA25?style=flat&logo=gnubash&logoColor=white" alt="CLI" class="tech-badge">
          </div>
        </template>
        A terminal-based application acting as a custom shell for Git commands. gitcmd simplifies workflow by offering 
        a tailored prompt and intuitive command input. Built with Rust, it showcases my foray into low-level, high-performance 
        programming and terminal application development.
      </Container>

      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">📝</span>
            <a href="https://github.com/grillinr/Resume2Web" target="_blank" style="text-decoration: underline white;">Resume2Web</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" class="tech-badge">
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" class="tech-badge">
            <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python" class="tech-badge">
            <img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" alt="Flask" class="tech-badge">
          </div>
        </template>
        A Hackathon app that uses Vite, React/TypeScript, and Python/Flask. It takes a resume and converts it to a 
        website with custom styling. This hackathon was my first and helped me learn more about full-stack development 
        and new skills in a quick manner!
        <br><br>
        <img src="/resume2web.png" alt="[Resume2Web Screenshot]">
      </Container>

      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">🚀</span>
            <a href="https://github.com/DerekCorniello/derekcorniello.github.io" target="_blank" style="text-decoration: underline white;">This Portfolio Site</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white" alt="Vue.js" class="tech-badge">
            <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" class="tech-badge">
            <img src="https://img.shields.io/badge/Three.js-000000?style=flat&logo=threedotjs&logoColor=white" alt="Three.js" class="tech-badge">
            <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" class="tech-badge">
          </div>
        </template>
        This webpage was made by me! I used Vite, Vue.js, JavaScript, and HTML/CSS to make a very cool and easily navigated portfolio site for viewers like you
        Three.js was also used to create the very cool backgrounds and word sphere on the landing page. I love space, so introducting you to <strong>my space</strong>
        has been a pleasure!
      </Container>

      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">💻</span>
            <a href="https://github.com/DerekCorniello/NeoVim-Setup" target="_blank" style="text-decoration: underline white;">NeoVim</a> / 
            <a href="https://github.com/DerekCorniello/dotfiles" target="_blank" style="text-decoration: underline white;">Linux Setup</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/NeoVim-57A143?style=flat&logo=neovim&logoColor=white" alt="NeoVim" class="tech-badge">
            <img src="https://img.shields.io/badge/Lua-2C2D72?style=flat&logo=lua&logoColor=white" alt="Lua" class="tech-badge">
            <img src="https://img.shields.io/badge/Hyprland-111111?style=flat&logo=linux&logoColor=white" alt="Hyprland" class="tech-badge">
            <img src="https://img.shields.io/badge/Zsh-1E2C3E?style=flat&logo=gnubash&logoColor=white" alt="Zsh" class="tech-badge">
          </div>
        </template>
        Here is my development setup that I do my programming and software development on. NeoVim enables me to edit, 
        maintain, search through, and navigate a lot of files at one time, in an efficient manner.
        <br />
        My dotfiles contain my ArchLinux dotfiles setup, which include, but are not limited to, tmux, hyprland, 
        oh my zsh, and kitty.
      </Container>

      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">📊</span>
            <a href="https://github.com/DerekCorniello/AmandaLynnDashboard" target="_blank" style="text-decoration: underline white;">Amanda Lynn Dashboard</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white" alt="Vue.js" class="tech-badge">
            <img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="Django" class="tech-badge">
            <img src="https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white" alt="SQLite" class="tech-badge">
            <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker" class="tech-badge">
          </div>
        </template>
        I made a locally-running app for my (non-technical) Mom, who needed an app that showed her product for her small 
        business. It tracks her revenue vs. expenses, stock, sales, and more! I update it regularly per her requests. 
        It runs on a Vue frontend, Django for backend, SQLite for storage, and Docker to build and run the app.
        <br />
        Since she is not a tech expert, Docker was able to help her start and run the new app updates and changes 
        without using the command line!
      </Container>

      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">🎮</span>
            <a href="https://github.com/DerekCorniello/Game_BilliardsBonanza" target="_blank" style="text-decoration: underline white;">Billiards Bonanza</a> / <a href="https://dcoolman.itch.io/Billiards-Bonanza" target="_blank" style="text-decoration: underline white;">Game Homepage</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white" alt="Unity" class="tech-badge">
            <img src="https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white" alt="C#" class="tech-badge">
          </div>
        </template>
        An 8-Ball game with a bunch of twists and funny add-ons. I made it in Unity using C#, and did all of the 
        assets myself. This was a great experience in learning the syntax of C#, and learning more about programming 
        languages and Unity!
        <br><br>
        <img src="/billiardsbonanza.png" alt="[Billiards Bonanza Screenshot]">
      </Container>

      <Container>
        <template #title>
          <div class="project-title">
            <span class="project-emoji">💬</span>
            <a href="https://github.com/DerekCorniello/CS4065-Discussion-Board" target="_blank" style="text-decoration: underline white;">Discussion Board</a>
          </div>
          <div class="tech-stack">
            <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=openjdk&logoColor=white" alt="Java" class="tech-badge">
            <img src="https://img.shields.io/badge/WebSockets-010101?style=flat&logo=websocket&logoColor=white" alt="WebSockets" class="tech-badge">
          </div>
        </template>
        A live discussion board and chat app made directly in Java, using live, hand-rolled WebSockets, to enable 
        real-time chatting with other people. It includes custom options for privileges and chatting lobbies!
      </Container>

      <Container>
        <template #title>
          That's not all!
        </template>
        <div style="text-align: center;">
            Please check out the rest of my projects 
            <a href="https://github.com/DerekCorniello" target="_blank"><u>here</u></a>!
        </div>
      </Container>
    </div>
  </BasePage>
</template>

<script>
import BasePage from "@/components/BasePage.vue";
import Container from "@/components/Container.vue";

export default {
  name: "Projects",
  components: {
    BasePage,
    Container,
  },
  mounted() {
    document.title = "Derek Corniello's Projects";
  }
};
</script>
<style scoped>
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  margin: 4px 0 0 0;
  padding: 0;
  width: 100%;
}

.tech-badge {
  height: 20px;
  width: auto;
  opacity: 0.9;
  transition: all 0.2s ease;
  flex-shrink: 1;
  border-radius: 3px;
  margin: 0;
  padding: 0;
  line-height: 1;
  max-width: 120px;
  object-fit: contain;
}

.tech-badge:hover {
  opacity: 1;
}

.project-emoji {
  margin-right: 6px;
  display: inline-block;
  text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .tech-badge {
    height: 16px;
    max-width: 100px;
  }
  
  .project-emoji {
    margin-right: 4px;
    font-size: 0.8em;
  }
}

.containers-holder {
    display: flex;
    justify-content: flex-start; 
    align-items: center;         
    padding: 0;                  
    margin: 0;                   
    flex-direction: column;      
    flex-grow: 1;                
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #00ffcc; 
  margin: 0;
  text-align: center;
  padding-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8); 
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

img {
    max-width: 100%;
    width: 100%;
    border-radius: 10px;
    display: block;
    margin: 1.5rem auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
    img {
        width: 90%;
        max-width: 800px;
    }
}

@media (min-width: 1024px) {
    img {
        width: 85%;
        max-width: 1000px;
    }
}

@media (min-width: 1280px) {
    img {
        width: 80%;
        max-width: 1200px;
    }
}

/* Ensure images don't exceed their container */
img {
    height: auto;
}

.project-title {
  margin: 0;
  display: block;
  width: 100%;
  line-height: 1.4;
}

.tech-badge:hover {
  opacity: 1;
  box-shadow: 0 2px 8px rgba(0, 255, 204, 0.3);
  z-index: 1;
}
</style>
