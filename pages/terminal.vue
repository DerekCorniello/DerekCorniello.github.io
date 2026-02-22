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
import { useProjects } from '~/composables/useProjects'
import { usePosts } from '~/composables/usePosts'
import { useSiteData } from '~/composables/useSiteData'

definePageMeta({
  layout: 'terminal',
})

interface HistoryLine {
  type: 'input' | 'output' | 'error'
  content: string
  valid?: boolean
}

const { getAllProjects } = useProjects()
const { getRecentPosts } = usePosts()
const { socialLinks, stackInfo, aboutInfo } = useSiteData()

const history = ref<HistoryLine[]>([])
const currentInput = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const commandHistory = ref<string[]>([])
const historyIndex = ref(-1)
const copied = ref(false)
const copiedField = ref<string | null>(null)

const projects = getAllProjects()

const commandList = ['help', 'about', 'socials', 'projects', 'posts', 'stack', 'contact', 'whoami', 'date', 'clear', 'echo', 'home']
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

const commands: Record<string, (args: string[]) => Promise<{ type: 'output' | 'error'; content: string }> | { type: 'output' | 'error'; content: string }> = {
  help: () => ({
    type: 'output',
    content: `
      <div class="help-section">
        <p>Here are some commands to try:</p>
        <p>about</p>
        <p>socials</p>
        <p>projects</p>
        <p>posts</p>
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
        <p class="accent">Hi, I'm ${aboutInfo.name}!</p>
        <p class="mt-1">${aboutInfo.role} at ${aboutInfo.company}</p>
        <p class="mt-1">Based in ${aboutInfo.location}</p>
        <p class="mt-1">I build with Go, Rust, Python and more.</p>
        <p class="mt-1">${aboutInfo.currentFocus}</p>
        <p class="mt-1">Type 'socials' to find me elsewhere.</p>
      </div>
    `
  }),

  socials: () => ({
    type: 'output',
    content: `
      <div class="socials-section">
        ${socialLinks.map(s => `<p><span class="accent">${s.name}:</span> ${s.url}</p>`).join('')}
      </div>
    `
  }),

  projects: () => ({
    type: 'output',
    content: `
      <div class="projects-section">
        ${projects.map(p => {
          const url = p.links?.[0]?.url || p.url || '#'
          return `
            <p class="mt-1"><span class="accent">${p.title}</span></p>
            <p class="indent">${p.description}</p>
            <p class="indent tech">${p.tech.join(' ')} <a href="${url}" target="_blank" class="link">[link]</a></p>
          `
        }).join('\n---\n')}
      </div>
    `
  }),

  posts: async () => {
    const recentPosts = await getRecentPosts(4)
    return {
      type: 'output',
      content: `
        <div class="posts-section">
          <p class="accent">Recent Posts:</p>
          ${recentPosts.map(post => {
            const link = post.type === 'youtube' ? post.url : `/posts/${post.slug}`
            const icon = post.type === 'youtube' ? '▶' : '📝'
            return `
              <p class="mt-1"><span class="post-icon">${icon}</span> <span class="accent">${post.title}</span></p>
              <p class="indent">${post.date}</p>
              <p class="indent post-excerpt">${post.excerpt.slice(0, 80)}${post.excerpt.length > 80 ? '...' : ''}</p>
              <p class="indent"><a href="${link}" target="${post.type === 'youtube' ? '_blank' : ''}" class="link">${post.type === 'youtube' ? 'Watch on YouTube' : 'Read more'}</a></p>
            `
          }).join('\n')}
        </div>
      `
    }
  },

  stack: () => ({
    type: 'output',
    content: `
      <div class="stack-section">
        <p class="accent">Languages:</p>
        <p>${stackInfo.languages.join(', ')}</p>
        <p class="mt-1 accent">Tools:</p>
        <p>${stackInfo.tools.join(', ')}</p>
        <p class="mt-1 accent">Frameworks:</p>
        <p>${stackInfo.frameworks.join(', ')}</p>
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

async function executeCommand(input: string): Promise<void> {
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
      const result = await Promise.resolve(commands[cmd](args))
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
  font-family: 'Space Grotesk', sans-serif;
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
  font-family: 'Space Grotesk', sans-serif;
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
.posts-section,
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

.post-icon {
  color: var(--accent-red);
}

.post-excerpt {
  font-size: 0.85rem;
  color: var(--text-muted);
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
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  line-height: 1.1;
  font-size: 0.75rem;
}
</style>
