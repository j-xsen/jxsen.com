import * as THREE from 'three'

import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import WordMesh from './objects/WordMesh.js'
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js'

let scene, camera, renderer, material, jaxsen_mesh, effect, loader
let doAscii = false

function animate() {
    if ( jaxsen_mesh ) {
        jaxsen_mesh.animate()
    }

    if ( doAscii && effect ) {
        effect.render( scene, camera )
    } else if ( renderer ) {
        renderer.render( scene, camera )
    } else {
        console.log("No renderer found")
    }
}

function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 210 )

    renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )

    if ( doAscii ) {
        effect = new AsciiEffect( renderer, ' .,/\\][\';:%^*$#', { invert: true } )
        effect.domElement.style.color = 'white'
        effect.domElement.style.backgroundColor = 'black'
        effect.setSize( window.innerWidth, window.innerHeight )
        document.body.appendChild( effect.domElement )
    } else {
        document.body.appendChild( renderer.domElement )
    }
    renderer.setAnimationLoop( animate )
    
        camera.position.z = 5

    const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight.position.set( 0, 0, 1 ).normalize();
    scene.add( dirLight );

    loader = new FontLoader()
    loader.load("helvetiker_regular.typeface.json", function ( font ) {
        jaxsen_mesh = new WordMesh(font, ",Jaxsen Honeycutt")
        jaxsen_mesh.addToScene(scene)
    })
}

init()
