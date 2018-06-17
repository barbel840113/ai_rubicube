import * as THREE from 'three';
import Config from '../data/config';

export default class Material {
    constructor(color) {
        this.base = new THREE.MeshBasicMaterial({
            color,
            side: THREE.DoubleSide
        });

        this.standard = new THREE.MeshStandardMaterial({
            color,
            flatShading: THREE.FlatShading,
            roughness: 1,
            metalness: 1,
            side: THREE.DoubleSide
        });

        this.wire = new THREE.MeshBasicMaterial({ wireframe: true });
    }


}