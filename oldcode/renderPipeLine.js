import { planeObject } from './planeObject.js';
import { qubeObject, colorMaterial } from './qubeObject.js';
import { guicontrolForRemote } from '../gui-control/gui-control.js';
import { spotLight } from './spotLightObject.js';
import { sphereObject } from './sphereObject.js';
import { OrbitControls } from '../gui-control/OrbitControl';
import { qubeGenerator } from './cubeGeneratorFactory.js';
import * as THREE from 'three';

var Stats = require('../help-library/Stats');

/**
 * render all objects including logci to render
 */
var renderLibrary = {

    renderPipeline: function (window) {
        // store ref to window object

        this.window = window;
        /** 
        * @method initProperties create Properties for All Mesh, Camera and Scene
        * Properties */
        this.initProperties = function () {
            //set the render
            this.renderer = new THREE.WebGLRenderer();
            //set the scene
            this.scene = new THREE.Scene();
            /**Gui Controls */
            this.guicontrols = new guicontrolForRemote();
            /**Stats FPS Feature */
            this.stats = new Stats();
            //set the camera
            this.camera = new THREE.PerspectiveCamera(45, this.window.innerWidth / this.window.innerHeight,
                0.1, 1000);
        }



        /**
         * @method initializeAllObjects all objects needs to be included in the rendering 
         */
        this.initializeAllObjects = function () {
            /** Initialize All Properties of RenderPipeline */
            this.initProperties();
            /**Camera Settings */
            this.setTheCamera(this.camera, this.scene);
            /**FPS Screen */
            this.setFPSScreen(this.stats, this.window.document);
            /**Set Mesh Into Scene */
            this.setMeshIntoScene();
            /**Set Renderer Properties */
            this.setRenderProperties(this.renderer, this.window.document);
        }

        /**
         * @method initializeMeshObject Initialize Meshs Objects into Scene
         */
        this.initializeMeshObject = function () {
            /** Dat.GUI Controls */
            this.guicontrols.controlsInitialize();
            /** Surface Objects */
            //this.planeObject = new planeObject();
            /** Add mesh into scene */
            //this.planeObject.setScene(this.scene);
            this.qubeObject = new qubeObject(colorMaterial.blue);
            this.qubeObject.setScene(this.scene);
        }

        /** 
         * @method setTheCamera Set The Camera Object and Position
         * */
        this.setTheCamera = function (camera, scene) {

            camera.position.x = 15;
            camera.position.y = 16;
            camera.position.z = 13;
            camera.lookAt(scene.position);
        }

        /**
         * 
         * @param {Stats FPS Screen} stats 
         * @param {@param {Document scope from window object} document} document 
         */
        this.setFPSScreen = function (stats, document) {
            stats.setMode(0);
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px;';
            stats.domElement.style.height = '100px;';
            document.body.appendChild(stats.domElement);
        }

        /**
         * 
         * @param {Render WebGL to render scene and Mesh} render 
         * @param {Doucment Object from parent window} document 
         */
        this.setRenderProperties = function (render, document) {
            render.setClearColor(0xfffff, 0.5);
            render.setSize(this.window.innerWidth, this.window.innerHeight);
            render.shadowMap.enabled = true;

            // append render into document body
            document.body.appendChild(render.domElement);
        }


        /**
         * @method setMeshIntoScene Insert Mesh into Scene for rendering
         * @param {Scene } Scene which will receive all Mesh to be rendered.
         */
        this.setMeshIntoScene = function () {

            this.initializeMeshObject();


        }


        /**
         * @method animate Animate Scene and Mesh into Screen
         */
        this.animate = function () {

            //this.animateWithScope = this.animate.bind(this);

            this.stats.update();

            this.renderer.render(this.scene, this.camera);

            requestAnimationFrame(this.animate);
        }


    },
};


export { renderLibrary };
