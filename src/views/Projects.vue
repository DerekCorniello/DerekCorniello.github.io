<template>
  <BasePage>
    <h1 class="title">Projects</h1>
    <div class="containers-holder">
      <Container>
        <template #title>
          <a href="https://github.com/DerekCorniello/DevBits" target="_blank">DevBits</a>
        </template>
        A developer-focused blog and knowledge-sharing platform where users can post concise, useful insights 
        on project progress. Built using React Native for the frontend, Go for backend API, PostgreSQL for DB
        and AWS for hosting, DevBits emphasizes a clean, responsive design and easy content management.<br><br>
        <div style="text-align: center;">
          🔨 <strong><u>This project is still under development!</u></strong>
        </div>
      </Container>
  
      <Container>
        <template #title>
          <a href="https://github.com/DerekCorniello/gitcmd" target="_blank">gitcmd</a>
        </template>
        A terminal-based application acting as a custom shell for Git commands. gitcmd simplifies workflow by offering 
        a tailored prompt and intuitive command input. Built with Rust, it showcases my foray into low-level, high-performance 
        programming and terminal application development.
        <br><br>
        <div style="text-align: center;">
          🔨 <strong><u>This project is still under development!</u></strong>
        </div>
      </Container>

      <Container>
        <template #title>
            <a href="https://reqinspect.com" target="_blank">reqinspect.com</a> / <a href="https://github.com/DerekCorniello/pip-req-valid" target="_blank">pip-req-valid</a>
        </template>
        A web app hosted on AWS that validates `requirements.txt` files for pip. It uses Go for backend processing 
        and Vue.js for the frontend, both hosted on AWS architecture. It checks for missing or outdated dependencies 
        and helps ensure that your Python project’s dependencies are up-to-date and properly formatted.
      </Container>

      <Container>
        <template #title>
          <a href="https://github.com/grillinr/Resume2Web" target="_blank">Resume2Web</a>
        </template>
        A Hackathon app that uses Vite, React/TypeScript, and Python/Flask. It takes a resume and converts it to a 
        website with custom styling. This hackathon was my first and helped me learn more about full-stack development 
        and new skills in a quick manner!
      </Container>

      <Container>
        <template #title>
          <a href="https://github.com/DerekCorniello/NeoVim-Setup" target="_blank">NeoVim</a> / 
          <a href="https://github.com/DerekCorniello/dotfiles" target="_blank">Linux Setup</a>
        </template>
        Here is my development setup that I do my programming and software development on. NeoVim enables me to edit, 
        maintain, search through, and navigate a lot of files at one time, in an efficient manner.
        <br />
        My dotfiles contain my ArchLinux dotfiles setup, which include, but are not limited to, tmux, hyprland, 
        oh my zsh, and kitty.
      </Container>

      <Container>
        <template #title>
          <a href="https://github.com/DerekCorniello/AmandaLynnDashboard" target="_blank">Amanda Lynn Dashboard</a>
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
          <a href="https://github.com/DerekCorniello/Game_BilliardsBonanza" target="_blank">Billiards Bonanza</a>
        </template>
        An 8-Ball game with a bunch of twists and funny add-ons. I made it in Unity using C#, and did all of the 
        assets myself. This was a great experience in learning the syntax of C#, and learning more about programming 
        languages and Unity!
      </Container>

      <Container>
        <template #title>
          <a href="https://github.com/DerekCorniello/CS4065-Discussion-Board" target="_blank">Discussion Board</a>
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
    justify-content: flex-start; /* Align items to the top */
    align-items: center;         /* Horizontally center the content */
    padding: 0;                  /* Remove any padding */
    margin: 0;                   /* Remove any margin */
    flex-direction: column;      /* Align items vertically in column direction */
    flex-grow: 1;                /* Ensures that content grows to fill remaining space */
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #00ffcc; /* Neon green for impact */
  margin: 0;
  text-align: center;
  padding-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8); /* Softer white */
  text-align: center;
  margin-bottom: 2rem;
}

a:hover {
    text-decoration: underline;
}

</style>
