import { Suspense } from "react"
import "./App.css"
import Scene from "./components/Scene"
import HtmlContent from "./components/HtmlContent"

function App() {
  return (
    <>
      <div className="scene_container">
        <HtmlContent />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
    </>
  )
}

export default App
