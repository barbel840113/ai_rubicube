import * as THREE from 'three';
var spotLight = function () {
  this.spotLight = new THREE.SpotLight(0xffffff);

  //set Scene
  this.setScene = function (scene) {
    this.spotLight.position.set(10, 20, 10);
    this.spotLight.shadow.camera.near = 20;
    this.spotLight.shadow.camera.far = 40;
    this.spotLight.shadow.mapSize.width = 20;
    this.spotLight.shadow.mapSize.height = 50;
    this.spotLight.shadow.camera.fov = 20;
    this.spotLight.castShadow = true;
    scene.add(this.spotLight);
  }

  /**
   * Change Position of Light based on the camera
   */
  this.changePositionOfLight = function (dataModel) {
       
       this.spotLight.position.x =dataModel['x'];
       this.spotLight.position.y = dataModel['y'];
       this.spotLight.position.z = dataModel['z'];
  }

}

export { spotLight };