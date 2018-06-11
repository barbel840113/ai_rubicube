import * as THREE from 'three';
import TWEEN from 'tween.js';

/* Import data */
import Config from '../data/config';

/* Component */
import Renderer from '../components/renderer';
import Camera from '../components/camera';

export default class Main {

  /**Constructor */
  constructor(container) {
    // Set container property to sscontainer element
    this.container = container;

    // Start Three Clock
    this.clock = new THREE.Clock();

    // Main scene creation
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(Config.fog.color, Config.fog.near);

    this.renderer = new Renderer(this.scene, container);

    // Component instantiations
    this.camera = new Camera(this.renderer.threeRenderer);

    // STart render which does not wait for model fully loaded
    this.render();
  }

  render() {

    // Call render function and pass in created scene and camera
    this.renderer.render(this.scene, this.camera.threeCamera);

    // Render rtats if Dev
    TWEEN.update();

    requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object
  }


}