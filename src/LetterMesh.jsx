import { extend } from "@react-three/fiber"
import { TextGeometry } from "three/addons/geometries/TextGeometry.js"
extend({ TextGeometry })

export default function LetterMesh(props) {
    console.log(props.letter, props.charPos)
    return (
        <mesh>
            <textGeometry args={[props.letter,
                { font: props.font,
                size: 1,
                depth: 0,
                curveSegments: 1,
                bevelEnabled: false }]} />
            <meshBasicMaterial color={props.color} />
        </mesh>
    )
}
