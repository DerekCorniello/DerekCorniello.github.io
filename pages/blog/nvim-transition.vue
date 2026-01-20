<template>
  <article class="blog-post">
    <header class="post-header">
      <h1>My Transition from VSCode to NeoVim</h1>
      <p class="meta">Published on Jul 21, 2024</p>
    </header>

    <div class="post-content">
      <p>
        My experience with transitioning from VSCode to NeoVim. This includes setting up NeoVim,
        lazy.nvim, Mason, and other plugins that help my development cycle. Thank you to
        <a href="https://www.youtube.com/c/theprimeagen">ThePrimeagen</a> for providing guides to
        help me through this!
      </p>

      <p>
        It was a normal day at my office job, code upon code, bugfix upon bugfix. I finally had some
        time to sit and relax, as I was going to watch a demo from one of my coworkers. He was
        demonstrating some tooling that he had created for our internal systems. As I hopped into our
        virtual teams meeting and talked with some coworkers, awaiting the arrival of the demo, I was
        met with the Vim editor.
      </p>

      <h2>My introduction to Vim</h2>

      <p>
        In a course a few years ago in college, I was sitting in lecture and watching a live code
        demonstration, I was intrigued on how quickly the professor was able to move around the
        editor. He was using VSCode though, so I was confused to say the least.
      </p>

      <p>
        I was astonished watching him program, and one day I realized that he was not an incredibly
        fast typer. Through the little I actually watched him type, and watching the screen change
        inside the editor, I was astonished as to how he was getting it done so quickly.
      </p>

      <h2>Going Through the (Vim) Motions</h2>

      <p>
        By now I have heard about "learning the motions is 90% of the battle". So I did what had to be
        done then, I installed the
        <a href="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim">Vim plugin for VSCode</a>.
        Striving for that quickness and efficiency I saw with my professor before, I set out to
        learn Vim motions.
      </p>

      <p>
        The key concept that really helped me in learning the motions is the structure. If you have
        ever watched a video instructing you how to use Vim, you should be familiar with the
        [command]-[count]-[object] structure.
      </p>

      <h2>NeoVim, the Editor to End All Editors</h2>

      <p>
        After researching a few ways to make my wants and needs met in terms of editors, I found two
        content creators in <a href="https://www.youtube.com/@teej_dv">teej_dv</a> and
        <a href="https://www.youtube.com/c/theprimeagen">ThePrimeagen</a>. These two guys fueled my
        want and desire to not only use NeoVim, but become a better, more efficient programmer.
      </p>

      <p>
        Fast forward to today. I use NeoVim daily. For work, school, and personal use. I tell my
        friends that "I use NeoVim by the way", and have no regrets. I make macros that make me
        faster. More efficient. And best of all, it is <i>fun</i>.
      </p>

      <p>
        Here is <a href="https://github.com/DerekCorniello/NeoVim-Setup">my setup</a> as of right now.
      </p>
    </div>

    <footer class="post-footer">
      <NuxtLink to="/blog" class="btn">
        ← Back to Blog
      </NuxtLink>
    </footer>
  </article>
</template>

<script setup lang="ts">
useHead({
  title: 'My Transition from VSCode to NeoVim',
  meta: [
    { name: 'description', content: 'My experience transitioning from VSCode to NeoVim, including setting up lazy.nvim, Mason, and other plugins.' },
    { property: 'og:title', content: 'My Transition from VSCode to NeoVim' },
    { property: 'og:description', content: 'My experience transitioning from VSCode to NeoVim, including setting up lazy.nvim, Mason, and plugins that improved my workflow.' },
    { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
    { property: 'og:url', content: 'https://derekcorn.dev/blog/nvim-transition' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:title', content: 'My Transition from VSCode to NeoVim' },
    { name: 'twitter:description', content: 'How I transitioned from VSCode to NeoVim.' },
    { name: 'twitter:image', content: 'https://derekcorn.dev/preview.png' },
  ],
})
</script>

<style scoped>
.blog-post {
  max-width: 700px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: 2rem;
}

.post-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.meta {
  color: var(--text-muted);
}

.post-content {
  line-height: 1.8;
}

.post-content h2 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
}

.post-content p {
  margin-bottom: 1rem;
}

.post-content ul {
  margin: 1rem 0 1rem 1.5rem;
}

.post-content li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.post-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
</style>
