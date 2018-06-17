import QubeObject from '../components/qubeObject';
import LoggerService from './loggerService';

export default class QubeGenerator {
  constructor(x, level, matrixValue) {

    // logger service
    this.loggerService = new LoggerService();

    this.elemenArray = x;
    this.elementLevel = level;
    this.startPositionX = matrixValue[0];
    this.startPositionY = matrixValue[1];
    this.startPositionZ = matrixValue[2];


    // save to store matrix
    this.matrixArray = [];

    this.cubeArray = [];

    this.colorMaterial = {
      blue: 0x21476E,
      red: 0xC52D0D,
      green: 0x1FCF04,
      yellow: 0xCFFA0B
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

  generateHorizonatl(scene) {
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
          this.cubeArray[i][j] = new QubeObject(scene, matColor);
          this.cubeArray[i][j].setPositionOfQube(posX, posY, posZ);
          this.matrixArray[i][j] = { x: posX, y: posY, z: posZ };
          this.loggerService.showCurrentMatrixAndSave(this.matrixArray[i][j]);

          posY += 1;
        }
        this.startPositionX += 1;
        posY = this.startPositionY;
      }

      let matColor = this.returnColorMaterialByNumber(4);
      this.qubeTest = new QubeObject()
      this.qubeTest.setScene(scene);
      this.qubeTest.setPositionOfQube(0, 0.5, 1);
      this.loggerService.showAllMatrix();
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
        case 1 || 2:
          return this.colorMaterial.blue;

        case 2 || 4:
          return this.colorMaterial.red;

        case 3 || 6:
          return this.colorMaterial.green;

        case 4 || 8:
          return this.colorMaterial.yellow;

        case 9 || 10:
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

