import * as THREE from 'three';
import TWEEN from 'tween.js';

/* Import data */
import Config from '../data/config';

/** Helpers */
import Geometry from '../models/geometry';
import Light from '../components/light';

/* Component */
import Renderer from '../components/renderer';
import Texture from '../models/texture';
import Camera from '../components/camera';
import Controls from '../components/controls';
import Model from '../models/model';
import PlaneObject from '../components/planeObject';
import Interaction from '../help-library/iteraction';
import QubeObject from '../components/qubeObject';
import CreateServiceFactory from '../services/createService';
/** GUI */
import DatGUI from '../utils/datGUI';
import Stats from '../help-library/Stats';

const customerData = [
  { Guid: 1, XPosition: 32, YPosition: 35, },
];

export default class Main {

  /**Constructor */
  constructor(container) {
    // Set container property to sscontainer element
    this.container = container;
    this.indexDBContext = null;
    // Start Three Clock
    this.clock = new THREE.Clock();
    // Open and pass & IndexDB
    this.openIndexDBContext();
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
    this.light = new Light(this.scene);
    this.planeObject = new PlaneObject(this.scene);
    //this.qubeObject = new QubeObject(this.scene);

    this.createQubeGenerator = new CreateServiceFactory(this.scene);
    // STart render which does not wait for model fully loaded

    const lights = ['ambient', 'directional', 'point', 'hemi'];
    lights.forEach((light) => this.light.place(light));

    this.geometry = new Geometry(this.scene);
    this.geometry.make('plane')(150, 150, 10, 10);
    this.geometry.place([0, -20, 0], [Math.PI / 2, , 0, 0]);

    if (Config.isDev && Config.isShowingStats) {
      this.stats = new Stats(this.renderer);
      this.stats.setUp();
    }

    if (Config.isDev) {
      new DatGUI(this);
    }

    Config.isLoaded = true;
    this.container.querySelector('#loading').style.display = 'none';

    // open database

    // Start render which does not wait for model fully loaded
    this.render();
  }

  /**
   * OpenIndexDBContext
   */
  openIndexDBContext() {
    // Index DB Context

    // Request to IndexDB
    this.requestDB = window.indexedDB.open("MyTestDatabase11", 3.1);
    this.requestDB.onerror = function () {
      console.log("Details " + event);
    };

    this.requestDB.onsuccess = function (event) {
      this.indexDb = event.target.result;
    }

    this.requestDB.onupgradeneeded = function (event) {
      // save the IDatabase
      this.indexDb = event.target.result;

      if (typeof (this.indexDb) !== 'undefined') {
        this.objectstore = this.indexDb.createObjectStore("Cube_Matrix", { autoIncrement: true });
        this.indexDBContext = this.objectstore;
        this.objectstore.createIndex("Guid", "Guid", { unique: true });
        this.objectstore.createIndex("XPosition", "XPosition", { unique: false });
        this.objectstore.createIndex("YPosition", "YPosition", { unique: false });


        //  customerData.forEach((val) => {
        //   let transaction = this.objectstore.put(val);
        // });

        // console.log(this.objectstore.get(1));
      }
    }
  }

  render() {

    setTimeout(() => {

     
    }, 10);

    if (Config.isDev && Config.isShowingStats) {
      Stats.start();
    }

    // // Call render function and pass in created scene and camera
    this.renderer.render(this.scene, this.camera.threeCamera);

    if (Config.isDev && Config.isShowingStats) {
      Stats.end();
    }
    // Render rtats if Dev
    if (typeof (this.requestDB.objectstore) !== 'undefined') {
      //this.requestDB.indexDb.open("MyTestDatabase11", 3.1);
     // let transaction = this.requestDB.objectstore.put(customerData[0]);
    }

    TWEEN.update();
    this.controls.threeControls.update();

    requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object

  }


}