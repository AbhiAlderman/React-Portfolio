import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Palette } from "./pages/Palette"
import { ProjectDetail } from "./pages/ProjectDetail"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/projects/:id" element={<ProjectDetail />}/>
        <Route path="/palette" element={<Palette />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App