import * as THREE from 'three';

//Qube 
export default class QubeObject {

  constructor(scene, colorFaces) {
    this.scene = scene;
    this.colorFaces = colorFaces;
    this.geometry = new THREE.CubeGeometry(1, 1, 1);
    this.setColorsFacesQube();
    this.material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors, wireframe: false,transparent: false, overdraw: 0.5});
    this.qube = new THREE.Mesh(this.geometry, this.material);
    this.qube.name = "Qube";
    this.oldPositionX = this.qube.position.x;


    this.geo = new THREE.EdgesGeometry(this.qube.geometry);
    this.mat = new THREE.LineBasicMaterial({color: 0x000000, linewidth: 1, linecap: 'round', linejoin: 'round'});
    this.wireframe = new THREE.LineSegments(this.geo, this.mat);

    this.setScene();

  }

  setColorsFacesQube() {

    for(let i = 0; i < this.colorFaces.length; i++)
    {
      this.geometry.faces[i].color.setHex(this.colorFaces[i]);
    }
  }

  /**
   * Set Scene
   */
  setScene() {
    this.qube.castShadow = true;
    try {

      this.scene.add(this.qube);
      this.qube.add(this.wireframe);
    }
    catch (err) {

    }
  }

  //rotation
  setPositionOfQube(x, y, z) {
    this.qube.position.x = x;
    this.qube.position.y = y;
    this.qube.position.z = z;
  }

}

