import * as THREE from 'three';
import Config from '../data/config';

export default class Renderer {

    constructor(scene, container) {
        this.scene = scene;
        this.container = container;

        // Create WebGL renderer and set its antialias 
        this.threeRenderer = new THREE.WebGLRenderer({ alpha: true });

        // Set clear color to fog to enable fog or to hex color fog no fog.
        this.threeRenderer.setClearColor(Config.fog.color);
        this.threeRenderer.setPixelRatio(window.devicePixelRatio); // For retina

        // Appends canvas
        container.appendChild(this.threeRenderer.domElement);

        // Shadow map options
        this.threeRenderer.shadowMap.enabled = true;
        this.threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

        Config.maxAnisotropy = this.threeRenderer.getMaxAnisotropy();

        // Initial size update set to canvs container
        this.updateSize();

        // Listener
        document.addEventListener('DOMContentLoad', () => this.updateSize(), false);
        window.addEventListener('resize', () => this.updateSize(), false);
    }

    // Update Size
    updateSize() {
        this.threeRenderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    }

    render(scene, camera) {
        // Renders scene to canvas target
        this.threeRenderer.render(scene, camera);
    }
}