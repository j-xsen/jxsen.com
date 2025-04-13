import { Canvas, extend } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { FontLoader } from "three/addons/loaders/FontLoader.js"
import WordMesh from "./WordMesh"
import helvetiker from "../helvetiker_regular.typeface.json"
import { GithubLogo } from "models/GithubLogo"
extend({ OrbitControls })

export default function App() {
    const font = new FontLoader().parse(helvetiker)
    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 90 }}>

        <WordMesh font={font} word=",Jaxsen Honeycutt" />
        <GithubLogo position={[0,6,-5]}/>
        
        <OrbitControls/>

        <color attach="background" args={["black"]} />

        </Canvas>
    )
}
