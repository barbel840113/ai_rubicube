import * as THREE from 'three';

//Qube 
export default class QubeObject {

  constructor(scene, material) {
    this.scene = scene;
    this.geometry = new THREE.CubeGeometry(1, 1, 1);
    this.material = new THREE.MeshLambertMaterial({ color: material });
    this.qube = new THREE.Mesh(this.geometry, this.material);
    this.qube.name = "Qube";
    this.oldPositionX = this.qube.position.x;

    this.setScene();

  }

  /**
   * Set Scene
   */
  setScene() {
    this.qube.castShadow = true;
    try {

      this.scene.add(this.qube);
    }
    catch (err) {

    }
  }

  /**
   * Set Rotation qube by X
   */
  setRotationQubeX(x) {
    this.qube.rotation.x += 2 * x;
  }

  /**
   * Rotation by Y
   */
  setRotationQubeY(y) {
    this.qube.rotation.y += y;
  }


  setPositionOfQubeBasedOnOpacity(k, currentPosition) {

    if (this.oldPositionX < currentPosition) {

      this.qube.position.x += currentPosition + 1;
      this.oldPositionX = currentPosition;
    }

    if (this.oldPositionX > currentPosition) {
      this.qube.position.x -= currentPosition + 10;
      this.oldPositionX = currentPosition;
    }
  }


  //rotation
  setPositionOfQube(x, y, z) {
    this.qube.position.x = x;
    this.qube.position.y = y;
    this.qube.position.z = z;
  }

  caleQube() {

    if (this.qube.scale < 2) {
      this.qube.scale.x += 0.1;
    }
  }
}

