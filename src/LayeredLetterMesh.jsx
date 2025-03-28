import LetterMesh from "./LetterMesh"

export default function LayeredLetterMesh({ letter, font, charPos, line }) {
    const offset = Math.random()*0.25
    return (
        <group>
            <LetterMesh
                letter={letter}
                font={font}
                charPos={charPos+offset}
                line={line}
                color="black"
                offset={offset}
            />
            <LetterMesh
                letter={letter}
                font={font}
                charPos={charPos+offset}
                line={line}
                color="white"
                offset={offset}
            />
        </group>
    )
}
