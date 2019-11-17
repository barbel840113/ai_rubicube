import QubeGenerator from './cubeGeneratorFactory';
import Colors from '../data/colors';

/**
 * @name RotateService
 * @description This service will rotate qube
 */
export default class RotateService {
    /**
     * 
     * @param {Scene} scene 
     */
    constructor(scene, createService) {
        this.scene = scene;  
        this.createService = createService;

        if(this.createService === Object.name){
            console.log(this.createService.name);
        }
    }

    /**
     * @name rotateQubeR
     * @description rotate Qube
     */
    rotateQubeR(){
        console.log('rotateQubeR');
    }

    rotateQubeFirstLine(val){
        console.log(val);
        let value = Math.round(val)
        this.createService.InitializeSecondLevelQube(value);      
    }

  
}