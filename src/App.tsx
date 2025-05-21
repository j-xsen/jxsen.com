import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import {FontLoader, Font} from "three-stdlib"
import WordMesh from "./WordMesh"
import helvetiker from "../helvetiker_regular.typeface.json"
import {GithubLogo} from "./models/GithubLogo"
import {JaxsenvilleSign} from "./models/JaxsenvilleSign"
import {Email} from "./models/Email"
import {Euler, Vector3} from "three";

export default function App() {
    const font: Font = new FontLoader().parse(helvetiker)
    return (
        <Canvas camera={{position: [0, 0, 12], fov: 90}}>

            <WordMesh font={font} word=",Jaxsen Honeycutt"/>
            <GithubLogo position={[0, 6, -5]}/>
            <directionalLight position={[0, 4, 10]} intensity={0.75} color={[1, 1, 1]}/>
            <JaxsenvilleSign position={[0, -5, 0]} rotation={[24.75, 0, 0]} scale={0.65}/>
            <Email position={new Vector3(-6, 5, -2.5)}
                   font={font}
                   rotation={new Euler(0, 100, 50)}
                   scale={0.75}/>

            <OrbitControls/>

            <color attach="background" args={["black"]}/>

        </Canvas>
    )
}
