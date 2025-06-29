<template>
  <BasePage>
    <h1 class="title">Projects</h1>
    <p class="subtitle">Click any project name to view it's source and/or demo!</p>
    <div class="containers-holder">
      <Container>
        <template #title style="text-decoration: underline;">
          <a href="https://github.com/DerekCorniello/8BitBeats" target="_blank" style="text-decoration: underline white;">8BitBeats</a> / 
          <a href="https://crates.io/crates/eightbitbeats" target="_blank" style="text-decoration: underline white;">crates.io</a>
        </template>
        A terminal-based chiptune generator written in Rust. It lets users create, preview, and replay 8-bit songs using 
        seed-based track IDs. With real-time TUI controls and efficient audio synthesis, it generates deterministic tracks 
        in milliseconds, offering a nostalgic and programmable music creation experience right from the command line.
        <img src="/eightbitbeats.png" alt="[8BitBeats Screenshot]">
      </Container>
  
      <Container>
        <template #title style="text-decoration: underline;">
            <a href="https://reqinspect.com" target="_blank" style="text-decoration: underline white;">reqinspect.com</a> / <a href="https://github.com/DerekCorniello/pip-req-valid" target="_blank" style="text-decoration: underline white;">pip-req-valid</a>
        </template>
        A web app hosted on AWS that validates `requirements.txt` files for pip. It uses Go for backend processing 
        and Vue.js for the frontend, both hosted on AWS architecture. It checks for missing or outdated dependencies 
        and helps ensure that your Python project’s dependencies are up-to-date and properly formatted.
        <br><br>
        <img src="/reqinspect.png" alt="[reqinspect.com Screenshot]">
      </Container>

      <Container>
        <template #title style="text-decoration: underline;">
          <a href="https://github.com/DerekCorniello/gitcmd" target="_blank" style="text-decoration: underline white;">gitcmd</a> / 
          <a href="https://crates.io/crates/gitcmd" target="_blank" style="text-decoration: underline white;">crates.io</a>
        </template>
        A terminal-based application acting as a custom shell for Git commands. gitcmd simplifies workflow by offering 
        a tailored prompt and intuitive command input. Built with Rust, it showcases my foray into low-level, high-performance 
        programming and terminal application development.
      </Container>

      <Container>
        <template #title style="text-decoration: underline;">
          <a href="https://github.com/grillinr/Resume2Web" target="_blank" style="text-decoration: underline white;">Resume2Web</a>
        </template>
        A Hackathon app that uses Vite, React/TypeScript, and Python/Flask. It takes a resume and converts it to a 
        website with custom styling. This hackathon was my first and helped me learn more about full-stack development 
        and new skills in a quick manner!
        <br><br>
        <img src="/resume2web.png" alt="[Resume2Web Screenshot]">
      </Container>

      <Container>
        <template #title style="text-decoration: underline;">
          <a href="https://github.com/DerekCorniello/derekcorniello.github.io" target="_blank" style="text-decoration: underline white;">This Portfolio Site</a>
        </template>
        This webpage was made by me! I used Vite, Vue.js, JavaScript, and HTML/CSS to make a very cool and easily navigated portfolio site for viewers like you
        Three.js was also used to create the very cool backgrounds and word sphere on the landing page. I love space, so introducting you to <strong>my space</strong>
        has been a pleasure!
      </Container>

      <Container>
        <template #title style="text-decoration: underline;">
          <a href="https://github.com/DerekCorniello/NeoVim-Setup" target="_blank" style="text-decoration: underline white;">NeoVim</a> / 
          <a href="https://github.com/DerekCorniello/dotfiles" target="_blank" style="text-decoration: underline white;">Linux Setup</a>
        </template>
        Here is my development setup that I do my programming and software development on. NeoVim enables me to edit, 
        maintain, search through, and navigate a lot of files at one time, in an efficient manner.
        <br />
        My dotfiles contain my ArchLinux dotfiles setup, which include, but are not limited to, tmux, hyprland, 
        oh my zsh, and kitty.
      </Container>

      <Container>
        <template #title style="text-decoration: underline;">
          <a href="https://github.com/DerekCorniello/AmandaLynnDashboard" target="_blank" style="text-decoration: underline white;">Amanda Lynn Dashboard</a>
        </template>
        I made a locally-running app for my (non-technical) Mom, who needed an app that showed her product for her small 
        business. It tracks her revenue vs. expenses, stock, sales, and more! I update it regularly per her requests. 
        It runs on a Vue frontend, Django for backend, SQLite for storage, and Docker to build and run the app.
        <br />
        Since she is not a tech expert, Docker was able to help her start and run the new app updates and changes 
        without using the command line!
      </Container>

      <Container>
        <template #title style="text-decoration: underline;">
          <a href="https://github.com/DerekCorniello/Game_BilliardsBonanza" target="_blank" style="text-decoration: underline white;">Billiards Bonanza</a> / <a href="https://dcoolman.itch.io/Billiards-Bonanza" target="_blank" style="text-decoration: underline white;">Game Homepage</a>
        </template>
        An 8-Ball game with a bunch of twists and funny add-ons. I made it in Unity using C#, and did all of the 
        assets myself. This was a great experience in learning the syntax of C#, and learning more about programming 
        languages and Unity!
        <br><br>
        <img src="/billiardsbonanza.png" alt="[Billiards Bonanza Screenshot]">
      </Container>

      <Container>
        <template #title>
          <a href="https://github.com/DerekCorniello/CS4065-Discussion-Board" target="_blank" style="text-decoration: underline white;">Discussion Board</a>
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
    width: 40%;
    border-radius: 10px;
    display: block;
    margin: 2.5% auto;
}

</style>
