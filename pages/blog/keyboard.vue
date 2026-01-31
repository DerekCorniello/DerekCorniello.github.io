<template>
  <article class="blog-post">
    <header class="post-header">
      <h1>I Built a Custom Keyboard!</h1>
      <p class="meta">Published on Aug 22, 2025</p>
    </header>

    <div class="image-container">
      <img src="/kb-over.jpeg" alt="An over the shoulder shot of me testing the keyboard." />
      <p class="image-caption">
        <a href="https://www.monkeytype.com">Monkeytype</a> testing the keyboard!
      </p>
    </div>

    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>

    <div class="post-content">
      <p>
        Ever since I started watching
        <a href="https://www.youtube.com/c/theprimeagen">ThePrimeagen</a> and his
        <a href="https://kinesis-ergo.com/">Kinesis keyboard</a>, I have wanted to try one out for a
        very long time. Initially, I couldn't justify spending so much money, so I decided to take
        matters into my own hands. Thus, a new project was born.
      </p>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <h2>Bill of Materials (BOM)</h2>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

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

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <h2>Project Goals</h2>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <p>
        My main goals were simple: learn about keyboard design, implement USB-C, have fun, and complete
        the project efficiently. Functionality, durability, and good ergonomics were non-negotiable.
      </p>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <h2>Keyboard Matrix & Ghosting Prevention</h2>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <p>
        A keyboard is basically a grid of wires (rows × columns), a bunch of switches sitting at the
        intersections, and a tiny brain (microcontroller) that scans that grid super fast to figure out
        which switch closed. No magic, just clever wiring and some firmware doing laps. This matrix
        adaptation of a keyboard is what allows smaller hardware to make quick scans for key presses.
        Instead of one pin per key, keys share wires in a matrix. Each switch connects a <em>row</em> to
        a <em>column</em>. Press a key → that row and column are now electrically connected. What
        happens is...
      </p>

      <ul>
        <li>The microcontroller sets one row "active" at a time (drives it high/low).</li>
        <li>It then reads all the columns to see which ones are "lit up".</li>
        <li>It moves to the next row and repeats. This happens thousands of times per second.</li>
      </ul>

      <p>
        From that row+column pair, it knows exactly which key you hit. Fast enough that it feels
        instant. You may be asking about multiple keys being pressed at once right about now. Let's
        take, for example, a 2x2 keyboard. If I were to hold down the keys in position (1,1), (1,2) and
        (2,1), the microcontroller will notice that rows 1 and 2 are active, and columns 1 and 2 are
        also active. Therefore, the key in position (2,2) would appeae as pressed, and is therefore
        "ghosted". Without diodes, current can sneak through multiple pressed switches and make it
        <em>look</em> like an extra key (the "fourth corner" of a rectangle) is pressed. A diode on each
        switch forces current to flow in only one direction, so signals don't backfeed through other
        keys, which fixes the ghosting problem! To deal with all of these columns and rows, we will
        deploy a firmware (QMK in my case) to the microcontroller to deal with taking the data from
        current to serial data. It does this with the following features and techniques:
      </p>

      <ul>
        <li>
          <strong>Matrix scanning:</strong> Runs that row→column loop nonstop to detect closures.
        </li>
        <li>
          <strong>Debouncing:</strong> Mechanical switches "chatter" for a few ms; firmware smooths
          that into a single press.
        </li>
        <li>
          <strong>Keymap & layers:</strong> Maps row/col positions to actual keycodes, plus your
          layers/macros.
        </li>
        <li>
          <strong>Split comms (for two halves):</strong> One side is master. It scans its half,
          receives the other half's scan data over TRRS/serial, merges both, then sends a single USB
          HID report to the computer.
        </li>
      </ul>

      <p>
        So the flow ends up looking loke this:
        <code
          >Switch press → row/column connect → diode keeps it one-way → MCU sees it during scan →
          firmware debounces & maps → USB HID event → OS gets a keypress</code
        >
      </p>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <h2>Build Process</h2>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <p>
        The build process followed these main steps:
      </p>

      <ol>
        <li>
          <strong>Planning the layout:</strong> Decided on a 5-row, 6-column layout with a 6-key thumb
          cluster and mapped out the key positions.
        </li>
        <li>
          <strong>Handwiring the keyboard matrix:</strong> Wired all switches to rows and columns,
          adding diodes to prevent ghosting and ensure accurate key detection.
        </li>
        <li>
          <strong>Connecting the microcontrollers:</strong> Soldered the Pro Micro boards and
          connected them using a TRRS cable for split keyboard communication.
        </li>
        <li>
          <strong>Case assembly:</strong> Placed all components into the 3D printed case and secured
          with M4 heat inserts and screws.
        </li>
        <li>
          <strong>Key installation:</strong> Inserted the switches and keycaps, double-checking each
          row and column for proper connectivity.
        </li>
        <li>
          <strong>Firmware & Testing:</strong> Uploaded the QMK firmware, tested each key, and ensured
          ghosting was prevented and everything worked correctly.
        </li>
      </ol>
    </div>

    <div class="image-container">
      <img src="/kb-layout.jpeg" alt="Completed keyboard layout" />
      <p class="image-caption">The layout of the keyboard.</p>
    </div>

    <div class="image-container">
      <img src="/kb-topdown.jpeg" alt="Completed keyboard" />
      <p class="image-caption">Top-down view of the completed keyboard</p>
    </div>

    <div class="image-container">
      <img src="/kb-pov.jpeg" alt="Completed keyboard POV" />
      <p class="image-caption">First-person view of the keyboard in use</p>
    </div>

    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>

    <div class="post-content">
      <h2>Testing and Final Thoughts</h2>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <p>
        After assembly, I tested the keyboard thoroughly. Getting the QMK software to correctly
        configure was a little bit of a hassle, but once I found the correct sections of the
        documentation, it was a breeze thereafter. It met all of my initial goals; typing felt
        comfortable, the USB-C connection worked flawlessly, and the layout was ergonomic.
      </p>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <h2>Fun, Optional Upgrades</h2>

      <div class="divider-container">
        <div class="divider-line"></div>
        <div class="divider-glow"></div>
      </div>

      <p>
        I also made some small improvements to the build itself by adding some laptop rubber feet to it
        in order to stop it from sliding:
      </p>
    </div>

    <div class="image-container">
      <img
        src="/kb-bottom.jpeg"
        alt="The bottom of one half of the keyboard showing the rubber feet"
      />
      <p class="image-caption">The bottom of one half of the keyboard showing the rubber feet</p>
    </div>

    <div class="post-content">
      <p>Plus, I got an EVA hard case with foam inserts for travel, since I do that a lot:</p>
    </div>

    <div class="image-container">
      <img src="/kb-in-case.jpeg" alt="The keyboard displayed in a case" />
      <p class="image-caption">Foam fitted EVA case for safe travel</p>
    </div>

    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>

    <div class="post-content">
      <p>
        Overall, this was a very interesting, fun, and overall useful project that I believe will help
        me for years to come!
      </p>
    </div>

    <footer class="post-footer">
      <NuxtLink to="/blog" class="btn">
        Back to Blog
      </NuxtLink>
    </footer>
  </article>
</template>

<script setup lang="ts">
useHead({
  title: 'I Built a Custom Keyboard!',
  meta: [
    { name: 'description', content: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, matrix scanning, ghosting prevention, build process, and final upgrades.' },
    { property: 'og:title', content: 'I Built a Custom Keyboard!' },
    { property: 'og:description', content: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, matrix scanning, ghosting prevention, build process, and final upgrades.' },
    { property: 'og:image', content: 'https://derekcorn.dev/preview.png' },
    { property: 'og:url', content: 'https://derekcorn.dev/blog/keyboard' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:title', content: 'I Built a Custom Keyboard!' },
    { name: 'twitter:description', content: 'Building a custom Dactyl Manuform keyboard from scratch - the BOM, matrix scanning, ghosting prevention, build process, and final upgrades.' },
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

.image-container {
  margin: 1.5rem 0;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
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

.divider-container {
  position: relative;
  margin: 2rem 0;
  height: 2px;
}

.divider-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.divider-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 4px;
  background: var(--primary);
  filter: blur(8px);
  opacity: 0.5;
}
</style>
