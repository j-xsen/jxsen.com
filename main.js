import * as THREE from 'three'

import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import WordMesh from './objects/WordMesh.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 210 )

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const material = new THREE.MeshPhongMaterial( { color: 0x00ffa0, flatShading: true } )

camera.position.z = 5

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.4 );
				dirLight.position.set( 0, 0, 1 ).normalize();
				scene.add( dirLight );

let jaxsen_mesh
const loader = new FontLoader()
loader.load("helvetiker_regular.typeface.json", function ( font ) {
    jaxsen_mesh = new WordMesh(font, ",Jaxsen Honeycutt", material)
    jaxsen_mesh.addToScene(scene)
})

function animate() {
    if ( jaxsen_mesh ) {
        jaxsen_mesh.animate()
    }

    renderer.render( scene, camera )
}
renderer.setAnimationLoop( animate )
