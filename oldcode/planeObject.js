import * as THREE from 'three';
//Sphere object add to main render
var planeObject = function () {
  this.planeMaterial = new THREE.MeshLambertMaterial({ color: 0x63705D });
  this.planeGeometry = new THREE.PlaneGeometry(50, 50);
  this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
  this.plane.receiveShadow = true;
  this.plane.name = "surfcae";

  this.setScene = function (scene) {
    this.plane.receiveShadow = true;
    this.plane.rotation.x = -0.5 * Math.PI;
    this.plane.position.x = 0;
    this.plane.position.y = 0;
    this.plane.position.z = 0;

    scene.add(this.plane);
  }

}
//
//planeObject.prototype.name = "Sphere Type Object";

export { planeObject };