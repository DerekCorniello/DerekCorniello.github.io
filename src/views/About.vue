<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  <BasePage>
    <h1 class="title">About Me</h1>
    <div class="containers-holder">
      <Container>
        <template #title>
          <div class="image-wrapper" style="width: 15%; margin: 0 auto 2% auto;">
            <div class="skeleton"></div>
            <img
              src="/headshot.jpeg"
              alt="Derek's Headshot"
              class="lazy-image"
              style="border-radius: 50%;"
              onload="this.previousElementSibling.remove(); this.style.opacity='1';"
            />
          </div>
          👋 Hello, I'm Derek Corniello!
        </template>
        I'm a CS/SWE student at the University of Cincinnati. I have interned with Siemens
        Digital Industry Software for the last 2 years, working on backends and API design.
        I will be at Fifth Third Bank over the spring and LinkedIn over the summer. I’m excited about 
        software product design, project management, and back-end development. My curiosity and
        eagerness to learn drive me to keep exploring, one project and concept at a time! Please
        explore my page and feel free to
        <strong
          ><u><router-link to="contact">contact me</router-link></u></strong
        >
        or
        <strong
          ><u><router-link to="contact">view my resume</router-link></u></strong
        >! <br /><br />
        <div class="links">
          <a
            href="https://www.linkedin.com/in/derek-corniello"
            target="_blank"
            style="text-decoration: none"
          >
            <i class="bi bi-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/DerekCorniello" target="_blank" style="text-decoration: none">
            <i class="bi bi-github"></i> GitHub
          </a>
          <a
            href="https://twitter.com/DerekCorniello"
            target="_blank"
            style="text-decoration: none"
          >
            <i class="bi bi-twitter-x"></i> X
          </a>
          <a
            href="https://youtube.com/@DerekCornDev"
            target="_blank"
            style="text-decoration: none"
          >
            <i class="bi bi-youtube"></i> YouTube
          </a>
          <a href="/resume" target="_blank" style="text-decoration: none">
            <i class="bi bi-file-earmark-text"></i> Resume
          </a>
        </div>
      </Container>

      <Container>
        <template #title> 📈 GitHub and LeetCode Stats: </template>
        <div
          style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem"
        >
        <div class="image-wrapper" style="max-width: 500px;">
          <div class="skeleton"></div>
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=DerekCorniello&theme=transparent&exclude=csharp"
            alt="Top Languages"
            loading="lazy"
            decoding="async"
            class="lazy-image"
            onload="this.previousElementSibling.remove(); this.style.opacity='1';"
          />
        </div>

        <div class="image-wrapper" style="max-width: 500px;">
          <div class="skeleton"></div>
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=DerekCorniello&theme=transparent"
            alt="GitHub Stats"
            loading="lazy"
            decoding="async"
            class="lazy-image"
            onload="this.previousElementSibling.remove(); this.style.opacity='1';"
          />
        </div>
          <div class="image-wrapper" style="max-width: 400px;">
            <div class="skeleton"></div>
            <img
              src="https://leetcard.jacoblin.cool/DerekCorn?ext=activity&theme=transparent"
              alt="LeetCode Activity"
              class="lazy-image"
              onload="this.previousElementSibling.remove(); this.style.display='block';"
            />
          </div>
        </div>

      </Container>

      <Container>
        <template #title> 🥇 My Language and Technology Skillset </template>
        <table>
          <tbody>
            <tr>
              <td><strong>Development Tools</strong></td>
              <td>
                <img src="https://skillicons.dev/icons?i=neovim,arch,git,aws,docker,unity,arduino" alt="Development Tools" />
              </td>
            </tr>
            <tr>
              <td><strong>Backend</strong></td>
              <td>
                 <img src="https://skillicons.dev/icons?i=py,rust,go,java,cpp" alt="Backend tools" />
              </td>
            </tr>
            <tr>
              <td><strong>Frontend</strong></td>
              <td>
                 <img src="https://skillicons.dev/icons?i=html,js,ts,vue,vite" alt="Frontend tools" />
              </td>
            </tr>
            <tr>
              <td><strong>Database</strong></td>
              <td>
                 <img src="https://skillicons.dev/icons?i=sqlite,postgresql,mysql" alt="Database" />
              </td>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container>
        <template #title> 🛠️ Currently Learning About and Developing </template>
        <ul>
          <li>
            Enhancing
            <a href="https://github.com/DerekCorniello/dotfiles" target="_blank">dotfiles</a> for a
            streamlined Neovim + Arch Linux setup.
          </li>
          <li>Exploring new programming paradigms.</li>
          <li>Building a Compiler in Rust</li>
          <li>Probably playing chess on <u><a href="https://www.chess.com/member/derekcorndev">Chess.com</a></u></li>
          <li>Grinding LeetCode!</li>
        </ul>
        <br />
        <div style="color: #00ffcc; text-align: center; font-size: 1.5rem">
          Check out the latest code
          <u
            ><strong
              ><a class="r-link" href="https://www.github.com/DerekCorniello">here</a></strong
            ></u
          >!
        </div>
      </Container>
    </div>
  </BasePage>
</template>

<script>
import BasePage from '@/components/BasePage.vue'
import Container from '@/components/Container.vue'

export default {
  name: 'about',
  components: {
    BasePage,
    Container,
  },
  mounted() {
    document.title = 'About Derek Corniello'
  },
}
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
}

.links {
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
}

.links a {
  color: rgba(0, 173, 216, 0.95);
  text-decoration: none;
  margin: 0 0.5rem;
  &:hover {
    color: #004C61;
    text-shadow:
        0 0 1px #004C61,
        0 0 2px #004C61;
  }
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  color: rgba(255, 255, 255, 0.95);
}

th {
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.image-wrapper {
  position: relative;
  width: 100%;
  text-align: center;
}

.skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  animation: pulse 2s ease-in-out infinite;
  z-index: 1;
}

.lazy-image {
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.3s ease;
  position: relative;
  z-index: 2;
  border-radius: 8px;
}

.lazy-image[style*="display: block"]{
  opacity: 1;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}
</style>
