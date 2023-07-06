import { Environment, Scroll, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import HtmlContent from "./HtmlContent"

function Scene() {
  return (
    <>
      <Canvas shadows camera={{ fov: 65, position: [0, 0, 8.3] }}>
        <ScrollControls pages={6} damping={0.25}>
          <ambientLight intensity={1.6} />
          <Environment files={"/models/abandoned_tiled_room_1k.hdr"} />
          <Model />
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default Scene
