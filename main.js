import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const geometry = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshPhongMaterial( { color: 0x00ffa0, flatShading: true } )
const cube = new THREE.Mesh( geometry, material )
scene.add( cube )

camera.position.z = 5

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.4 );
				dirLight.position.set( 0, 0, 1 ).normalize();
				scene.add( dirLight );

const loader = new FontLoader()
loader.load("helvetiker_regular.typeface.json", function ( response ) {
    const textGeometry = new TextGeometry( 'jaxsen', {
        font: response,
        size: 15,
        depth: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelOffset: 1,
        bevelSegments: 1
    })
    const text = new THREE.Mesh( textGeometry, material )

    text.position.y = 0
    text.position.x = -50
    text.rotation.x = 0
    text.position.z = -100
    text.rotation.z = 0
    text.rotation.y = 0.25
    scene.add( text )
})



function animate() {
    cube.rotation.x += 0.005
    cube.rotation.y += 0.01
    renderer.render( scene, camera )
}
renderer.setAnimationLoop( animate)
