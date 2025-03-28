import { useEffect, useRef } from "react"
import LetterMesh from "./LetterMesh"
import { Box3, Vector3 } from "three"

export default function WordMesh(props) {
    const centerAlign = (wordGroup) => {
        const boundingBox = new Box3().setFromObject(wordGroup)
        const size = new Vector3()
        boundingBox.getSize(size)
        wordGroup.position.x = - (size.x / 2)
        return wordGroup
    };

    const populateWord = () => {
        let splitIndex = 0;

        const letters = props.word.split("").map((letter, index) => {
            if (letter === " " || letter === ",") {
                if (letter === " ") {
                    splitIndex = index + 1;
                }
                return null;
            }

            return (
                <group key={index}>
                    <LetterMesh
                        letter={letter}
                        font={props.font}
                        charPos={index - splitIndex}
                        line={splitIndex ? 1 : 0 }
                        color="black"
                    />
                    <LetterMesh
                        letter={letter}
                        font={props.font}
                        charPos={index - splitIndex}
                        line={splitIndex ? 1 : 0}
                        color="white"
                    />
                </group>
            )
        })

        return <group name="WordGroup" ref={groupRef}>{letters}</group>
    }

    const groupRef = useRef()

    useEffect(() => {
        if (groupRef.current) {
            centerAlign(groupRef.current)
        }
    }, [groupRef])

    return populateWord()
}
