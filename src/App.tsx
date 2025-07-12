import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import {Font, FontLoader} from "three/examples/jsm/loaders/FontLoader"
import WordMesh from "./WordMesh"
import helvetiker from "../helvetiker_regular.typeface.json"
import {GithubLogo} from "./models/GithubLogo"
import {JaxsenvilleSign} from "./models/JaxsenvilleSign"
import {Email} from "./models/Email"
import {Euler, Vector3} from "three";
import {Jaxsen} from "./models/Jaxsen";
import {A11y, A11yAnnouncer} from "@react-three/a11y";
import {Burger} from "./models/Burger";
import {Suspense} from "react"

export default function App() {
    const loader = new FontLoader();
    const font: Font = loader.parse(helvetiker)

    function openLink(url: string) {
        window.open(url, "_blank")
    }

    return (<Suspense fallback={<div
            style={{
                fontSize: "4em",
                fontWeight: "700",
                letterSpacing: "0.05em",
                lineHeight: "1.1",
                fontFamily: "'Inter', sans-serif",
                textAlign: "center"
            }}
        ><h1>
            Jaxsen Honeycutt
        </h1><p style={{fontSize:"0.5em"}}>Loading...</p></div>}>
            <Canvas camera={{position: [0, 0, 12], fov: 90}}>

                <A11y role={"content"} description={"Jaxsen Honeycutt"}>
                    <WordMesh font={font} word=",Jaxsen Honeycutt"/>
                </A11y>

                <A11y role={"link"} actionCall={() => openLink("https://github.com/j-xsen")}
                      description={"Jaxsen Honeycutt's GitHub"} href={"https://github.com/j-xsen"}>
                    <GithubLogo
                        font={font}
                        position={new Vector3(0, 6, -5)}/>
                </A11y>

                <directionalLight position={[0, 4, 10]} intensity={0.75} color={[1, 1, 1]}/>

                <A11y role={"link"} description={"Jaxsenville website"} href={"https://jaxsenville.com"}
                      actionCall={() => openLink("https://jaxsenville.com/?utm_source=jxsen.com&utm_medium=banner&utm_campaign=Jaxsenation&utm_content=jxsen-Jaxsenville-Sign")}>
                    <JaxsenvilleSign position={new Vector3(0, -5, 0)}
                                     rotation={new Euler(24.75, 0, 0)}
                                     scale={0.65}
                                     font={font}/>
                </A11y>

                <A11y role={"link"} description={"Burga Flipper 2"} href={"https://burga-flipper-2.vercel.app/"}
                      actionCall={() => openLink("https://burga-flipper-2.vercel.app/")}>
                    <Burger rotation={new Euler(0, 0, 0)}
                            position={new Vector3(6, -4, -4)}
                            scale={2.5}
                            font={font}/>
                </A11y>

                <A11y role={"link"} description={"Email Jaxsen Honeycutt"} href={"mailto:jaxsen@jxsen.com"}
                      actionCall={() => openLink("mailto:jaxsen@jxsen.com")}>
                    <Email position={new Vector3(-6, 5, -2.5)}
                           font={font}
                           rotation={new Euler(0, 100, 50)}
                           scale={0.75}/>
                </A11y>

                <Jaxsen position={new Vector3(3, -19, 20)} rotation={new Euler(0, Math.PI * 1.1, 0)} scale={5}/>

                <OrbitControls/>

                <color attach="background" args={["black"]}/>

            </Canvas>
            <A11yAnnouncer/>
        </Suspense>
    )
}
