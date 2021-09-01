import * as THREE from 'three';
import createCanvas from './createCanvas';

export default function initializeScene(div) {
  const canvas = createCanvas(window.innerWidth, window.innerHeight);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  div.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    500000
  );
  camera.position.z = 1.5;
  return { scene, renderer, camera };
}
