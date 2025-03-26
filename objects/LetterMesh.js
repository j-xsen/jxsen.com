import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import * as THREE from 'three'


class Letter extends TextGeometry {
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
        this.speed = 1.25
        this.anim_bouncey = (this.delay*1.98)
        this.anim_bouncey_goingIn = true

        this.base_y_position = 15 - ( line * 40 )

        this.base_x_position = -100 + ( charPosition * 25 )
        this.position.z = -200
        this.scale.y = 1.5
        this.position.y = this.base_y_position
        this.position.x = this.position.base_x_position
        this.rotation.y = ( this.delay * 0.0015 )
    }

    progressBounceY() {
        this.position.y = - ( this.anim_bouncey * Math.sin(0.025) ) + this.base_y_position
        this.scale.y = 2 + ( (this.anim_bouncey / 198) * 4 )
        this.rotation.y = (this.anim_bouncey / 198)
    }

    progressBounceX() {
        this.position.x = - ( ( this.anim_bouncey / 198 ) * 20 ) + this.base_x_position
    }

    progressBounceZ() {
        this.position.z = -200 + ( ( this.anim_bouncey / 198 ) * 50 )
    }

    progressBounceColor() {
        this.material.color.setRGB(1 - (this.anim_bouncey / 198) - (this.delay * 25), 1- ( this.anim_bouncey / 198), this.anim_bouncey / 198)
    }

    progressScaleX() {
        this.scale.x = 1.24 + ( ( this.anim_bouncey / 198 ) * 2 )
    }

    progress() {
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
    }

    animate() {
        this.progress()
        this.progressBounceY()
        this.progressBounceX()
        this.progressBounceZ()
        this.progressBounceColor()
        this.progressScaleX()
    }
    
}
