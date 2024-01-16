
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const geometry = new THREE.BoxGeometry( .5, .5, .5 );
const material = new THREE.MeshBasicMaterial( { color: '#FFC107' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2.5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.002;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();