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
    const minSize = 0.5;
    const maxSize = 2;
    const minZ = -200;
    const maxZ = -100;

    const starCount = 7000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    // generate all of the stars with random positions
    for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = Math.random() * (maxZ - minZ) + minZ;

        sizes[i] = Math.random() * (maxSize - minSize) + minSize;
    }
    // DEBUG comment out to get one of the largest
    // and one of the smallest stars
    /*
    positions[0] = 0;
    positions[1] = 0;
    positions[2] = minZ;
    sizes[0] = maxSize;

    positions[1 * 3] = 0;
    positions[1 * 3 + 1] = 0;
    positions[1 * 3 + 2] = maxZ;
    sizes[1] = minSize;
    */

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        color: 0x999999,
    });

    // more consts...
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
            starPositions[i] += speedX;
            starPositions[i + 1] += speedY;
            starPositions[i + 2] += speedZ;

            if (starPositions[i] > 1000) starPositions[i] = -1000;
            if (starPositions[i + 1] > 1000) starPositions[i + 1] = -1000;
            if (starPositions[i + 2] > 1000) starPositions[i + 2] = -1000;
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
