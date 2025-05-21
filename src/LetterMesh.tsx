import { extend } from "@react-three/fiber"
import { TextGeometry } from "three/addons/geometries/TextGeometry.js"
extend({ TextGeometry })

export default function LetterMesh(props) {
    const getPosition = () => {
        return [props.charPos,
                props.offset-props.line,
                (props.inner ? (props.offset*0.06) : 0)]
    }

    return (
        <mesh position={getPosition()}>
            <textGeometry args={[props.letter,
                { font: props.font,
                size: 1.5,
                depth: props.inner ? 0.2 : 0.1,
                curveSegments: 1,
                bevelEnabled: !props.inner,
                bevelThickness: .05,
                bevelSize: 0.25,
                bevelOffset: 0,
                bevelSegments: 2,
                }]} />
            <meshBasicMaterial color={props.color} />
        </mesh>
    )
}
