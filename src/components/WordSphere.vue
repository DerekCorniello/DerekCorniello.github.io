<template>
  <div class="word-sphere-container" ref="container">
    <canvas ref="canvas" :style="{ position: 'absolute', top: 0, left: 0 }"></canvas>
  </div>
</template>

<script>
export default {
  name: 'WordSphere',
  props: {
    words: {
      type: Array,
      default: () => [
        'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Neovim', 'ArchLinux', 'C/C++', 'Unity',
        'TypeScript', 'Vite', 'Git', 'REST', 'Docker', 'AWS', 'Python', 'Java', 'C#',
        'Go', 'Rust', 'SQLite', 'PostgreSQL', 'Apache', 'Flask', 'Django'
      ],
    },
    fontSize: {
      type: Number,
      default: 1.2,
    },
    rotationSpeed: {
      type: Number,
      default: 0.003,
    },
    fontFamily: {
      type: String,
      default: 'Inconsolata, monospace',
    },
    fontWeight: {
      type: String,
      default: 'normal',
    },
    textColor: {
      type: String,
      default: '#ff4081',
    },
  },
  data() {
    return {
      points: [],
      angleX: 0,
      angleY: 0,
      rafId: null,
      ctx: null,
      width: 0,
      height: 0,
      radius: 100,
    };
  },
  methods: {
    getRootFontSize() {
      return parseFloat(getComputedStyle(document.documentElement).fontSize);
    },
    remToPixels(rem) {
      return rem * this.getRootFontSize();
    },
    initCanvas() {
      const canvas = this.$refs.canvas;
      const container = this.$refs.container;
      this.ctx = canvas.getContext('2d');

      this.width = container.clientWidth;
      this.height = container.clientHeight;
      canvas.width = this.width;
      canvas.height = this.height;

      // Set radius to match the smaller dimension
      this.radius = Math.min((Math.min(this.width, this.height) / 2 - 10), 200); // Subtract 10 for padding, limit to 200

      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';

      this.generatePoints(); // Regenerate points with the updated radius
    },
    handleResize() {
      this.initCanvas();
    },
    generatePoints() {
      this.points = [];
      const phi = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < this.words.length; i++) {
        const y = 1 - (i / (this.words.length - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = phi * i;

        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;

        this.points.push({
          x: x * this.radius,
          y: y * this.radius,
          z: z * this.radius,
          word: this.words[i],
        });
      }
    },
    animate() {
      this.angleX += this.rotationSpeed;
      this.angleY += this.rotationSpeed;

      this.ctx.clearRect(0, 0, this.width, this.height);

      const sortedPoints = [...this.points].sort((a, b) => {
        const aZ = this.rotateZ(a);
        const bZ = this.rotateZ(b);
        return bZ - aZ;
      });

      sortedPoints.forEach((point) => {
        const rotated = this.rotatePoint(point);
        const scale = (rotated.z + this.radius) / (2 * this.radius);
        const fontSizeInPixels = this.remToPixels(this.fontSize) * scale;

        this.ctx.font = `${this.fontWeight} ${fontSizeInPixels}px ${this.fontFamily}`;

        const color = this.textColor.startsWith('#')
          ? this.hexToRGBA(this.textColor, scale)
          : this.textColor.replace(')', `, ${scale})`);

        this.ctx.fillStyle = color;

        const screenX = this.width / 2 + rotated.x;
        const screenY = this.height / 2 + rotated.y;

        this.ctx.fillText(point.word, screenX, screenY);
      });

      this.rafId = requestAnimationFrame(this.animate);
    },
    hexToRGBA(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },
    rotatePoint(point) {
      const cosX = Math.cos(this.angleX);
      const sinX = Math.sin(this.angleX);
      const cosY = Math.cos(this.angleY);
      const sinY = Math.sin(this.angleY);

      const y1 = point.y * cosX - point.z * sinX;
      const z1 = point.y * sinX + point.z * cosX;

      const x2 = point.x * cosY - z1 * sinY;
      const z2 = point.x * sinY + z1 * cosY;

      return {
        x: x2,
        y: y1,
        z: z2,
      };
    },
    rotateZ(point) {
      const rotated = this.rotatePoint(point);
      return rotated.z;
    },
  },
  mounted() {
    this.initCanvas();
    this.animate();

    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  },
};
</script>

<style scoped>
.word-sphere-container {
  position: relative;
  width: 100%;
}
</style>
