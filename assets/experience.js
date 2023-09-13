import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default class Experience {
    constructor() {
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        const canvas = document.getElementById('webgl')
        const scene = new THREE.Scene()

        const box = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x54eaea })
        const mesh = new THREE.Mesh(box, material)
        scene.add(mesh)
        /**
         * Resizer
         */
        window.addEventListener("resize", () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */

        // Perspective Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            100
        )
        camera.position.set(0, 0, 2)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true
        controls.update()

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // Clock
        const clock = new THREE.Clock()

        /**
         * Animate
         */
        const tick = () => {
            // Update controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            requestAnimationFrame(tick)
        }

        tick()
    }
}
