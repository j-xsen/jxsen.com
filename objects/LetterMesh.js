import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import * as THREE from 'three'


class Letter extends TextGeometry {
    constructor(char, response) {
        super(char, {
            font: response,
            size: 15,
            depth: 0,
            curveSegments: 1,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 0.25,
            bevelOffset: 0.5,
            bevelSegments: 1
        })
    }
}


export class LetterMesh extends THREE.Mesh {
    constructor(char, font, material, delay, charPosition=0, line=0, layer=0) {
        const letterObject = new Letter(char, font)
        super(letterObject, material)

        this.delay = delay

        this.base_y_position = 15 - ( line * 40 )
        this.base_x_position = -100 + ( charPosition * 25 )
        this.position.y = this.base_y_position
        this.position.x = this.position.base_x_position

        this.layer = layer
    }
    
}

export class LayeredLetterMesh {
    constructor (char, font, charPosition=0, line=0) {
        const delay = Math.floor(Math.random() * 100)
        this.anim_bouncey = 0
        this.anim_bouncey_goingIn = true
        this.speed = 1.25
        let outer_material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } )
        let inner_material = new THREE.MeshPhongMaterial( { color: 0x000000, flatShading: true } )
        this.outer = new LetterMesh(char, font, outer_material, delay, charPosition, line, 0)
        this.inner = new LetterMesh(char, font, inner_material, delay, charPosition, line, 1)
    }

    progressScale() {
        this.outer.scale.x = 1.24 + ( ( this.anim_bouncey / 198 ) * 2 )
        this.inner.scale.x = 1.14 + ( ( this.anim_bouncey / 198 ) * 2 )
        this.outer.scale.y = 2 + ( ( this.anim_bouncey / 198) * 4 )
        this.inner.scale.y = 1.9 + ( ( this.anim_bouncey / 198 ) * 4 )
    }

    progressPosition() {
        this.outer.position.x = - ( ( this.anim_bouncey / 198 ) * 20 ) + this.outer.base_x_position
        this.inner.position.x = - ( ( this.anim_bouncey / 198 ) * 20 ) + this.inner.base_x_position

        this.outer.position.z = -175 + ( ( this.anim_bouncey / 198 ) * 25 )
        this.inner.position.z = -174 + ( ( this.anim_bouncey / 198 ) * 25 )

        this.outer.position.y = - ( this.anim_bouncey * Math.sin(0.025) ) + this.outer.base_y_position
        this.inner.position.y = 1 - ( this.anim_bouncey * Math.sin(0.025) ) + this.inner.base_y_position
    }

    progressColor() {
        // this.outer.material.color.setRGB(0, 0, 1)
        // this.outer.material.color.setRGB(0, 0, 0)
        // this.inner.material.color.setRGB(0, 0, 0)
        // this.inner.material.color.setRGB(1, 0, 0)
    }

    progressRotation() {
        this.outer.rotation.y = (this.anim_bouncey / 198)
        this.inner.rotation.y = (this.anim_bouncey / 198)
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
        this.progressPosition()
        this.progressScale()
        this.progressColor()
        this.progressRotation()
    }
}
