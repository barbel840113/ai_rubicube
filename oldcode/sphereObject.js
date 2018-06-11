
/**
 * Sphere Object
 */
var sphereObject = function () {

/**Initialize Sphere Object */
  this.init = function () {
    this.sphereGeometry = new THREE.SphereGeometry(2.5, 30, 30);
    this.sphereMaterial =  new THREE.MeshLambertMaterial({ color: 0x63705D});//new THREE.MeshNormalMaterial();
    this.earthMesh = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);
    this.earthMesh.name = 'earth';
  }

  /**
   * Set Scene 
   */
  this.setScene = function(scene)
  { 
     this.init();
     scene.add(this.earthMesh);
  }

}

export { sphereObject }