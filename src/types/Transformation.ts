import {Euler, Vector3} from "three";

type Transformation = Position & {
    rotation: Euler,
    scale: number,
}

export type Position = {
    position: Vector3
}

export default Transformation;
