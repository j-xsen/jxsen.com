import { extend } from "@react-three/fiber"
import { TextGeometry } from "three/addons/geometries/TextGeometry.js"
extend({ TextGeometry })

export default function LetterMesh(props) {
    const getIsInner = () => {
        return props.color === "white" || false
    }

    const getPosition = () => {
        return [props.charPos,
            props.offset-props.line + (getIsInner() ? 0.1 : 0),
            (getIsInner() ? props.offset : 0) + 2 + (getIsInner() ? -2 : -1.9)]
    }

    return (
        <mesh position={getPosition()}>
            <textGeometry args={[props.letter,
                { font: props.font,
                size: getIsInner() ? 1.25 : 1.5,
                depth: getIsInner() ? 0.3 : 0.1,
                curveSegments: 1,
                bevelEnabled: !getIsInner(),
                bevelThickness: .05,
                bevelSize: 0.25,
                bevelOffset: 0,
                bevelSegments: 2,
                }]} />
            <meshBasicMaterial color={props.color} />
        </mesh>
    )
}
