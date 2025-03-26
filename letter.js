import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import * as THREE from 'three'


export class Letter extends TextGeometry {
    constructor(char, response) {
        super(char, {
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
    }
}


export class LetterMesh extends THREE.Mesh {
    constructor(char, response, material, charPosition=0, line=0) {
        const letterObject = new Letter(char, response)
        super(letterObject, material)

        this.delay = Math.floor(Math.random() * 100)
        this.speed = 0.75
        this.anim_bouncey = this.delay
        this.anim_bouncey_goingIn = true

        this.base_y_position = 15 - ( line * 40 )

        this.position.x = -50 + charPosition * 14
        this.position.z = -150
        this.scale.y = 1.5
        this.position.y = this.base_y_position
        this.rotation.y = ( this.delay * 0.0015 )
    }

    progressBounceY() {
        if ( this.anim_bouncey > 99 ) {
            this.anim_bouncey_goingIn = false
        } else if ( this.anim_bouncey < -99 ) {
            this.anim_bouncey_goingIn = true
        }
        let multiplier = 1
        if ( this.anim_bouncey < 75 || this.anim_bouncey > -75 ) {
            multiplier = 2
        }
        this.anim_bouncey += this.anim_bouncey_goingIn ? 0.25*this.speed*multiplier : -0.25*this.speed*multiplier
        this.position.y = - ( this.anim_bouncey * Math.sin(0.025) ) + this.base_y_position
        this.scale.y = 1.5 + (this.anim_bouncey / 198)
        this.rotation.y = (this.anim_bouncey / 198)
    }

    animate() {
        this.progressBounceY()
    }
    
}
