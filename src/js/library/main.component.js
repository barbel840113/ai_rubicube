import * as THREE from 'three';
import TWEEN from 'tween.js';

/* Import data */
import Config from '../data/config';

/** Helpers */
import Geometry from '../models/geometry';
/* Component */
import Renderer from '../components/renderer';
import Camera from '../components/camera';
import Controls from '../components/controls';

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

    if (window.devicePixelRatio) {
      Config.dpr = window.devicePixelRatio;
    }
    this.renderer = new Renderer(this.scene, container);

    // Component instantiations
    this.camera = new Camera(this.renderer.threeRenderer);
    this.controls = new Controls(this.camera.threeCamera, container);
    // STart render which does not wait for model fully loaded

    this.geometry = new Geometry(this.scene);
    this.geometry.make('plane')(150, 150, 10, 10);
    this.geometry.place([0, -20,0], [Math.PI / 2, ,0,0]);
  }

  render() {

    // Call render function and pass in created scene and camera
    this.renderer.render(this.scene, this.camera.threeCamera);

    // Render rtats if Dev
    TWEEN.update();

    requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object
  }


}