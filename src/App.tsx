import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BusStatus from "./pages/BusStatus";

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/BusStatus' element={<BusStatus />} />

      </Routes >
    </div >
  )
}

export default App
