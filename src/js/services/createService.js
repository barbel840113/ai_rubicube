import QubeGenerator from './cubeGeneratorFactory';

export default class CreateServiceFactory {



    constructor(scene) {

        this.scene = scene;
        this.qubeGeneratorArray = [];
        this.initConfig();


    }


    initConfig() {
        this.matrixValue = [
            [0, 0.5, -1],
            [0, 0.5, -2],
            [0, 0.5, -3],
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

        this.qubeArrays.forEach(element => {

            this.qubeGeneratorArray.push(new QubeGenerator(element.x, element.level, element.matrixValue));
        });

        this.qubeGeneratorArray.forEach(cQ => {
            cQ.generateHorizonatl(this.scene);
        });
    }
}