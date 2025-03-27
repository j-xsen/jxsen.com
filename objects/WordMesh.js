import { LayeredLetterMesh, LetterMesh } from './LetterMesh.js'

export default class WordMesh {
    constructor(font, word, material) {
        this.font = font
        this.word = word
        this.material = material
        this.letters = []

        this.createWord()
    }

    createWord() {
        let afterSpace = 0
        for ( let i = 0; i < this.word.length; i++ ) {
            if ( this.word[i] === "," ) { continue }
            if ( this.word[i] === " " ) {
                afterSpace = i+1
                continue
            }
            let letter = new LayeredLetterMesh(this.word[i], this.font, afterSpace == 0 ? i : i - afterSpace, afterSpace == 0 ? 0 : 1)
            this.letters.push(letter)
        }
    }

    addToScene(scene) {
        this.letters.forEach( letter => {
            scene.add(letter.outer)
            scene.add(letter.inner)
        })
    }

    animate() {
        this.letters.forEach( letter => {
            letter.animate()
        })
    }
}
