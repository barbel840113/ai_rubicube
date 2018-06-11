// import * as THREE from 'three';
import { planeObject } from './planeObject.js';
import { qubeObject, colorMaterial } from './qubeObject.js';
import { guicontrolForRemote } from '../gui-control/gui-control.js';
import { spotLight } from './spotLightObject.js';
import { sphereObject } from './sphereObject.js';
import { OrbitControls } from '../gui-control/OrbitControl';
import { qubeGenerator } from './cubeGeneratorFactory.js';
import * as THREE from 'three';

var Stats = require('../help-library/Stats');

//start value
var matrixValue1 = [0, 0.5, -1];
var matrixValue2 = [1, 0.5, -1];
var matrixValue3 = [2, 0.5, -1];

// camera settings
var cameraSetting = function () {




  //add controls
  /***Mesh Objects */
  this.qubeObject = new qubeObject(colorMaterial.blue);
  this.qubeObject2 = new qubeObject(colorMaterial.red);
  this.qubeObject3 = new qubeObject(colorMaterial.green);

  this.qubeGenerator1 = new qubeGenerator(3, 0, matrixValue1);
  this.qubeGenerator2 = new qubeGenerator(3, 0, matrixValue2);
  this.qubeGenerator3 = new qubeGenerator(3, 0, matrixValue3);

  this.planeObject = new planeObject();
  this.spotLight = new spotLight();
  /***********************/

  //set the camera
  this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight,
    0.1, 1000);

  /**Set The Camera Objecdt */
  this.setTheCamera = function () {

    this.camera.position.x = 15;
    this.camera.position.y = 16;
    this.camera.position.z = 13;
    this.camera.lookAt(this.scene.position);

    this.contr = new OrbitControls(this.camera);
  }

  /**Set The FPS Screen  */
  this.setFPSScreen = function (document) {
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px;';
    this.stats.domElement.style.height = '100px;';
    document.body.appendChild(this.stats.domElement);
  }

  // get Element Domo
  this.setRenderAction = function (document) {

    // set the camera 
    this.setTheCamera();

    // set fps monitor
    this.setFPSScreen(document);

    // set the Dat GUI Controls
    let copyRender = this.qubeGenerator1.renderQubeBasedOnMatrixPositionXYZ.bind(this.qubeGenerator1, this.guicontrols.controls);

    this.guicontrols.controlsInitialize(copyRender);

    this.renderer.setClearColor(0xfffff, 0.5);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;

    //append body to child
    document.body.appendChild(this.renderer.domElement);

    //set the scene
    this.setTheObjectsScene(this.scene);



  }

  /**
   * Set the SceneW
   * Add Objects Mesh into Scene
   */
  this.setTheObjectsScene = function (scene) {
    // this.qubeGenerator1.generateHorizonatl(scene);
    // this.qubeGenerator2.generateHorizonatl(scene);
    // this.qubeGenerator3.generateHorizonatl(scene);
    // this.qubeObject2.setScene(scene);
    // //this.qubeObject3.setScene(scene);
    // //this.qubeObject.setScene(scene);
    // this.planeObject.setScene(scene);

    // this.qubeObject.setPositionOfQube(matrixValue1);
    // this.qubeObject2.setPositionOfQube(matrixValue2);
    // this.qubeObject3.setPositionOfQube(matrixValue3);

    // this.spotLight.setScene(scene);
    //this.sphereObject.setScene(scene);
  }

  //render qube
  this.animate = function () {


    this.animateWithScope = this.animate.bind(this);


    // this.positionOfCameraInit = {
    //   x: this.camera.position.x,
    //   y: this.camera.position.y,
    //   z: this.camera.position.z
    // };


    // this.scene.children[0].material.color = new THREE.Color(this.guicontrols.controls.surfaceColor);

    // this.camera.position.x = this.guicontrols.controls.position;
    // /** Set GUI Properties */
    // this.stats.update();

    // this.contr.update();


    // // this.qubeGenerator1.renderTestQubeRotation();
    // // position x 
    // if (this.camera.position.x != this.positionOfCameraInit.x) {
    //   this.positionOfCameraInit.x = this.camera.position.x;

    //   this.spotLight.changePositionOfLight(this.positionOfCameraInit);
    // }

    // this.renderer.render(this.scene, this.camera);


    // var positionValue = "X: " + this.camera.position.x;

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.animateWithScope);


  }


}

export { cameraSetting };