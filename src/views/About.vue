<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <BasePage>
    <h1 class="title">About Me</h1>
        <div class="containers-holder">
            <Container>
                <template #title>
                    👋 Hello, I'm Derek Corniello!
                </template>
                I'm a CS/SWE student at the University of Cincinnati. I’m passionate about diving into software product design, project management, back-end development, and DevOps. My curiosity and eagerness to learn drive me to keep exploring, one project at a time!
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
                    <li><strong>DevBits:</strong> Go, React, Docker, AWS - A cross between X and LinkedIn for posting project updates. <em>In development</em></li>
                    <li><strong>ReqInspect:</strong> Go, Vue, AWS - Full-stack app for validating `requirements.txt` files, deployed on AWS.</li>
                    <li><strong>Professional Site:</strong> JavaScript, HTML, CSS, jQuery - Static site showcasing background, projects, and blogs.</li>
                    <li><strong>AmandaLynnDashboard:</strong> Python, Django, Vue - Custom inventory and financial management app.</li>
                    <li><strong>Billiards Bonanza:</strong> C#, Unity - Retro 8-bit billiards game with arcade features.</li>
                </ul>
            </Container>
            <Container>
                <template #title>
                    🛠️ Currently Learning About and Developing
                </template>
                <ul>
                    <li>Building <strong>DevBits</strong> - A new social media app.</li>
                    <li>Enhancing <a href="https://github.com/DerekCorniello/dotfiles" target="_blank">dotfiles</a> for a streamlined Arch Linux setup.</li>
                    <li>Exploring Haskell and Scala as FP languages.</li>
                    <li>Grinding LeetCode and tackling <a href="https://github.com/DerekCorniello/advent-of-code-2024" target="_blank">Advent of Code</a> challenges in Go!</li>
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
};
</script>

<style scoped>
html, body {
  background-color: #000; 
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
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  text-align: center;
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
