import Letter from "./types/Letter";
import FontHolder from "./types/FontHolder";
import {Vector3} from "three";
import {extend} from "@react-three/fiber"
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";

extend({TextGeometry})

export default function LetterMesh(props: Letter & FontHolder) {
    const getPosition = (): Vector3 => {
        return new Vector3(props.charPos,
            props.offset - props.line,
            (props.inner ? (props.offset * 0.06) : 0))
    }

    const geometry = new TextGeometry(props.letter, {
        font: props.font,
        size: 1.5,
        depth: props.inner ? 0.2 : 0.1,
        curveSegments: 1,
        bevelEnabled: !props.inner,
        bevelThickness: .05,
        bevelSize: 0.25,
        bevelOffset: 0,
        bevelSegments: 2,
    })

    return (
        <mesh position={getPosition()}>
            <primitive object={geometry} attach="geometry"/>
            <meshBasicMaterial color={props.color}/>
        </mesh>
    )
}
