import * as THREE from 'three';

export default function initStarfield(canvas) {
    // setup the renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // consts, for setup, these are baseline vals
    const minSize = 500;
    const maxSize = 1500;
    const minZ = -120;
    const maxZ = -50;

    const starCount = 7000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    // generate all of the stars with random positions
    for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = Math.random() * (maxZ - minZ) + minZ;

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
    const speedX = 0.05;
    const speedY = 0.03;
    const speedZ = 0.01;

    // animation loop
    const animate = () => {
        requestAnimationFrame(animate);

        for (let i = 0; i < starPositions.length; i += 3) {
            let x = starPositions[i];
            let y = starPositions[i + 1];
            let z = starPositions[i + 2];

            x += speedX;
            y += speedY;
            z += speedZ;

            // wrap stars around the screen when they move out of bounds
            if (x > 1000) x = -1000;
            if (x < -1000) x = 1000;
            if (y > 1000) y = -1000;
            if (y < -1000) y = 1000;
            if (z > 1000) z = -1000;
            if (z < -1000) z = 1000;

            // Update the star positions
            starPositions[i] = x;
            starPositions[i + 1] = y;
            starPositions[i + 2] = z;
        }

        geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
    };

    animate();

    // dynamic resizing
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
}
