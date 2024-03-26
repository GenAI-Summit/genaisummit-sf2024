<template>
  <div class="bgstart" ref="container"></div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import * as THREE from "three";
import yuan from "../assets/images/yuan.png";
export default {
  name: "ThreeJsParticlesWaves",

  setup() {
    const container = ref(null);
    let camera, scene, renderer, particles;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let count = 0;
    const SEPARATION = 100,
      AMOUNTX = 50,
      AMOUNTY = 50;

    const init = () => {
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 1000;

      scene = new THREE.Scene();

      particles = new Array();

      const PI2 = Math.PI * 2;
      const material = new THREE.SpriteMaterial({
        color: 0xffffff,
        // 使用圆形纹理代替自定义program绘制
        map: new THREE.TextureLoader().load(yuan),
      });

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          let particle = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scene.add(particle);
          particles[i++] = particle;
        }
      }

      renderer = new THREE.WebGLRenderer({ alpha: true }); // 启用透明背景
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.value.appendChild(renderer.domElement);
      document.addEventListener("mousemove", onDocumentMouseMove, false);
      document.addEventListener("touchstart", onDocumentTouchStart, false);
      document.addEventListener("touchmove", onDocumentTouchMove, false);
      window.addEventListener("resize", onWindowResize, false);
    };

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        // event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    function onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        // event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      let i = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          let particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 2 +
            (Math.sin((iy + count) * 0.5) + 1) * 2;
        }
      }

      renderer.render(scene, camera);

      count += 0.1;
    };

    onMounted(() => {
      init();
      animate();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", onWindowResize);
    });

    return {
      container,
    };
  },
};
</script>

<style>
.bgstart {
  position: absolute;
  top: -20%;
  left: 0;
}
</style>
