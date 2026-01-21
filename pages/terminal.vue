<template>
  <div class="terminal-wrapper" @click="focusInput">
    <div class="terminal-border">
      <div class="terminal-content" @click="handleContentClick">
        <div v-for="(line, index) in history" :key="index" class="terminal-line">
          <template v-if="line.type === 'input'">
            <span class="prompt">
              <span class="username">guest</span>
              <span class="separator">@</span>
              <span class="hostname">derekcorn</span>
              <span class="path">:~</span>
              <span class="prompt-char">$</span>
            </span>
            <span class="input-text" :class="{ 'valid-cmd': line.valid, 'invalid-cmd': !line.valid && line.content.trim() !== '' }">{{ line.content }}</span>
          </template>
          <template v-else-if="line.type === 'output'">
            <div class="output-content" v-html="line.content"></div>
          </template>
          <template v-else-if="line.type === 'error'">
            <div class="error-content" v-html="line.content"></div>
          </template>
        </div>
        <div class="input-line">
          <span class="prompt">
            <span class="username">guest</span>
            <span class="separator">@</span>
            <span class="hostname">derekcorn</span>
            <span class="path">:~</span>
            <span class="prompt-char">$</span>
          </span>
          <input
            ref="inputRef"
            v-model="currentInput"
            type="text"
            class="terminal-input"
            :class="{ 'valid-cmd': isValidCommand, 'invalid-cmd': isInvalidCommand }"
            @keydown="handleKeydown"
            autocomplete="off"
            spellcheck="false"
            autofocus
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'

definePageMeta({
  layout: 'terminal',
})

interface HistoryLine {
  type: 'input' | 'output' | 'error'
  content: string
  valid?: boolean
}

const history = ref<HistoryLine[]>([])
const currentInput = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const commandHistory = ref<string[]>([])
const historyIndex = ref(-1)
const copied = ref(false)
const copiedField = ref<string | null>(null)

const projects = [
  {
    name: 'Better-Elo',
    description: 'Chess rating system research with momentum-enhanced predictions. Achieves 73.1% accuracy across 20,000+ games.',
    tech: ['Python'],
    url: 'https://github.com/DerekCorniello/better-elo'
  },
  {
    name: 'Quick Mouse',
    description: 'Turns your smartphone into a wireless mouse using QR codes and WebSockets. Won 1st place at MakeUC 2025.',
    tech: ['Go', 'React', 'WebSockets'],
    url: 'https://github.com/DerekCorniello/quick-mouse'
  },
  {
    name: '8BitBeats',
    description: 'Terminal-based chiptune generator in Rust. Seed-based tracks, real-time TUI controls, deterministic synthesis.',
    tech: ['Rust', 'TUI', 'Audio'],
    url: 'https://github.com/DerekCorniello/8BitBeats'
  },
  {
    name: 'pip-req-valid',
    description: 'Web app that validates requirements.txt files. Originally on AWS, now Dockerized for easy deployment.',
    tech: ['Go', 'Vue.js', 'Docker'],
    url: 'https://github.com/DerekCorniello/pip-req-valid'
  },
  {
    name: 'gitcmd',
    description: 'Custom Git shell built with Rust. Tailored prompts and intuitive command input for workflow efficiency.',
    tech: ['Rust', 'CLI'],
    url: 'https://github.com/DerekCorniello/gitcmd'
  },
  {
    name: 'Resume2Web',
    description: 'Hackathon project that converts resumes to websites. Built with React/TypeScript and Python/Flask.',
    tech: ['React', 'TypeScript', 'Flask'],
    url: 'https://github.com/grillinr/Resume2Web'
  },
  {
    name: 'dotfiles',
    description: 'Arch Linux with Hyprland, Neovim, Tmux, and Kitty: the ultimate developer experience.',
    tech: ['Hyprland', 'Lua', 'Arch'],
    url: 'https://github.com/DerekCorniello/dotfiles'
  },
  {
    name: 'Billiards Bonanza',
    description: '8-Ball pool game with twists. Built in Unity using C# with custom assets.',
    tech: ['Unity', 'C#'],
    url: 'https://github.com/DerekCorniello/Game_BilliardsBonanza'
  }
]

const socials = [
  { name: 'GitHub', url: 'https://github.com/DerekCorniello' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/derek-corniello' },
  { name: 'Twitter', url: 'https://x.com/DerekCorniello' },
  { name: 'YouTube', url: 'https://www.youtube.com/@DerekCornDev' },
  { name: 'Email', url: 'corniedj@mail.uc.edu' }
]

const commandList = ['help', 'about', 'socials', 'projects', 'stack', 'contact', 'whoami', 'date', 'clear', 'echo', 'home']
const commandsWithArgs = ['echo']

const isValidCommand = computed(() => {
  const input = currentInput.value.trim()
  if (!input) return true
  const parts = input.split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const hasArgs = parts.length > 1
  if (!commandList.includes(cmd)) return false
  if (hasArgs && !commandsWithArgs.includes(cmd)) return false
  return true
})

const isInvalidCommand = computed(() => {
  const input = currentInput.value.trim()
  if (!input) return false
  const parts = input.split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const hasArgs = parts.length > 1
  if (!commandList.includes(cmd)) return true
  if (hasArgs && !commandsWithArgs.includes(cmd)) return true
  return false
})

const commands: Record<string, (args: string[]) => { type: 'output' | 'error'; content: string }> = {
  help: () => ({
    type: 'output',
    content: `
      <div class="help-section">
        <p>Here are some commands to try:</p>
        <p>about</p>
        <p>socials</p>
        <p>projects</p>
        <p>stack</p>
        <p>contact</p>
        <p>whoami</p>
        <p>date</p>
        <p>clear</p>
        <p>echo [text]</p>
        <p>home</p>
      </div>
    `
  }),

  about: () => ({
    type: 'output',
    content: `
      <div class="about-section">
        <p class="accent">Hi, I'm Derek Corniello!</p>
        <p class="mt-1">Software Engineer Intern at Fifth Third Bank</p>
        <p class="mt-1">Based in Cincinnati, OH</p>
        <p class="mt-1">I build with Go, Rust, Python and more.</p>
        <p class="mt-1">Currently building a compiler in my free time.</p>
        <p class="mt-1">Type 'socials' to find me elsewhere.</p>
      </div>
    `
  }),

  socials: () => ({
    type: 'output',
    content: `
      <div class="socials-section">
        ${socials.map(s => `<p><span class="accent">${s.name}:</span> ${s.url}</p>`).join('')}
      </div>
    `
  }),

  projects: () => ({
    type: 'output',
    content: `
      <div class="projects-section">
        ${projects.map(p => `
          <p class="mt-1"><span class="accent">${p.name}</span></p>
          <p class="indent">${p.description}</p>
          <p class="indent tech">${p.tech.join(' ')}</p>
        `).join('\n---\n')}
      </div>
    `
  }),

  stack: () => ({
    type: 'output',
    content: `
      <div class="stack-section">
        <p class="accent">Languages:</p>
        <p>Go, Rust, Python, TypeScript, Lua, C</p>
        <p class="mt-1 accent">Tools:</p>
        <p>Neovim, Git, Docker, Linux, Arch Linux, Hyprland</p>
        <p class="mt-1 accent">Frameworks:</p>
        <p>Vue, Nuxt, Gin, FastAPI</p>
      </div>
    `
  }),

  contact: () => ({
    type: 'output',
    content: `
      <div class="contact-section">
        <p><span class="accent">Email:</span> <span class="clickable" data-copy="corniedj@mail.uc.edu">corniedj@mail.uc.edu</span>${copied.value && copiedField.value === 'email' ? ' (copied!)' : ''}</p>
        <p><span class="accent">Phone:</span> <span class="clickable" data-copy="+14408215281">+1 (440) 821-5281</span>${copied.value && copiedField.value === 'phone' ? ' (copied!)' : ''}</p>
        <p></p>
        <p><span class="accent">Socials:</span></p>
        <p><a href="https://linkedin.com/in/derek-corniello" target="_blank" class="link">linkedin.com/in/derek-corniello</a></p>
        <p><a href="https://github.com/DerekCorniello" target="_blank" class="link">github.com/DerekCorniello</a></p>
        <p><a href="https://x.com/DerekCorniello" target="_blank" class="link">x.com/DerekCorniello</a></p>
        <p><a href="https://youtube.com/@DerekCornDev" target="_blank" class="link">youtube.com/@DerekCornDev</a></p>
      </div>
    `
  }),

  whoami: () => ({
    type: 'output',
    content: `<p>guest</p>`
  }),

  date: () => ({
    type: 'output',
    content: `<p>${new Date().toString()}</p>`
  }),

  clear: () => {
    history.value = []
    return { type: 'output', content: '' }
  },

  echo: (args) => ({
    type: 'output',
    content: `<p>${args.join(' ')}</p>`
  }),

  home: () => {
    window.location.href = '/'
    return { type: 'output', content: `<p>Redirecting to home page...</p>` }
  },
}

function executeCommand(input: string): void {
  const trimmed = input.trim()
  const parts = trimmed.split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const args = parts.slice(1)
  const hasArgs = parts.length > 1

  let isValid = true
  if (!trimmed) {
    isValid = true
  } else if (!commandList.includes(cmd)) {
    isValid = false
  } else if (hasArgs && !commandsWithArgs.includes(cmd)) {
    isValid = false
  }

  if (!trimmed) {
    history.value.push({ type: 'input', content: '', valid: true })
    return
  }

  history.value.push({ type: 'input', content: trimmed, valid: isValid })
  commandHistory.value.push(trimmed)
  historyIndex.value = commandHistory.value.length

  if (commands[cmd]) {
    if (hasArgs && !commandsWithArgs.includes(cmd)) {
      history.value.push({
        type: 'error',
        content: `<p>${cmd} expects 0 args, but ${args.length} provided</p>`
      })
    } else {
      const result = commands[cmd](args)
      if (result.content) {
        history.value.push(result)
      }
    }
  } else {
    history.value.push({
      type: 'error',
      content: `<p>${cmd}: command not found. Type 'help' for available commands.</p>`
    })
  }
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Enter') {
    executeCommand(currentInput.value)
    currentInput.value = ''
    nextTick(() => scrollToBottom())
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (historyIndex.value > 0) {
      historyIndex.value--
      currentInput.value = commandHistory.value[historyIndex.value]
    }
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    if (historyIndex.value < commandHistory.value.length - 1) {
      historyIndex.value++
      currentInput.value = commandHistory.value[historyIndex.value]
    } else {
      historyIndex.value = commandHistory.value.length
      currentInput.value = ''
    }
  } else if (event.key === 'Tab') {
    event.preventDefault()
    const input = currentInput.value.toLowerCase()
    const matches = commandList.filter(cmd => cmd.startsWith(input))
    if (matches.length === 1) {
      currentInput.value = matches[0]
    }
  }
}

function focusInput(): void {
  inputRef.value?.focus()
}

function handleContentClick(event: MouseEvent): void {
  const target = event.target as HTMLElement
  if (target.classList.contains('clickable')) {
    const text = target.getAttribute('data-copy')
    if (text) {
      navigator.clipboard.writeText(text)
      copied.value = true
      copiedField.value = text.includes('@') ? 'email' : 'phone'
      setTimeout(() => {
        copied.value = false
        copiedField.value = null
      }, 2000)
    }
  }
}

function scrollToBottom(): void {
  window.scrollTo(0, document.body.scrollHeight)
}

onMounted(() => {
  focusInput()
  history.value.push({
    type: 'output',
    content: `
      <div class="ascii-art">
<pre>
<span class="accent">██████╗  ██████╗</span>
<span class="accent">██╔══██╗██╔════╝</span>
<span class="accent">██║  ██║██║     </span>
<span class="accent">██║  ██║██║     </span>
<span class="accent">██████╔╝╚██████╗</span>
<span class="accent">╚═════╝  ╚═════╝</span>
</pre>
      </div>
      <p>Welcome to Derek's Terminal!</p>
      <p></p>
      <p>Type 'help' to see available commands.</p>
      <p></p>
      <p>Or explore the <a href="/" class="link">main site</a>.</p>
    `
  })
})
</script>

<style scoped>
.terminal-wrapper {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-base);
  padding: 0.5rem;
}

.terminal-border {
  width: 100%;
  height: 100%;
  max-width: 100%;
  border: 2px solid var(--accent-yellow);
  border-radius: 4px;
  background-color: var(--bg-base);
  overflow: hidden;
}

.terminal-content {
  height: 100%;
  padding: 0.5rem 1rem;
  overflow-y: auto;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  cursor: text;
}

.terminal-line {
  margin-bottom: 0.25rem;
}

.prompt {
  color: var(--accent-yellow);
  white-space: nowrap;
}

.username {
  color: var(--accent-mauve);
}

.separator {
  color: var(--text-muted);
}

.hostname {
  color: var(--accent-green);
}

.path {
  color: var(--accent-blue);
}

.prompt-char {
  color: var(--accent-yellow);
}

.input-text {
  color: var(--text-primary);
  margin-left: 0.5rem;
}

.input-text.valid-cmd {
  color: var(--accent-green);
}

.input-text.invalid-cmd {
  color: var(--accent-red);
}

.input-line {
  display: flex;
  align-items: center;
}

.terminal-input {
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: inherit;
  flex: 1;
  outline: none;
  caret-color: var(--accent-yellow);
  margin-left: 0.5rem;
}

.terminal-input.valid-cmd {
  color: var(--accent-green);
}

.terminal-input.invalid-cmd {
  color: var(--accent-red);
}

.output-content {
  color: var(--text-secondary);
  margin-left: 0;
}

.output-content p {
  margin: 0.25rem 0;
}

.error-content {
  color: var(--accent-red);
}

.error-content p {
  margin: 0.25rem 0;
}

.help-section,
.about-section,
.socials-section,
.projects-section,
.stack-section,
.contact-section,
.ascii-art {
  margin: 0.5rem 0;
}

.accent {
  color: var(--accent-mauve);
}

.mt-1 {
  margin-top: 0.25rem;
}

.indent {
  margin-left: 1.5rem;
  color: var(--text-muted);
}

.link {
  color: var(--accent-cyan);
  text-decoration: none;
  text-decoration-style: dotted;
}

.link:hover {
  color: var(--accent-mauve);
  text-decoration-style: solid;
}

.tech {
  color: var(--accent-yellow);
  font-size: 0.8rem;
}

:deep(.clickable),
:deep(.link) {
  color: var(--accent-cyan);
  cursor: pointer;
  text-decoration: underline;
  text-decoration-style: dotted;
}

:deep(.clickable:hover),
:deep(.link:hover) {
  color: var(--accent-mauve);
  text-decoration-style: solid;
}

.ascii-art pre {
  font-family: var(--font-mono);
  margin: 0;
  line-height: 1.1;
  font-size: 0.75rem;
}
</style>
