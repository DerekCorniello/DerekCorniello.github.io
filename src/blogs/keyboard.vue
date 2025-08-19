<template>
  <BaseBlog title="I Built a Custom Keyboard!">
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
    Ever since I started watching
    <a href="https://www.youtube.com/c/theprimeagen">ThePrimeagen</a> and his
    <a href="https://kinesis-ergo.com/">Kinesis keyboard</a>, I have wanted to try one out for a
    very long time. Initially, I couldn’t justify spending so much money, so I decided to take
    matters into my own hands. Thus, a new project was born.

    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>

    <div style="text-align: center; font-size: 1.5rem">
      <strong><u>Bill of Materials (BOM)</u></strong>
    </div>
    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>
    I chose a Dactyl Manuform layout, but these materials are standard for DIY keyboards:
    <ul>
      <li>2 Pro Micro Boards</li>
      <li>Diodes (1N4148)</li>
      <li>Key Switches and Caps</li>
      <li>TRRS Cable and Jacks</li>
      <li>Solid Core Wire</li>
      <li>M4 Heat Inserts and Screws</li>
      <li>3D Printed Case</li>
    </ul>
    I also used a soldering iron, lead-free solder, wire strippers, and a multimeter for testing
    solder points.
    <br /><br />
    <div style="text-align: center; font-size: 1.5rem">
      <strong><u>Project Goals</u></strong>
    </div>
    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>
    My main goals were simple: learn about keyboard design, implement USB-C, have fun, and complete
    the project efficiently. Functionality, durability, and good ergonomics were non-negotiable.

    <br /><br />
    <div style="text-align: center; font-size: 1.5rem">
      <strong><u>Keyboard Matrix & Ghosting Prevention</u></strong>
    </div>
    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>

    A keyboard is basically a grid of wires (rows × columns), a bunch of switches sitting at the
    intersections, and a tiny brain (microcontroller) that scans that grid super fast to figure out
    which switch closed. No magic, just clever wiring and some firmware doing laps. This matrix
    adaptation of a keyboard is what allows smaller hardware to make quick scans for key presses.
    Instead of one pin per key, keys share wires in a matrix. Each switch connects a <em>row</em> to
    a <em>column</em>. Press a key → that row and column are now electrically connected. What
    happens is...
    <ul>
      <li>The microcontroller sets one row “active” at a time (drives it high/low).</li>
      <li>It then reads all the columns to see which ones are “lit up”.</li>
      <li>It moves to the next row and repeats. This happens thousands of times per second.</li>
    </ul>
    From that row+column pair, it knows exactly which key you hit. Fast enough that it feels
    instant. You may be asking about multiple keys being pressed at once right about now. Let's
    take, for example, a 2x2 keyboard. If I were to hold down the keys in position (1,1), (1,2) and
    (2,1), the microcontroller will notice that rows 1 and 2 are active, and columns 1 and 2 are
    also active. Therefore, the key in position (2,2) would appeae as pressed, and is therefore
    "ghosted". Without diodes, current can sneak through multiple pressed switches and make it
    <em>look</em> like an extra key (the “fourth corner” of a rectangle) is pressed. A diode on each
    switch forces current to flow in only one direction, so signals don’t backfeed through other
    keys, which fixes the ghosting problem! To deal with all of these columns and rows, we will
    deploy a firmware (QMK in my case) to the microcontroller to deal with taking the data from
    current to serial data. It does this with the following features and techniques:
    <ul>
      <li>
        <strong>Matrix scanning:</strong> Runs that row→column loop nonstop to detect closures.
      </li>
      <li>
        <strong>Debouncing:</strong> Mechanical switches “chatter” for a few ms; firmware smooths
        that into a single press.
      </li>
      <li>
        <strong>Keymap & layers:</strong> Maps row/col positions to actual keycodes, plus your
        layers/macros.
      </li>
      <li>
        <strong>Split comms (for two halves):</strong> One side is master. It scans its half,
        receives the other half’s scan data over TRRS/serial, merges both, then sends a single USB
        HID report to the computer.
      </li>
    </ul>

    So the flow ends up looking loke this:
    <code
      >Switch press → row/column connect → diode keeps it one-way → MCU sees it during scan →
      firmware debounces & maps → USB HID event → OS gets a keypress</code
    >
    <br /><br />
    <div style="text-align: center; font-size: 1.5rem">
      <strong><u>Build Process</u></strong>
    </div>
    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>

    The build process followed these main steps:
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

    <div class="image-container">
      <img
        src="/kb-layout.jpeg"
        alt="Completed keyboard layout"
        style="filter: invert(1); border: 4px solid #ff0033"
      />
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

    <br /><br />
    <div style="text-align: center; font-size: 1.5rem">
      <strong><u>Testing and Final Thoughts</u></strong>
    </div>
    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>
    After assembly, I tested the keyboard thoroughly. Getting the QMK software to correctly
    configure was a little bit of a hassle, but once I found the correct sections of the
    documentation, it was a breeze thereafter. It met all of my initial goals; typing felt
    comfortable, the USB-C connection worked flawlessly, and the layout was ergonomic.
    <br /><br />
    <div style="text-align: center; font-size: 1.5rem">
      <strong><u>Fun, Optional Upgrades</u></strong>
    </div>
    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>
    I also made some small improvements to the build itself by adding some laptop rubber feet to it
    in order to stop it from sliding:

    <div class="image-container">
      <img
        src="/kb-bottom.jpeg"
        alt="The bottom of one half of the keyboard showing the rubber feet"
      />
      <p class="image-caption">The bottom of one half of the keyboard showing the rubber feet</p>
    </div>

    <p>Plus, I got an EVA hard case with foam inserts for travel, since I do that a lot:</p>

    <div class="image-container">
      <img src="/kb-in-case.jpeg" alt="The keyboard displayed in a case" />
      <p class="image-caption">Foam fitted EVA case for safe travel</p>
    </div>
    <br /><br />
    <div class="divider-container">
      <div class="divider-line"></div>
      <div class="divider-glow"></div>
    </div>
    <br /><br />
    Overall, this was a very interesting, fun, and overall useful project that I believe will help
    me for years to come!
    <router-link
      style="
        text-align: center;
        background-color: #ff66b2;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
      "
      class="r-link"
      to="/blog"
    >
      Back to Blogs
    </router-link>
  </BaseBlog>
</template>

<script>
import BaseBlog from '@/components/BaseBlog.vue'

export default {
  name: 'blog1',
  components: {
    BaseBlog,
  },
}
</script>

<style scoped>
.divider-container {
  position: relative;
  height: 2px;
  margin: 1rem 0 2rem;
}

.divider-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.8), transparent);
  width: 100%;
  position: absolute;
}

.divider-glow {
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.2), transparent);
  filter: blur(2px);
  width: 100%;
  position: absolute;
}
</style>
