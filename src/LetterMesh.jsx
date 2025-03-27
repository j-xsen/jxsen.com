import { extend } from "@react-three/fiber"
import { TextGeometry } from "three/addons/geometries/TextGeometry.js"
extend({ TextGeometry })

export default function LetterMesh(props) {
    return (
        <mesh position={[(props.charPos*0.75), props.line * -1, -2]}>
            <textGeometry args={[props.letter,
                { font: props.font,
                size: 1.25,
                depth: 0,
                curveSegments: 1,
                bevelEnabled: false }]} />
            <meshBasicMaterial color={props.color} />
        </mesh>
    )
}
