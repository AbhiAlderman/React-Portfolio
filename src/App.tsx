import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Palette } from "./pages/Palette"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/palette" element={<Palette />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App