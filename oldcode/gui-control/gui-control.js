import * as dat from 'dat.gui';
import * as THREE from 'three';

var cubeMAterial = new THREE.MeshLambertMaterial({ color: 0xff0000, transparent: true, opacity: 0.6 });
var sphreMateria = new THREE.MeshLambertMaterial({ color: 0xff0000, transparent: true, opacity: 0.6 });
// Control Type for GUI
var controlType = function () {
  this.rotationSpeed = 0.05;
  this.rotation = 0.5;
  this.colors = cubeMAterial.color.getHex();
  this.surfaceColor = sphreMateria.color.getHex();
  this.rotationX = 0.1;
  this.position = 10;
}

//initialize new GUID
var guicontrolForRemote = function () {

  //gui controls
  this.guicontrolS = new dat.GUI();
  this.controls = new controlType();

  //initialize
  this.controlsInitialize = function () {
    this.guicontrolS.add(this.controls, 'rotationSpeed', -0.01, 0.01);
    this.tempOpactityControl = this.guicontrolS.add(this.controls, 'rotation', 0.1, 1);
    this.guicontrolS.addColor(this.controls, 'colors');
    this.guicontrolS.addColor(this.controls, 'surfaceColor');
    this.guicontrolS.add(this.controls, 'rotationX', -0.1, 0.1);
    this.guicontrolS.add(this.controls, 'position', -100, 100);

    this.tempOpactityControl.onChange(function (value) {      
      //rotateCube(value);      
      // firew on every change drag
      console.log('On Fired onChange Event');
    });

    this.tempOpactityControl.onFinishChange(function (value) {
      this.oldOpacity = value;
     // rotateCube(value);
      console.log("The new value is " + value);
    });
  }
}

export { guicontrolForRemote }