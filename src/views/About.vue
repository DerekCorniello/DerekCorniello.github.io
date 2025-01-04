<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <BasePage>
    <h1 class="title">About Me</h1>
        <div class="containers-holder">
            <Container>
                <template #title>
                    👋 Hello, I'm Derek Corniello!
                </template>
                I'm a CS/SWE student at the University of Cincinnati. I’m passionate about diving into software product design, project management, and back-end development. My curiosity and eagerness to learn drive me to keep exploring, one project and concept at a time! Please <strong>explore my page</strong> and feel free to <strong><u><router-link to="contact">contact me</router-link></u></strong> or <strong><u><router-link to="contact">view my resume</router-link></u></strong>!
                <br><br>
                <div class="links">
                    <a href="https://www.linkedin.com/in/derek-corniello" target="_blank" style="text-decoration: none;">
                      <i class="bi bi-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/DerekCorniello" target="_blank" style="text-decoration: none;">
                      <i class="bi bi-github"></i> GitHub
                    </a>
                    <a href="https://twitter.com/DerekCorniello" target="_blank" style="text-decoration: none;">
                        <i class="bi bi-twitter-x"></i> X
                    </a>
                    <a href="/resume" target="_blank" style="text-decoration: none;">
                      <i class="bi bi-file-earmark-text"></i> Resume
                    </a>
                </div>
            </Container>
            <Container>
                <template #title>
                    🥇 My Language and Technology Skillset
                </template>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Languages / Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>My Development Tools</strong></td>
                      <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=neovim,arch,git,aws,docker,postman,md,unity" alt="Development Tools"></a></td>
                    </tr>
                    <tr>
                      <td><strong>General Purpose</strong></td>
                      <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=py,go,cs,cpp,c,java" alt="General Purpose"></a></td>
                    </tr>
                    <tr>
                      <td><strong>Front-End</strong></td>
                      <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=vue,vite,ts,js,html,css,bootstrap" alt="Front-End"></a></td>
                    </tr>
                    <tr>
                      <td><strong>Back-End</strong></td>
                      <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=jquery,php,flask,django" alt="Back-End"></a></td>
                    </tr>
                    <tr>
                      <td><strong>Database</strong></td>
                      <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=sqlite,postgresql,mysql" alt="Database"></a></td>
                    </tr>
                  </tbody>
                </table>
            </Container>
            <Container>
                <template #title>
                    🏆 My Top Projects
                </template>
                <ul>
                    <li><strong>gitcmd:</strong> Rust - A customizable git terminal. <em>In development</em></li>
                    <li><strong>DevBits:</strong> Go, React, Docker, AWS - A cross between X and LinkedIn for posting project updates. <em>In development</em></li>
                    <li><strong>ReqInspect:</strong> Go, Vue, AWS - Full-stack app for validating `requirements.txt` files, deployed on AWS.</li>
                    <li><strong>Professional Site:</strong> Vue, Vite, JavaScript, HTML, CSS - Portfolio site showcasing background, projects, and blogs.</li>
                    <li><strong>AmandaLynnDashboard:</strong> Python, Django, Vue - Custom inventory and financial management app.</li>
                </ul>
            </Container>
            <Container>
                <template #title>
                    🛠️ Currently Learning About and Developing
                </template>
                <ul>
                    <li>Building <strong>DevBits</strong> - A new social media app.</li>
                    <li>Building <strong>gitcmd</strong> - A customizable git terminal.</li>
                    <li>Enhancing <a href="https://github.com/DerekCorniello/dotfiles" target="_blank">dotfiles</a> for a streamlined Neovim + Arch Linux setup.</li>
                    <li>Exploring new programming paradigms.</li>
                    <li>Grinding LeetCode!</li>
                </ul>
            </Container>
        </div>
    </BasePage>
</template>

<script>
import BasePage from '@/components/BasePage.vue';
import Container from '@/components/Container.vue';

export default {
  name: 'about',
  components: {
      BasePage,
      Container
  },
  mounted() {
    document.title = "About Derek Corniello";
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

.links {
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
}

.links a {
  color: rgba(0, 173, 216, 0.95);
  text-decoration: none;
  margin: 0 0.5rem;
}

.links a:hover {
  text-decoration: underline;
}

th, td {
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

button::on_hover {

}
</style>
