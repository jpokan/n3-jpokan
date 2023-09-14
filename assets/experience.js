import "assets/css/webgl.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Experience {
	constructor() {
		if (window.experience) {
			console.log("already built");
			return;
		} else {
			this.init();
		}
	}

	init() {
		const names = [
			"daniel-chung",
			// "ve-arquitectura",
			// "squidplot",
			// "jpokan-2020",
			// "jorge-alberto-ayllon",
		];

		const canvas = document.createElement("canvas");
		canvas.setAttribute("id", "webgl");
		document.body.appendChild(canvas);
		window.experience = true;

		CustomEase.create(
			"custom",
			"M0,0 C0.35,0.06 0.541,0.298 0.612,0.396 0.758,0.598 0.784,0.624 1,1 "
		);

		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		const manager = new THREE.LoadingManager();
		const scene = new THREE.Scene();
		const loader = new THREE.TextureLoader(manager);
		//Meshes
		const meshes = [];

		manager.onProgress = function (url, itemsLoaded, itemsTotal) {
			console.log(url, itemsLoaded, itemsTotal);
		};

		manager.onLoad = function () {
			console.log("loaded all");
			const tl = gsap.timeline();
			const positions = meshes.map((a) => a.position);

			// for (let i = 0; i < positions.length; i++) {
			// 	const element = positions[i];
			// 	tl.to(element, {
			// 		ease: "custom.out",
			// 		y: i * 10,
			// 		delay: -0.1,
			// 	});
			// }
			tl.to(camera.position, {
				ease: "custom",
				z: 10,
				duration: 1.25,
			});

			console.log(camera);
		};

		for (let index = 0; index < names.length; index++) {
			const name = names[index];

			loader.load(`/img/${name}/1.png`, function (texture) {
				const material = new THREE.MeshBasicMaterial();
				material.map = texture;
				const box = new THREE.PlaneGeometry(16, 9, 10);
				const mesh = new THREE.Mesh(box, material);
				scene.add(mesh);
				meshes.push(mesh);
			});
		}

		/**
		 * Resizer
		 */
		window.addEventListener("resize", () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		/**
		 * Camera
		 */

		// Perspective Camera
		const camera = new THREE.PerspectiveCamera(
			75,
			sizes.width / sizes.height,
			0.1,
			100
		);
		camera.position.set(0, 0, 50);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;
		controls.update();

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
			alpha: true,
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

		// Clock
		const clock = new THREE.Clock();

		/**
		 * Animate
		 */
		const tick = () => {
			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			requestAnimationFrame(tick);
		};

		tick();
	}
}
