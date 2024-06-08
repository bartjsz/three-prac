import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// camera
// .setSize ( width : Integer, height : Integer, updateStyle : Boolean ) : undefined
// Resizes the output canvas to (width, height) with device pixel ratio taken into account, and also sets the viewport to fit that size, starting in (0, 0). Setting updateStyle to false prevents any style changes to the output canvas
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  // window.innerWidth / window.innerHeight,
  1,
  0.1,
  1000
);
camera.position.z = 1.5;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// can pass own canvas so WebGLRenderer doesnt create its own renderer in memory
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
// sets aspect ratio
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(200, 200);
// dont need to append to document because it is already there since we did one manually and selected by id
// document.body.appendChild(renderer.domElement);

// dont need to use this if want to set a specific explict size eg 200x200 line 22
// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial({ wireframe: true });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
