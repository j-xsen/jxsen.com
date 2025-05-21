import {Color} from "three";

type Letter = LayeredLetter & {
    offset: number,
    inner: boolean,
    color: Color
}

export type LayeredLetter = {
    letter: string,
    charPos: number,
    line: number
}

export default Letter
