import "assets/css/webgl.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import vertexShader from "assets/shaders/vertex.glsl?raw";
import fragmentShader from "assets/shaders/fragment.glsl?raw";
import { Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";

export default class Experience {
	constructor() {
		// if (window.experience) {
		// 	console.log("already built");
		// 	return;
		// } else {
		this.init();
		// }
	}

	init() {
		const pane = new Pane();
		pane.registerPlugin(EssentialsPlugin);

		const parameters = {
			background: "#89b5c8",
			animate: false,
		};

		const pane_status = pane.addFolder({
			title: "status",
			expanded: false,
		});

		const fpsgraph = pane_status.addBlade({
			view: "fpsgraph",
		});

		pane_status
			.addBinding(parameters, "background", { label: "bg_color" })
			.on("change", (color) => {
				canvas.style.background = `${color.value}`;
			});

		pane_status
			.addButton({
				title: parameters.animate ? "pause" : "play",
				label: "animate",
			})
			.on("click", (event) => {
				parameters.animate = !parameters.animate;
				if (parameters.animate) {
					event.target.title = "pause";
				} else {
					event.target.title = "play";
				}
			});

		const uniforms = {
			u_time: { value: 0.0 },
			u_radius: { value: 1.0 },
		};

		pane_status.addBinding(uniforms.u_time, "value", {
			disabled: true,
			label: "u_time",
		});

		const gui_shader = pane.addFolder({
			title: "shader",
			expanded: true,
		});

		const names = [
			"daniel-chung",
			"ve-arquitectura",
			"squidplot",
			"jpokan-2020",
			"jorge-alberto-ayllon",
		];

		const canvas = document.createElement("canvas");
		canvas.setAttribute("id", "webgl");
		document.body.appendChild(canvas);
		window.experience = true;

		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		const manager = new THREE.LoadingManager();
		const scene = new THREE.Scene();
		const loader = new THREE.TextureLoader(manager);

		const width = 16;
		const height = 9;
		const segments = 10;

		function addMesh(texture) {
			const plane = new THREE.PlaneGeometry(width, height, segments);
			const mesh = new THREE.Mesh(plane, shaderMaterial);
			scene.add(mesh);
		}

		const tex = loader.load("/img/jpokan-2020/1.png", (texture) => {
			addMesh();
		});

		const slider = {
			horizontal: { min: 0, max: 1 },
			vertical: { min: 0, max: 1 },
		};

		const shader = {
			u_tex: { value: tex },
			u_horizontal: { value: { x: 0.5, y: 0.5 } },
			u_vertical: { value: { x: 0.5, y: 0.5 } },
		};
		gui_shader
			.addBinding(slider, "horizontal", {
				min: 0,
				max: 1,
				step: 0.01,
				label: "horizontal",
			})
			.on("change", (ev) => {
				shader.u_horizontal.value.x = ev.value.min;
				shader.u_horizontal.value.y = ev.value.max;
			});

		gui_shader
			.addBinding(slider, "vertical", {
				min: 0,
				max: 1,
				step: 0.01,
				label: "vertical",
			})
			.on("change", (ev) => {
				shader.u_vertical.value.x = ev.value.min;
				shader.u_vertical.value.y = ev.value.max;
			});

		const shaderMaterial = new THREE.RawShaderMaterial({
			uniforms: shader,
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
		});
		const meshes = [];

		manager.onProgress = function (url, itemsLoaded, itemsTotal) {
			console.log(url, itemsLoaded, itemsTotal);
		};

		gsap.to(shader.u_horizontal.value, {
			x: 0,
			y: 1,
			duration: 1.5,
		});
		gsap.to(shader.u_vertical.value, {
			x: 0,
			y: 1,
			duration: 1.5,
		});

		manager.onLoad = function () {
			console.log("loaded all");
			gsap.to(camera.position, {
				z: 6,
				y: 0,
				x: 0,
				duration: 1.15,
				delay: 0.1,
			});
		};

		// for (let index = 0; index < names.length; index++) {
		// 	const name = names[index];

		// 	loader.load(`/img/${name}/1.png`, function (texture) {
		// 		shadermaterial.map = texture;
		// 		const box = new three.planegeometry(16, 9, 10);
		// 		const mesh = new three.mesh(box, shadermaterial);
		// 		mesh.position.z = -index;
		// 		scene.add(mesh);
		// 		meshes.push(mesh);
		// 	});
		// }

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
		camera.position.set(0, 0, 10);

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
			fpsgraph.begin();

			const delta = clock.getDelta();

			if (parameters.animate) {
				uniforms.u_time.value += delta;
				pane.refresh();
			}

			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			fpsgraph.end();
			// Call tick again on the next frame
			requestAnimationFrame(tick);
		};

		tick();
	}
}
