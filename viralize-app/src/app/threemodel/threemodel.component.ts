import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-threemodel',
  templateUrl: './threemodel.component.html',
  styleUrls: ['./threemodel.component.css']
})
export class ThreemodelComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    

    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('canvas')!,
    });

    const controls = new OrbitControls(camera, renderer.domElement); 

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth/2.5, window.innerHeight/2.5);

    camera.position.set(0, 15, 40);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.target.position.set(0, 0, 0);
    light.position.set(50, 50, 50);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({color:0xFF6347 , /*normalMap: marsNormal*/});   
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(light);
    scene.add(light.target);
    scene.add(sphere);
    scene.add(camera);

    const gltfloader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
//const dracoLoader = new DRACOLoader();
//dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
//gltfloader.setDRACOLoader( dracoLoader );

// let drill: any;
// // Load a glTF resource
// gltfloader.load(
// 	// resource URL
// 	'/assets/latte.glb',
// 	// called when the resource is loaded

// 	function ( gltf ) {

//     drill = gltf.scene;
// 		scene.add( drill );
//     drill.position.setY(-5);
//     drill.rotation.y -= 0.005;

// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

    const sceneBackground = new THREE.TextureLoader().load('/assets/scene-background.svg');
    scene.background = sceneBackground;

    function animate() {
      requestAnimationFrame(animate);
    
      // drill.rotation.y += -0.005;
      sphere.rotation.y += -0.005;
     
      controls.update();
    
      renderer.render(scene, camera);
    }

    animate();

  }

  


}
