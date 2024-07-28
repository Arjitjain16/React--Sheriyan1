import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App