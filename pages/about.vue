<template>
  <div class="about">
    <section class="about-intro">
      <h1>About Me</h1>
      <p>
        I'm a Software Engineer Intern at Fifth Third Bank based out of Cincinnati, Ohio.
        I'm pursuing my Master of Engineering in Software Engineering at the University of Cincinnati.
      </p>
        <p>
          I specialize in backend development with experience in Go, Rust, and Python.
          I've worked on backend systems at Siemens and am passionate about building scalable systems that help people.
          When I'm not coding, I'm probably customizing my Neovim setup, <a href="https://www.chess.com/member/DerekCornDev" target="_blank" rel="noopener noreferrer">playing chess</a>, or picking up my guitar.
        </p>
    </section>

    <section class="tabs-section">
      <div class="tabs">
        <button
          :class="['tab', { active: activeTab === 'experience' }]"
          @click="activeTab = 'experience'"
        >
          Experience
        </button>
        <button
          :class="['tab', { active: activeTab === 'education' }]"
          @click="activeTab = 'education'"
        >
          Education
        </button>
      </div>

      <div v-show="activeTab === 'experience'" class="tab-content">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Backend Engineer</h3>
              <p class="company">LinkedIn</p>
              <p class="period">May 2026 - Aug 2027</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Software Engineer Intern</h3>
              <p class="company">Fifth Third Bank</p>
              <p class="period">Present (until May 2026)</p>
              <ul class="details">
                <li>Building scalable backend services</li>
                <li>Working with Go and distributed systems</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Software Engineering Intern</h3>
              <p class="company">Siemens DISW</p>
              <p class="period">Jan 2024 - Dec 2025</p>
              <ul class="details">
                <li>Working on backend systems and API design</li>
                <li>Built tooling for internal development workflows</li>
                <li>Collaborating with cross-functional engineering teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-show="activeTab === 'education'" class="tab-content">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Master of Engineering in Software Engineering</h3>
              <p class="company">University of Cincinnati</p>
              <p class="period">Expected: May 2027</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Bachelor of Science in Computer Science</h3>
              <p class="company">University of Cincinnati</p>
              <p class="period">Expected: May 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h2>Skills & Technologies</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Tools & DevOps</h3>
          <div class="skill-list">
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=neovim" alt="Neovim" class="skill-icon" />
              <span>Neovim</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=arch" alt="Arch Linux" class="skill-icon" />
              <span>Arch Linux</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=git" alt="Git" class="skill-icon" />
              <span>Git</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=aws" alt="AWS" class="skill-icon" />
              <span>AWS</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=docker" alt="Docker" class="skill-icon" />
              <span>Docker</span>
            </div>
          </div>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <div class="skill-list">
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=py" alt="Python" class="skill-icon" />
              <span>Python</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=rust" alt="Rust" class="skill-icon" />
              <span>Rust</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=go" alt="Go" class="skill-icon" />
              <span>Go</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=java" alt="Java" class="skill-icon" />
              <span>Java</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=cpp" alt="C++" class="skill-icon" />
              <span>C++</span>
            </div>
          </div>
        </div>
        <div class="skill-category">
          <h3>Frontend</h3>
          <div class="skill-list">
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML" class="skill-icon" />
              <span>HTML</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" class="skill-icon" />
              <span>JavaScript</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" class="skill-icon" />
              <span>TypeScript</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=vue" alt="Vue" class="skill-icon" />
              <span>Vue</span>
            </div>
            <div class="skill-item">
              <img src="https://skillicons.dev/icons?i=vite" alt="Vite" class="skill-icon" />
              <span>Vite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('experience')

useHead({
  title: 'About - Derek Corniello',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Derek Corniello, a Software Engineer Intern at Fifth Third Bank.',
    },
  ],
})
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 6rem;
}

.about-intro {
  margin-bottom: 3rem;
}

.about-intro h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.about-intro p {
  margin-bottom: 1rem;
}

.about-intro a {
  color: var(--accent-mauve);
  text-decoration: none;
}

.about-intro a:hover {
  text-decoration: underline;
}

.tabs-section {
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
}

.tab {
  flex: 1;
  padding: 1rem 2rem;
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
}

.tab.active {
  background: var(--accent-blue);
  color: var(--bg-crust);
  border-color: var(--accent-blue);
}

.tab-content {
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  margin-bottom: 1.5rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 6px;
  width: 14px;
  height: 14px;
  background: var(--accent-blue);
  border-radius: 50%;
  border: 3px solid var(--bg-base);
}

.timeline-content h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.timeline-content .company {
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.timeline-content .period {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-content .details {
  margin: 0.5rem 0 0 1.25rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.timeline-content .details li {
  margin-bottom: 0.25rem;
}

.skills-section {
  margin-bottom: 4rem;
}

.skills-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.skill-category {
  background: var(--bg-mantle);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
}

.skill-category h3 {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.skill-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.skill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
