import LetterMesh from "./LetterMesh"

export default function LayeredLetterMesh({ letter, font, charPos, line }) {
    const offset = Math.random()*0.25
    return (
        <group>
            <LetterMesh
                inner={false}
                letter={letter}
                font={font}
                charPos={charPos+offset}
                line={line}
                color={[0,0,0]}
                offset={offset}
            />
            <LetterMesh
                inner={true}
                letter={letter}
                font={font}
                charPos={charPos+offset}
                line={line}
                color={[1, 1, 1]}
                offset={offset}
            />
        </group>
    )
}
