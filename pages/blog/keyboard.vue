<template>
  <article class="blog-post">
    <header class="post-header">
      <h1>I Built a Custom Keyboard!</h1>
      <p class="meta">Published on Aug 22, 2025</p>
    </header>

    <div class="post-images">
      <LoadingImage src="/kb-over.jpeg" alt="Testing the keyboard" aspect-ratio="3/4" />
      <p class="image-caption">Monkeytype testing the keyboard!</p>
    </div>

    <div class="post-content">
      <p>
        Ever since I started watching <a href="https://www.youtube.com/c/theprimeagen">ThePrimeagen</a>
        and his <a href="https://kinesis-ergo.com/">Kinesis keyboard</a>, I have wanted to try one out
        for a very long time. Initially, I couldn't justify spending so much money, so I decided to
        take matters into my own hands. Thus, a new project was born.
      </p>

      <h2>Bill of Materials (BOM)</h2>

      <p>
        I chose a Dactyl Manuform layout, but these materials are standard for DIY keyboards:
      </p>

      <ul>
        <li>2 Pro Micro Boards</li>
        <li>Diodes (1N4148)</li>
        <li>Key Switches and Caps</li>
        <li>TRRS Cable and Jacks</li>
        <li>Solid Core Wire</li>
        <li>M4 Heat Inserts and Screws</li>
        <li>3D Printed Case</li>
      </ul>

      <p>
        I also used a soldering iron, lead-free solder, wire strippers, and a multimeter for testing
        solder points.
      </p>

      <h2>Project Goals</h2>

      <p>
        My main goals were simple: learn about keyboard design, implement USB-C, have fun, and complete
        the project efficiently. Functionality, durability, and good ergonomics were non-negotiable.
      </p>

      <h2>Keyboard Matrix & Ghosting Prevention</h2>

      <p>
        A keyboard is basically a grid of wires (rows × columns), a bunch of switches sitting at the
        intersections, and a tiny brain (microcontroller) that scans that grid super fast to figure
        out which switch closed.
      </p>

      <p>
        Without diodes, current can sneak through multiple pressed switches and make it look like an
        extra key is pressed. A diode on each switch forces current to flow in only one direction,
        so signals don't backfeed through other keys, which fixes the ghosting problem!
      </p>

      <h2>Build Process</h2>

      <ol>
        <li>Planning the layout: Decided on a 5-row, 6-column layout with a 6-key thumb cluster</li>
        <li>Handwiring the keyboard matrix: Wired all switches to rows and columns, adding diodes</li>
        <li>Connecting the microcontrollers: Soldered the Pro Micro boards with TRRS cable</li>
        <li>Case assembly: Placed all components into the 3D printed case</li>
        <li>Key installation: Inserted the switches and keycaps</li>
        <li>Firmware & Testing: Uploaded QMK firmware, tested each key</li>
      </ol>

      <div class="post-images">
        <LoadingImage src="/kb-layout.jpeg" alt="Keyboard layout" aspect-ratio="16/9" />
        <p class="image-caption">The layout of the keyboard.</p>
      </div>

      <div class="post-images">
        <LoadingImage src="/kb-topdown.jpeg" alt="Top down view" aspect-ratio="3/2" />
        <p class="image-caption">Top-down view of the completed keyboard</p>
      </div>

      <div class="post-images">
        <LoadingImage src="/kb-pov.jpeg" alt="POV of keyboard" aspect-ratio="3/4" />
        <p class="image-caption">First-person view of the keyboard in use</p>
      </div>

      <h2>Testing and Final Thoughts</h2>

      <p>
        After assembly, I tested the keyboard thoroughly. Getting the QMK software to correctly
        configure was a little bit of a hassle, but once I found the correct sections of the
        documentation, it was a breeze thereafter. It met all of my initial goals; typing felt
        comfortable, the USB-C connection worked flawlessly, and the layout was ergonomic.
      </p>

      <p>
        Overall, this was a very interesting, fun, and overall useful project that I believe will
        help me for years to come!
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
import LoadingImage from '~/components/ui/LoadingImage.vue'

useHead({
  title: 'I Built a Custom Keyboard!',
  meta: [
    { name: 'description', content: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, firmware, handwiring process, and lessons learned.' },
    { property: 'og:title', content: 'I Built a Custom Keyboard!' },
    { property: 'og:description', content: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, firmware, handwiring process, and lessons learned.' },
    { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
    { property: 'og:url', content: 'https://derekcorn.dev/blog/keyboard' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:title', content: 'I Built a Custom Keyboard!' },
    { name: 'twitter:description', content: 'Building a custom Dactyl Manuform keyboard from scratch.' },
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

.post-images {
  margin: 1.5rem 0;
}

.image-caption {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-align: center;
  margin-top: 0.5rem;
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

.post-content ul,
.post-content ol {
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
