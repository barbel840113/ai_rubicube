import QubeObject from '../components/qubeObject';
import LoggerService from './loggerService';

export default class QubeGenerator {
  constructor(x, level, matrixValue, colorSite) {

    // logger service
    this.loggerService = new LoggerService();

    this.elemenArray = matrixValue.length;
    this.elementLevel = level;
    this.colorSite = colorSite;

    // save to store matrix
    this.matrixArray = matrixValue;

    this.cubeArray = [];

    this.colorMaterial = {
      blue: 0x21476E,
      red: 0xC52D0D,
      green: 0x1FCF04,
      yellow: 0xCFFA0B,
      orange: 0xf88c0d,
      selected :0xbd9d9d,
    };
  }



  /**
   * Generate Random Number between 1 to 4
   */
  generateRandomNumber() {
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    return randomNumber;
  }
  //generate horizonatl three qube

  generateHorizonatl(scene, colorFaces) {
    for (let i = 0; i < this.matrixArray.length; i++) {
      this.cubeArray[i] = [];
      let posX = this.matrixArray[i][0];
      let posY = this.matrixArray[i][1];
      let posZ = this.matrixArray[i][2];

      this.cubeArray[i] = new QubeObject(scene, colorFaces);
      this.cubeArray[i].setPositionOfQube(posX, posY, posZ);
      this.loggerService.showCurrentMatrixAndSave(this.matrixArray[i]);
    }

  }

  /**
   * Render Qube Based ON Position of Matrix
   */
  renderQubeBasedOnMatrixPosition(matrixModel) {
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
  renderTestQubeRotation() {
    this.qubeTest.setPositionOfQube(0.4, 0, 0);

    this.qubeTest.setPositionOfQube(0.6, 0, 1);
  }

  /**
  * Render Qube Based ON Position of Matrix
  */
  renderQubeBasedOnMatrixPositionXYZ(matrixModel, value) {
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
  returnColorMaterialByNumber(val) {
    try {
      if (val == null) {
        throw new Error("value cannot be null");
      }

      switch (val) {
        case 1:
          return this.colorMaterial.selected;
        case 2:
          return this.colorMaterial.green;
        case 3:
          return this.colorMaterial.blue;
        case 4:
          return this.colorMaterial.red;
        case 5:
          return this.colorMaterial.green;
        case 6:
          return this.colorMaterial.white;
        case 7:
          return this.colorMaterial.selected;
        case 8:
          return this.colorMaterial.selected;
        case 9:
          return this.colorMaterial.green;
        case 10:
          return this.colorMaterial.green;
        default:
          return this.colorMaterial.blue;
      }
    }
    catch (ex) {
      console.log(err);
    }

  }
}

