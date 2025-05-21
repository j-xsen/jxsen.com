import { useState } from "react"

export default function LinkSphere(props) {
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <mesh position={[-4, 2.2, -1]}
        onPointerOver={(event) => setHovered(true)}
        onPointerOut={(event) => setHovered(false)} >
            <sphereGeometry />
            <meshBasicMaterial color={hovered ? "white" : "gray"} />
        </mesh>
    )
}
