import * as THREE from 'three';

var colorMaterial = {
  blue: 0x21476E,
  red: 0xC52D0D,
  green: 0x1FCF04,
  yellow: 0xCFFA0B
};



//Qube 
var qubeObject = function (materialColor) {

  this.geometry = new THREE.CubeGeometry(1, 1, 1);
  this.material = new THREE.MeshLambertMaterial({ color: materialColor });
  this.qube = new THREE.Mesh(this.geometry, this.material);
  this.qube.name = "Qube";
  this.oldPositionX = this.qube.position.x;
  /**
   * Set Scene
   */
  this.setScene = function (scene) {
    this.qube.castShadow = true;
    scene.add(this.qube);
  }

  /**
   * Set Rotation qube by X
   */
  this.setRotationQubeX = function (x) {
    this.qube.rotation.x += 2 * x;
  }

  /**
   * Rotation by Y
   */
  this.setRotationQubeY = function (y) {
    this.qube.rotation.y += y;
  }


  this.setPositionOfQubeBasedOnOpacity = function (k, currentPosition) {

    if (this.oldPositionX < currentPosition) {

      this.qube.position.x +=currentPosition + 1;
      this.oldPositionX = currentPosition;
    }

    if (this.oldPositionX > currentPosition) {
      this.qube.position.x -= currentPosition + 10;
      this.oldPositionX = currentPosition;
    }
  }


  //rotation
  this.setPositionOfQube = function (x, y, z) {
    this.qube.position.x = x;
    this.qube.position.y = y;
    this.qube.position.z = z;
  }

  this.scaleQube = function () {

    if (this.qube.scale < 2) {
      this.qube.scale.x += 0.1;
    }
  }
}

// create prototype of object Qube
qubeObject.prototype.name = "Cube";

export { qubeObject, colorMaterial }