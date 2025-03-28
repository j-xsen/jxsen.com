import { useEffect, useRef } from "react"
import LetterMesh from "./LetterMesh"
import { useFrame } from "@react-three/fiber"
import { Box3, Vector3 } from "three"
import LayeredLetterMesh from "./LayeredLetterMesh"

export default function WordMesh(props) {
    const groupRef = useRef()
    
    const centerAlign = (wordGroup) => {
        const boundingBox = new Box3().setFromObject(wordGroup)
        const center = new Vector3()
        boundingBox.getCenter(center)
        wordGroup.position.sub(center)
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
                    <LayeredLetterMesh
                        key={index}
                        letter={letter}
                        font={props.font}
                        charPos={index - splitIndex}
                        line={splitIndex ? 1 : 0}
                />
            )
        })

        return <group name="WordGroup" ref={groupRef}>{letters}</group>
    }

    let maxFrames = 100
    let frameCount = 0
    let frameIn = true
    useFrame(() => {
        if (groupRef.current) {
            if ( frameCount >= 73 ) {
                frameIn = false
            } else if ( frameCount <= 0 ) {
                frameIn = true
            }
            groupRef.current.position.z += frameIn ? 0.01 : -0.01
            frameIn ? frameCount++ : frameCount--

            groupRef.current.children.forEach(element => {
                // inner
                element.children[1].position.z += frameIn ? 0.0025 : -0.0025
                element.children[1].material.color.setRGB(0, frameCount/maxFrames, 1-(frameCount/100))

                // outer
                element.children[0].material.color.setRGB(1, 0, frameCount/maxFrames)
            });
        }
    })

    useEffect(() => {
        if (groupRef.current) {
            centerAlign(groupRef.current)
        }
    }, [groupRef])

    return populateWord()
}
