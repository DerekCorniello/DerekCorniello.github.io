<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <BasePage>
    <h1 class="title">About Me</h1>
        <div class="containers-holder">
            <Container>
                <template #title>
                    <img src="/favicon.ico" alt="Derek's Headshot" style="width: 15%; height: auto; border-radius: 50%; display: block; margin-left: auto; margin-right: auto; margin-bottom: 2%;">
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
                    📈 GitHub Stats:
                </template>
                <div style="display: flex; justify-content: center;">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DerekCorniello&langs_count=8&layout=compact&exclude_repo=dotfiles,NeoVim-Setup&size_weight=0.5&count_weight=0.5&hide=MATLAB,HTML,CSS,JavaScript&theme=highcontrast&hide_border=true" alt="Top Languages" style="width: 35%; margin-right: 7.5%">
                    <img src="https://github-readme-stats.vercel.app/api?username=derekcorniello&show_icons=true&hide=stars&count_private=true&hide_rank=true&theme=highcontrast&hide_border=true" alt="Derek's GitHub Stats" style="width: 35%; margin-left: 7.5%;">
                </div>
            </Container>

            <Container>
                <template #title>
                    🥇 My Language and Technology Skillset
                </template>
                <table>
                  <tbody>
                    <tr>
                      <td><strong>My Development Tools</strong></td>
                      <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=neovim,arch,git,aws,docker,postman,md,unity" alt="Development Tools"></a></td>
                    </tr>
                    <tr>
                      <td><strong>General Purpose</strong></td>
                      <td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=py,go,rust,cs,cpp,c,java" alt="General Purpose"></a></td>
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
                    <li><strong>8 Bit Beats:</strong> Rust - A TUI app that generates randomized music in the terminal!</li>
                    <li><strong>gitcmd:</strong> Rust - A customizable git terminal.</li>
                    <li><strong>ReqInspect:</strong> Go, Vue, AWS - Full-stack app for validating `requirements.txt` files, deployed on AWS.</li>
                    <li><strong>Professional Site:</strong> Vue, Vite, JavaScript, HTML, CSS - Portfolio site showcasing background, projects, and blogs.</li>
                    <li><strong>AmandaLynnDashboard:</strong> Python, Django, Vue - Custom inventory and financial management app.</li>
                </ul>
                <br>
                <div style="color: #00ffcc; text-align: center; font-size: 1.5rem;">
                Check out more details <u><strong><router-link class="r-link" to="projects">here</router-link></strong></u>!
                </div>
            </Container>
            <Container>
                <template #title>
                    🛠️ Currently Learning About and Developing
                </template>
                <ul>
                    <li>Enhancing <a href="https://github.com/DerekCorniello/dotfiles" target="_blank">dotfiles</a> for a streamlined Neovim + Arch Linux setup.</li>
                    <li>Exploring new programming paradigms.</li>
                    <li>Grinding LeetCode!</li>
                </ul>
                <br>
                <div style="color: #00ffcc; text-align: center; font-size: 1.5rem;">
                    Check out the latest code <u><strong><a class="r-link" href="https://www.github.com/DerekCorniello">here</a></strong></u>!
                </div>
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
