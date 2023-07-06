import { Suspense, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Scene from "./components/Scene"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="scene_container">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
    </>
  )
}

export default App
