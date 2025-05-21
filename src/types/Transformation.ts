import {Euler, Vector3} from "three";

type Transformation = {
    position: Vector3,
    rotation: Euler,
    scale: number,
}

export default Transformation;
