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


    initConfig() {
        this.matrixValue = [
            [0, 0.5, -1], //1
            [1, 0.5, -1], //2
            [2, 0.5, -1], //3
            [0, 1.5, -1], //4
            [1, 1.5, -1], //5
            [2, 1.5, -1], //6
            [0, 2.5, -1], //7
            [1, 2.5, -1], //8
            [2, 2.5, -1], //9 

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

        let faceColors = [Colors.blue, Colors.blue, Colors.white,
        Colors.white, Colors.green, Colors.green, Colors.black, Colors.black,
        Colors.orange, Colors.orange, Colors.black, Colors.black];
        this.qubeGeneratorArray = new QubeGenerator(3, 0, this.matrixValue, this.initColorSite);
        this.qubeGeneratorArray.generateHorizonatl(this.scene, faceColors);
    }
}