<template>
  <NuxtLayout>
    <div class="terminal-page">
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-buttons">
            <span class="terminal-button red"></span>
            <span class="terminal-button yellow"></span>
            <span class="terminal-button green"></span>
          </div>
          <div class="terminal-title">derek@portfolio:~</div>
        </div>
        <div class="terminal-body" ref="terminalBody">
          <div class="output-container" ref="outputContainer">
            <div v-for="(line, index) in outputLines" :key="index" class="output-line">
              <pre v-if="line.type === 'ascii'" class="ascii-output" v-html="line.content"></pre>
              <div v-else-if="line.type === 'command'" class="command-line">
                <span class="prompt">visitor@derek.dev:~$</span>
                <span class="command-text">{{ line.content }}</span>
              </div>
              <div v-else-if="line.type === 'error'" class="error-output">{{ line.content }}</div>
              <div v-else-if="line.type === 'link'" class="link-output">
                <a :href="line.url" target="_blank" rel="noopener noreferrer">{{ line.content }}</a>
              </div>
              <pre v-else class="text-output" v-html="line.content"></pre>
            </div>
          </div>
          <div class="input-line">
            <span class="prompt">visitor@derek.dev:~$</span>
            <input
              ref="commandInput"
              v-model="currentCommand"
              type="text"
              class="command-input"
              @keydown.enter="executeCommand"
              @keydown.up="navigateHistory(-1)"
              @keydown.down="navigateHistory(1)"
              @keydown.tab.prevent="tabComplete"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
            />
            <span class="cursor">_</span>
          </div>
        </div>
      </div>
      <div class="hint-text">
        Type <span class="highlight">help</span> to see available commands
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

useHead({
  title: 'Terminal - Derek Corniello',
})

const terminalBody = ref(null)
const outputContainer = ref(null)
const commandInput = ref(null)
const currentCommand = ref('')
const outputLines = ref([])
const commandHistory = ref([])
const historyIndex = ref(-1)

const asciiArt = `
<span class="cyan"> ____                 _       ____                 _      _ _       </span>
<span class="cyan">|  _ \\  ___ _ __ ___| | __  / ___|___  _ __ _ __ (_) ___| | | ___  </span>
<span class="cyan">| | | |/ _ \\ '__/ _ \\ |/ / | |   / _ \\| '__| '_ \\| |/ _ \\ | |/ _ \\ </span>
<span class="cyan">| |_| |  __/ | |  __/   <  | |__| (_) | |  | | | | |  __/ | | (_) |</span>
<span class="cyan">|____/ \\___|_|  \\___|_|\\_\\  \\____\\___/|_|  |_| |_|_|\\___|_|_|\\___/ </span>
`

const welcomeMessage = `
<span class="cyan">Welcome to my interactive terminal portfolio!</span>
<span class="dim">Type 'help' to see available commands.</span>
`

const commands = {
  help: () => {
    return `
<span class="cyan">Available Commands:</span>
<span class="white">  help</span>      - Show this help message
<span class="white">  about</span>     - Learn about me
<span class="white">  skills</span>    - View my technical skills
<span class="white">  projects</span>  - See my featured projects
<span class="white">  contact</span>   - Get my contact information
<span class="white">  social</span>    - View my social media links
<span class="white">  education</span> - See my educational background
<span class="white">  experience</span>- View my work experience
<span class="white">  resume</span>    - Open my resume
<span class="white">  clear</span>     - Clear the terminal
<span class="white">  whoami</span>    - Display current user
<span class="white">  date</span>      - Show current date and time
<span class="white">  echo</span>      - Echo a message
<span class="white">  neofetch</span>  - Display system info (portfolio style)

<span class="dim">Tip: Use ↑ and ↓ arrows to navigate command history</span>
`
  },

  about: () => {
    return `
<span class="cyan">┌──────────────────────────────────────────────────────────────────┐</span>
<span class="cyan">│</span>  <span class="white bold">About Derek Corniello</span>                                          <span class="cyan">│</span>
<span class="cyan">└──────────────────────────────────────────────────────────────────┘</span>

<span class="white">Hello! I'm Derek Corniello, a Computer Science and Software
Engineering student at the University of Cincinnati.</span>

<span class="dim">I have interned with Siemens Digital Industry Software for the
last 2+ years, working on backends and API design. I will be at
Fifth Third Bank over the spring and LinkedIn over the summer.</span>

<span class="cyan">My passions include:</span>
  <span class="white">→</span> Software Product Design
  <span class="white">→</span> Backend Development
  <span class="white">→</span> API Design
  <span class="white">→</span> Project Management

<span class="dim">My curiosity and eagerness to learn drive me to keep exploring,
one project and concept at a time!</span>
`
  },

  skills: () => {
    return `
<span class="cyan">┌──────────────────────────────────────────────────────────────────┐</span>
<span class="cyan">│</span>  <span class="white bold">Technical Skills</span>                                               <span class="cyan">│</span>
<span class="cyan">└──────────────────────────────────────────────────────────────────┘</span>

<span class="cyan">Backend Languages:</span>
  <span class="white">Python</span>  <span class="dim">████████████████████</span>  Expert
  <span class="white">Rust</span>    <span class="dim">████████████████</span>      Advanced
  <span class="white">Go</span>      <span class="dim">████████████████</span>      Advanced
  <span class="white">Java</span>    <span class="dim">██████████████</span>        Intermediate
  <span class="white">C++</span>     <span class="dim">████████████</span>          Intermediate

<span class="cyan">Frontend:</span>
  <span class="white">HTML/CSS</span>    <span class="dim">████████████████████</span>  Expert
  <span class="white">JavaScript</span>  <span class="dim">████████████████</span>      Advanced
  <span class="white">TypeScript</span>  <span class="dim">██████████████</span>        Intermediate
  <span class="white">Vue.js</span>      <span class="dim">██████████████</span>        Intermediate

<span class="cyan">Databases:</span>
  <span class="white">SQLite</span>      <span class="dim">████████████████</span>      Advanced
  <span class="white">PostgreSQL</span>  <span class="dim">██████████████</span>        Intermediate
  <span class="white">MySQL</span>       <span class="dim">██████████████</span>        Intermediate

<span class="cyan">Dev Tools:</span>
  <span class="white">NeoVim, Arch Linux, Git, AWS, Docker, Unity, Arduino</span>
`
  },

  projects: () => {
    return `
<span class="cyan">┌──────────────────────────────────────────────────────────────────┐</span>
<span class="cyan">│</span>  <span class="white bold">Featured Projects</span>                                              <span class="cyan">│</span>
<span class="cyan">└──────────────────────────────────────────────────────────────────┘</span>

<span class="pink">♟️  Better-Elo</span> <span class="dim">[Python]</span>
    Research project revolutionizing chess rating systems with
    momentum-enhanced predictions. Achieves 73.1% accuracy.
    <span class="cyan">→ github.com/DerekCorniello/better-elo</span>

<span class="pink">🖱️  Quick Mouse</span> <span class="dim">[Go, React, WebSockets]</span>
    <span class="yellow">🏆 1st Place - 2025 MakeUC Hackathon</span>
    Wireless mouse solution turning smartphones into input devices.
    <span class="cyan">→ github.com/DerekCorniello/quick-mouse</span>

<span class="pink">🎵 8BitBeats</span> <span class="dim">[Rust]</span>
    Terminal-based chiptune generator with real-time TUI controls.
    <span class="cyan">→ crates.io/crates/eightbitbeats</span>

<span class="pink">🐍 pip-req-valid</span> <span class="dim">[Go, Vue.js, AWS, Docker]</span>
    Web app validating Python requirements.txt files.
    <span class="cyan">→ github.com/DerekCorniello/pip-req-valid</span>

<span class="pink">⌨️  gitcmd</span> <span class="dim">[Rust]</span>
    Terminal-based custom shell for Git commands.
    <span class="cyan">→ crates.io/crates/gitcmd</span>

<span class="dim">Type 'open projects' to visit the full projects page.</span>
`
  },

  contact: () => {
    return `
<span class="cyan">┌──────────────────────────────────────────────────────────────────┐</span>
<span class="cyan">│</span>  <span class="white bold">Contact Information</span>                                            <span class="cyan">│</span>
<span class="cyan">└──────────────────────────────────────────────────────────────────┘</span>

<span class="white">📧 Email:</span>    <span class="cyan">corniedj@mail.uc.edu</span>
<span class="white">📱 Phone:</span>    <span class="cyan">440-821-5281</span>
<span class="white">💼 LinkedIn:</span> <span class="cyan">linkedin.com/in/derek-corniello</span>

<span class="dim">Feel free to reach out! I'm always open to new opportunities
and interesting conversations.</span>
`
  },

  social: () => {
    return `
<span class="cyan">┌──────────────────────────────────────────────────────────────────┐</span>
<span class="cyan">│</span>  <span class="white bold">Social Links</span>                                                   <span class="cyan">│</span>
<span class="cyan">└──────────────────────────────────────────────────────────────────┘</span>

<span class="white">GitHub:</span>   <span class="cyan">github.com/DerekCorniello</span>
<span class="white">LinkedIn:</span> <span class="cyan">linkedin.com/in/derek-corniello</span>
<span class="white">Twitter:</span>  <span class="cyan">twitter.com/DerekCorniello</span>
<span class="white">YouTube:</span>  <span class="cyan">youtube.com/@DerekCornDev</span>
`
  },

  education: () => {
    return `
<span class="cyan">┌──────────────────────────────────────────────────────────────────┐</span>
<span class="cyan">│</span>  <span class="white bold">Education</span>                                                      <span class="cyan">│</span>
<span class="cyan">└──────────────────────────────────────────────────────────────────┘</span>

<span class="pink">University of Cincinnati</span>
<span class="white">B.S. Computer Science</span>
<span class="white">M.Eng. Software Engineering</span>

<span class="dim">Currently pursuing a dual degree program combining
theoretical computer science foundations with practical
software engineering skills.</span>
`
  },

  experience: () => {
    return `
<span class="cyan">┌──────────────────────────────────────────────────────────────────┐</span>
<span class="cyan">│</span>  <span class="white bold">Work Experience</span>                                                <span class="cyan">│</span>
<span class="cyan">└──────────────────────────────────────────────────────────────────┘</span>

<span class="pink">Siemens Digital Industry Software</span> <span class="dim">| 2+ years</span>
<span class="white">Software Engineering Intern</span>
  → Backend development and API design
  → Building scalable software solutions

<span class="pink">Fifth Third Bank</span> <span class="dim">| Upcoming - Spring</span>
<span class="white">Incoming Intern</span>

<span class="pink">LinkedIn</span> <span class="dim">| Upcoming - Summer</span>
<span class="white">Incoming Intern</span>
`
  },

  resume: () => {
    window.open('/resume', '_blank')
    return `<span class="cyan">Opening resume in new tab...</span>`
  },

  clear: () => {
    outputLines.value = []
    return null
  },

  whoami: () => {
    return `<span class="cyan">visitor</span> <span class="dim">- Welcome to Derek Corniello's portfolio!</span>`
  },

  date: () => {
    const now = new Date()
    return `<span class="cyan">${now.toLocaleString()}</span>`
  },

  echo: (args) => {
    if (args.length === 0) return ''
    return `<span class="white">${args.join(' ')}</span>`
  },

  neofetch: () => {
    return `
<span class="cyan">       ████████████████       </span>  <span class="cyan">derek</span>@<span class="cyan">portfolio</span>
<span class="cyan">     ████████████████████     </span>  <span class="white">-------------------</span>
<span class="cyan">   ████████████████████████   </span>  <span class="cyan">Name:</span> Derek Corniello
<span class="cyan">  ██████████████████████████  </span>  <span class="cyan">Role:</span> CS/SWE Student & Backend Dev
<span class="cyan"> ████████████████████████████ </span>  <span class="cyan">Location:</span> Cincinnati, OH
<span class="cyan"> ████████████████████████████ </span>  <span class="cyan">University:</span> University of Cincinnati
<span class="cyan">  ██████████████████████████  </span>  <span class="cyan">Editor:</span> NeoVim
<span class="cyan">   ████████████████████████   </span>  <span class="cyan">OS:</span> Arch Linux btw
<span class="cyan">     ████████████████████     </span>  <span class="cyan">Shell:</span> Zsh + Oh My Zsh
<span class="cyan">       ████████████████       </span>  <span class="cyan">Languages:</span> Python, Rust, Go, Java
<span class="dim">                                  </span>  <span class="cyan">Frameworks:</span> Vue.js, Flask, React
`
  },

  open: (args) => {
    const pages = {
      about: '/about',
      projects: '/projects',
      contact: '/contact',
      blog: '/blog',
      resume: '/resume',
    }
    const page = args[0]?.toLowerCase()
    if (page && pages[page]) {
      window.location.href = pages[page]
      return `<span class="cyan">Navigating to ${page}...</span>`
    }
    return `<span class="error">Usage: open [about|projects|contact|blog|resume]</span>`
  },
}

const availableCommands = Object.keys(commands)

const executeCommand = async () => {
  const input = currentCommand.value.trim()
  if (!input) return

  // Add command to history
  commandHistory.value.push(input)
  historyIndex.value = commandHistory.value.length

  // Display the command
  outputLines.value.push({ type: 'command', content: input })

  // Parse command and arguments
  const parts = input.split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const args = parts.slice(1)

  // Execute command
  if (commands[cmd]) {
    const result = commands[cmd](args)
    if (result) {
      await typeOutput(result)
    }
  } else {
    outputLines.value.push({
      type: 'error',
      content: `Command not found: ${cmd}. Type 'help' for available commands.`,
    })
  }

  currentCommand.value = ''
  await nextTick()
  scrollToBottom()
}

const typeOutput = async (text) => {
  outputLines.value.push({ type: 'text', content: text })
  await nextTick()
  scrollToBottom()
}

const scrollToBottom = () => {
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
  }
}

const navigateHistory = (direction) => {
  const newIndex = historyIndex.value + direction
  if (newIndex >= 0 && newIndex < commandHistory.value.length) {
    historyIndex.value = newIndex
    currentCommand.value = commandHistory.value[newIndex]
  } else if (newIndex === commandHistory.value.length) {
    historyIndex.value = newIndex
    currentCommand.value = ''
  }
}

const tabComplete = () => {
  const input = currentCommand.value.toLowerCase()
  if (!input) return

  const matches = availableCommands.filter((cmd) => cmd.startsWith(input))
  if (matches.length === 1) {
    currentCommand.value = matches[0]
  } else if (matches.length > 1) {
    outputLines.value.push({
      type: 'text',
      content: `<span class="dim">Possible commands: ${matches.join(', ')}</span>`,
    })
  }
}

const focusInput = () => {
  if (commandInput.value) {
    commandInput.value.focus()
  }
}

onMounted(async () => {
  // Display welcome message
  outputLines.value.push({ type: 'ascii', content: asciiArt })
  outputLines.value.push({ type: 'text', content: welcomeMessage })

  await nextTick()
  focusInput()
})

// Focus input when clicking anywhere in terminal
watch(
  () => terminalBody.value,
  () => {
    if (terminalBody.value) {
      terminalBody.value.addEventListener('click', focusInput)
    }
  }
)
</script>

<style scoped>
.terminal-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
}

.terminal-window {
  width: 100%;
  max-width: 900px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 204, 0.3);
  box-shadow:
    0 0 30px rgba(0, 255, 204, 0.2),
    0 8px 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.terminal-header {
  background: rgba(30, 30, 30, 0.95);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 255, 204, 0.2);
}

.terminal-buttons {
  display: flex;
  gap: 8px;
  margin-right: 1rem;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.8;
}

.terminal-button.red {
  background: #ff5f56;
}

.terminal-button.yellow {
  background: #ffbd2e;
}

.terminal-button.green {
  background: #27c93f;
}

.terminal-title {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-family: var(--font-mono, 'Fira Code', monospace);
}

.terminal-body {
  padding: 1rem;
  height: 500px;
  overflow-y: auto;
  font-family: var(--font-mono, 'Fira Code', monospace);
  font-size: 0.9rem;
  line-height: 1.5;
  cursor: text;
}

.output-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.output-line {
  word-wrap: break-word;
  white-space: pre-wrap;
}

.ascii-output {
  color: #00ffcc;
  font-size: 0.6rem;
  line-height: 1.1;
  text-shadow: 0 0 5px rgba(0, 255, 204, 0.5);
  margin: 0;
  overflow-x: auto;
}

.command-line {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.prompt {
  color: #00ffcc;
  white-space: nowrap;
  text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);
}

.command-text {
  color: #ffffff;
}

.text-output {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.text-output :deep(.cyan) {
  color: #00ffcc;
}

.text-output :deep(.white) {
  color: #ffffff;
}

.text-output :deep(.dim) {
  color: rgba(255, 255, 255, 0.5);
}

.text-output :deep(.pink) {
  color: #ff66b2;
}

.text-output :deep(.yellow) {
  color: #ffbd2e;
}

.text-output :deep(.bold) {
  font-weight: 700;
}

.text-output :deep(.error) {
  color: #ff5f56;
}

.ascii-output :deep(.cyan) {
  color: #00ffcc;
}

.error-output {
  color: #ff5f56;
}

.link-output a {
  color: #00ffcc;
  text-decoration: underline;
}

.input-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.command-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  font-family: var(--font-mono, 'Fira Code', monospace);
  font-size: 0.9rem;
  outline: none;
  caret-color: transparent;
}

.cursor {
  color: #00ffcc;
  animation: blink 0.75s step-end infinite;
  text-shadow: 0 0 5px rgba(0, 255, 204, 0.7);
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.hint-text {
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  text-align: center;
}

.hint-text .highlight {
  color: #00ffcc;
  font-weight: 500;
}

/* Scrollbar styling */
.terminal-body::-webkit-scrollbar {
  width: 8px;
}

.terminal-body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
}

.terminal-body::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 204, 0.3);
  border-radius: 4px;
}

.terminal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 255, 204, 0.5);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .terminal-page {
    padding: 1rem 0.5rem;
  }

  .terminal-body {
    height: 400px;
    font-size: 0.8rem;
  }

  .ascii-output {
    font-size: 0.45rem;
  }

  .terminal-title {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .terminal-body {
    height: 350px;
    padding: 0.75rem;
  }

  .ascii-output {
    font-size: 0.35rem;
  }

  .prompt {
    font-size: 0.75rem;
  }

  .command-input {
    font-size: 0.8rem;
  }
}
</style>
