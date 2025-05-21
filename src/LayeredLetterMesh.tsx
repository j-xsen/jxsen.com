import LetterMesh from "./LetterMesh"
import {LayeredLetter} from "./types/Letter";
import FontHolder from "./types/FontHolder";
import {Color} from "three";

export default function LayeredLetterMesh(props: LayeredLetter & FontHolder) {
    const offset = Math.random() * 0.25
    return (
        <group>
            <LetterMesh
                inner={false}
                letter={props.letter}
                font={props.font}
                charPos={props.charPos + offset}
                line={props.line}
                color={new Color(0, 0, 0)}
                offset={offset}
            />
            <LetterMesh
                inner={true}
                letter={props.letter}
                font={props.font}
                charPos={props.charPos + offset}
                line={props.line}
                color={new Color(1, 1, 1)}
                offset={offset}
            />
        </group>
    )
}
