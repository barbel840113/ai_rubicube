import { qubeObject, colorMaterial } from './qubeObject.js';

var qubeGenerator = function (x, level, matrixValue) {
  this.elemenArray = x;
  this.elementLevel = level;
  this.startPositionX = matrixValue[0];
  this.startPositionY = matrixValue[1];
  this.startPositionZ = matrixValue[2];

  // save to store matrix
  this.matrixArray = [];

  this.cubeArray = [];


  /**
   * Generate Random Number between 1 to 4
   */
  this.generateRandomNumber = function () {
    let randomNumber = Math.floor((Math.random() * 4) + 1);
    return randomNumber;
  }
  //generate horizonatl three qube

  this.generateHorizonatl = function (scene) {
    if (this.elementLevel == 0) {
      //create three qube for Rubi Code
      for (let i = 0; i < this.elemenArray; i++) {
        this.cubeArray[i] = [];
        let posY = this.startPositionY;
        let posX = this.startPositionX;
        let posZ = this.startPositionZ;

        this.matrixArray[i] = [];

        for (let j = 0; j < this.elemenArray; j++) {
          //let random number
          let randNumber = this.generateRandomNumber();
          let matColor = this.returnColorMaterialByNumber(randNumber);
          this.cubeArray[i][j] = new qubeObject(matColor);
          this.cubeArray[i][j].setScene(scene);
          this.cubeArray[i][j].setPositionOfQube(posX, posY, posZ);
          this.matrixArray[i][j] = { x: posX, y: posY, z: posZ };
          console.log(this.matrixArray[i][j]);
          posY += 1;
        }
        this.startPositionX += 1;
        posY = this.startPositionY;
      }

      let matColor = this.returnColorMaterialByNumber(4);
      this.qubeTest = new qubeObject()
      this.qubeTest.setScene(scene);
      this.qubeTest.setPositionOfQube(0, 0.5, 1);
    }

  }

  /**
   * Render Qube Based ON Position of Matrix
   */
  this.renderQubeBasedOnMatrixPosition = function (matrixModel) {
    if (matrixModel == null) {
      throw Error("matrix Model is empty");
    }

    // create qube based on matrix model
    for (let i = 0; i < this.elemenArray; i++) {

      for (let j = 0; j < this.elemenArray; j++) {
        //let random number
        if (this.cubeArray[i].length != 0) {
          this.cubeArray[i][j].setRotationQubeX(matrixModel);
        }
      }

    }
  }

  /**This will generate only one qube */
  this.renderTestQubeRotation = function () {
    this.qubeTest.setPositionOfQube(0.4, 0,0);
   
    this.qubeTest.setPositionOfQube(0.6, 0, 1);
  }

  /**
  * Render Qube Based ON Position of Matrix
  */
  this.renderQubeBasedOnMatrixPositionXYZ = function (matrixModel, value) {
    if (matrixModel == null) {
      throw Error("matrix Model is empty");
    }

    // create qube based on matrix model
    for (let i = 0; i < this.elemenArray; i++) {
      for (let j = 0; j < this.elemenArray; j++) {
        //let random number
        if (this.cubeArray[i].length != 0) {
          this.cubeArray[i][j].setPositionOfQubeBasedOnOpacity(matrixModel, value);
        }
      }

    }
  }

  /**
 * Return Code based on random number
 */
  this.returnColorMaterialByNumber = function (val) {
    try {
      if (val == null) {
        throw new Error("value cannot be null");
      }

      switch (val) {
        case 1:
          return colorMaterial.blue;
          break;

        case 2:
          return colorMaterial.red;
          break;

        case 3:
          return colorMaterial.green;

        case 4:
          return colorMaterial.yellow;

        default:
          break;
      }
    }
    catch (ex) {
      console.log(err);
    }

  }
}

export { qubeGenerator }