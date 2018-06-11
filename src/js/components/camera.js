import * as THREE from 'three';
import Config from '../data/config';

// Class that created and updated the main camera
export default class Camera {
    constructor(renderer) {
        const width = renderer.domElement.width;
        const height = renderer.domElement.height;

        // Create and position a Perperctive Camera
        this.threeCamera = new THREE.PerspectiveCamera(Config.camera.fov, width / height, Config.camera.near, Config.camera.far);
        this.threeCamera.position.set(Config.camera.posX, Config.camera.posY, Config.camera.PosZ);

        // Initial sizing
        this.updateSize(renderer);

        // Listener
        window.addEventListener('resize', () => this.updateSize(renderer), false);

    }

    updateSize(renderer) {
        // Multiply by dpr in case it is retine device
        this.threeCamera.aspect = renderer.domElement.width * Config.dpr / renderer.domElement.height * Config.dpr;

        // Always call updateProjectionMatrix on camera change
        this.threeCamera.updateProjectionMatrix();
    }
}