/* ==========================================================================
   REDDASH ADMIN TEMPLATE - THREE.JS ANIMATED BACKGROUND
   ========================================================================== */

const ThreeBackground = (() => {

  function init(canvasId = 'threeCanvas') {
    if (typeof THREE === 'undefined') return;

    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create particle system
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      velocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.002
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.06,
      color: 0xff0038,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connect nearby particles with lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff0038,
      transparent: true,
      opacity: 0.08
    });

    let linesMesh = null;

    function updateLines() {
      if (linesMesh) {
        scene.remove(linesMesh);
        linesMesh.geometry.dispose();
      }

      const linePositions = [];
      const pos = geometry.attributes.position.array;
      const maxDist = 2.5;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDist) {
            linePositions.push(
              pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
              pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
            );
          }
        }
      }

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
      linesMesh = new THREE.LineSegments(lineGeo, lineMaterial);
      scene.add(linesMesh);
    }

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 0.5;
    });

    let frameCount = 0;
    let animId;

    function animate() {
      animId = requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        // Bounce within bounds
        if (Math.abs(pos[i * 3]) > 7) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 5) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 4) velocities[i].z *= -1;
      }

      geometry.attributes.position.needsUpdate = true;

      // Gentle camera movement
      camera.position.x += (mouseX - camera.position.x) * 0.02;
      camera.position.y += (mouseY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // Slow rotation
      particles.rotation.y += 0.0005;

      // Update lines every 3 frames for performance
      frameCount++;
      if (frameCount % 3 === 0) updateLines();

      renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    function onResize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', onResize);

    // Cleanup
    function destroy() {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    }

    return { destroy };
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  ThreeBackground.init('threeCanvas');
});
