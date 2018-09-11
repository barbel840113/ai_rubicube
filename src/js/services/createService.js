import QubeGenerator from './cubeGeneratorFactory';
import Colors from '../data/colors';

export default class CreateServiceFactory {



    constructor(scene) {

        this.scene = scene;
        this.qubeGeneratorArray = [];
        this.initColorSite();
        this.initConfig();

    }

    initColorSite() {
        this.initColorSite = [
            {
                index: 5,
                value: 4
            },
        ]
    }

    /**
     * Initialize First Level
     */
    InitializeFirstLevelQube() {
        this.matrixValue = [
            [0, 0.5, -1], //1
            [1, 0.5, -1], //2
            [2, 0.5, -1], //3
            [0, 0.5, -2], //4
            [1, 0.5, -2], // U
            [2, 0.5, -2], //5
            [0, 0.5, -3], //6
            [1, 0.5, -3], //7
            [2, 0.5, -3], //8 
        ];

        this.VectorMiddle = [

        ];

        this.qubeArrays = [];
        this.matrixValue.forEach(value => {
            let tempObject = {
                x: 3,
                level: 0,
                matrixValue: value
            };

            this.qubeArrays.push(tempObject);

        });

        let faceColors = [Colors.yellow, Colors.yellow, Colors.white,
        Colors.white, Colors.green, Colors.green, Colors.black, Colors.black,
        Colors.orange, Colors.orange, Colors.red, Colors.red];
        this.qubeGeneratorArray = new QubeGenerator(3, 0, this.matrixValue, this.initColorSite);
        this.qubeGeneratorArray.generateHorizonatl(this.scene, faceColors);
    }
    /**
     * Initialize Second Level
     */
    InitializeSecondLevelQube() {
        this.matrixValue = [
            [0, 1.5, -1], //1
            [1, 1.5, -1], //2
            [2, 1.5, -1], //3
            [0, 1.5, -2], //4
            [1, 1.5, -2], // U
            [2, 1.5, -2], //5
            [0, 1.5, -3], //6
            [1, 1.5, -3], //7
            [2, 1.5, -3], //8 
        ];

        this.VectorMiddle = [

        ];

        this.qubeArrays = [];
        this.matrixValue.forEach(value => {
            let tempObject = {
                x: 3,
                level: 0,
                matrixValue: value
            };

            this.qubeArrays.push(tempObject);

        });

        let faceColors = [Colors.yellow, Colors.yellow, Colors.white,
        Colors.white, Colors.green, Colors.green, Colors.black, Colors.black,
        Colors.orange, Colors.orange, Colors.red, Colors.red];
        this.qubeGeneratorArray = new QubeGenerator(3, 0, this.matrixValue, this.initColorSite);
        this.qubeGeneratorArray.generateHorizonatl(this.scene, faceColors);
    }
    /**
     * Initialize Thrid and last Level
     */
    InitializeThirdLevelQube() {
        this.matrixValue = [
            [0, 2.5, -1], //1
            [1, 2.5, -1], //2
            [2, 2.5, -1], //3
            [0, 2.5, -2], //4
            [1, 2.5, -2], // U
            [2, 2.5, -2], //5
            [0, 2.5, -3], //6
            [1, 2.5, -3], //7
            [2, 2.5, -3], //8 
        ];

        this.VectorMiddle = [

        ];

        this.qubeArrays = [];
        this.matrixValue.forEach(value => {
            let tempObject = {
                x: 3,
                level: 0,
                matrixValue: value
            };

            this.qubeArrays.push(tempObject);

        });

        let faceColors = [Colors.yellow, Colors.yellow, Colors.white,
        Colors.white, Colors.green, Colors.green, Colors.black, Colors.black,
        Colors.orange, Colors.orange, Colors.red, Colors.red];
        this.qubeGeneratorArray = new QubeGenerator(3, 0, this.matrixValue, this.initColorSite);
        this.qubeGeneratorArray.generateHorizonatl(this.scene, faceColors);
    }

    /// init config
    initConfig() {
        this.InitializeFirstLevelQube();
        this.InitializeSecondLevelQube();
        this.InitializeThirdLevelQube();
    }
}