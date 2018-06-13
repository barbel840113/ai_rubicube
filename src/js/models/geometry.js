import * as THREE from 'three';

import Config from '../data/config';
import Material from '../help-library/material';

export default class Geometry {
    constructor(scene) {
        this.scene = scene;
        this.geo = null;
    }

    make(type) {
        if (type == 'plane') {
            return (width, height, widthSegment = 1, heightSegment = 1) => {
                this.geo = new THREE.PlaneGeometry(width, height, widthSegment, heightSegment);
            };
        }

        if (type == 'sphere') {
            return (radious, widthSegments = 32, heightSegments = 32) => {
                this.geo = new THREE.SphereGeometry(radious, widthSegments, heightSegments);
            }
        }
    }

    place(position, rotation) {
        const material = new Material(0xeeeee).standard;
        const mesh = new THREE.Mesh(this.geo, material);

        // Use ES6 spread to set position and rotation from passed in array
        mesh.position.set(...position);
        mesh.rotation.set(...rotation);

        if (Config.shadow.enabled) {
            mesh.receiveShadow = true;
        }

        this.scene.add(mesh);
    }
}