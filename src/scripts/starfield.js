import * as THREE from 'three';

export default function initStarfield(canvas) {
    // setup the renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Constants for setup
    const minSize = 500;
    const maxSize = 1000;
    const minZ = -120;
    const maxZ = -50;
    const boundary = 1000; // Boundaries for wrapping stars

    const starCount = 7000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    // Generate initial stars with random positions and sizes
    for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * boundary * 2; // X
        positions[i * 3 + 1] = (Math.random() - 0.5) * boundary * 2; // Y
        positions[i * 3 + 2] = Math.random() * (maxZ - minZ) + minZ; // Z

        // Ensure sizes are between minSize and maxSize
        sizes[i] = Math.random() * (maxSize - minSize) + minSize;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        color: 0x999999,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const starPositions = geometry.attributes.position.array;
    const speedX = 0.08;
    const speedY = 0.05;
    const speedZ = 0.03;

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);

        for (let i = 0; i < starPositions.length; i += 3) {
            starPositions[i] += speedX; // Move X
            starPositions[i + 1] += speedY; // Move Y
            starPositions[i + 2] += speedZ; // Move Z

            // Reintroduce stars when they go out of bounds
            if (starPositions[i] > boundary || starPositions[i] < -boundary) {
                starPositions[i] = (Math.random() - 0.5) * boundary * 2;
                starPositions[i + 1] = (Math.random() - 0.5) * boundary * 2;
                starPositions[i + 2] = Math.random() * (maxZ - minZ) + minZ;
            }
            if (starPositions[i + 1] > boundary || starPositions[i + 1] < -boundary) {
                starPositions[i + 1] = (Math.random() - 0.5) * boundary * 2;
                starPositions[i] = (Math.random() - 0.5) * boundary * 2;
                starPositions[i + 2] = Math.random() * (maxZ - minZ) + minZ;
            }
            if (starPositions[i + 2] > boundary || starPositions[i + 2] < -boundary) {
                starPositions[i + 2] = Math.random() * (maxZ - minZ) + minZ;
            }
        }

        geometry.attributes.position.needsUpdate = true; // Update positions
        renderer.render(scene, camera);
    };

    animate();

    // Handle dynamic resizing
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
}
