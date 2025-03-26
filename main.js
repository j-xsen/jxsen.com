import * as THREE from 'three'

import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { LetterMesh } from './letter.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const geometry = new THREE.BoxGeometry( 1, 0.2, 1 )
const material = new THREE.MeshPhongMaterial( { color: 0x00ffa0, flatShading: true } )
const cube = new THREE.Mesh( geometry, material )
// scene.add( cube )

camera.position.z = 5

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.4 );
				dirLight.position.set( 0, 0, 1 ).normalize();
				scene.add( dirLight );

let letters = []

const loader = new FontLoader()
loader.load("helvetiker_regular.typeface.json", function ( response ) {
    const full_name = "Jaxsen Honeycutt"
    let afterSpace = 0
    for ( let i = 0; i < full_name.length; i++ ) {
        if ( full_name[i] === " " ) {
            afterSpace = i+1
            continue
        }
        const letter = new LetterMesh(full_name[i], response, material, afterSpace == 0 ? i : i - afterSpace, afterSpace == 0 ? 0 : 1)
        scene.add(letter)
        letters.push(letter)
    }

})



function animate() {
    cube.rotation.x += 0.005
    cube.rotation.y += 0.01

    letters.forEach( letter => {
        letter.animate()
    })

    renderer.render( scene, camera )
}
renderer.setAnimationLoop( animate )
