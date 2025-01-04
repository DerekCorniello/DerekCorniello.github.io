import * as THREE from 'three';
export default function initStarfield(canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Constants for star generation
    const starCount = 500;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    // Generate random positions in 3D space
    for (let i = 0; i < starCount; i++) {
        const vector = new THREE.Vector3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
        );
        
        vector.normalize();
        const distance = 100 + Math.random() * 200;
        vector.multiplyScalar(distance);

        positions[i * 3] = vector.x;
        positions[i * 3 + 1] = vector.y;
        positions[i * 3 + 2] = vector.z;
        sizes[i] = Math.random() * 200 + 100;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        color: 0xBBBBBB,
        size: 1,
        sizeAttenuation: true,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Create a rotation group
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);
    cameraGroup.add(camera);
    
    // Set initial camera position
    camera.position.set(0, 0, 10);

    const rotationSpeed = {
        x: 0.0002,
        y: 0.0004,
    };

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        
        // Rotate the camera group instead of updating position
        cameraGroup.rotation.x += rotationSpeed.x;
        cameraGroup.rotation.y += rotationSpeed.y;
        
        renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    };

    // Adjust on load and resize, also listen for orientation changes
    const adjustCanvasSize = () => {
        onResize(); // Apply the resize logic to account for height changes
    };

    window.addEventListener('resize', adjustCanvasSize);
    window.addEventListener('orientationchange', adjustCanvasSize); // Handles device rotation

    // Ensure resize happens after a small delay to account for dynamic UI changes
    setTimeout(adjustCanvasSize, 500); // Small timeout to adjust after any initial layout shifts

    // Cleanup function
    return () => {
        window.removeEventListener('resize', adjustCanvasSize);
        window.removeEventListener('orientationchange', adjustCanvasSize);
        geometry.dispose();
        material.dispose();
    };
}
