import Home from "./pages/Home";
import BusStatus from "./pages/BusStatus";
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/BusStatus",
    element: <BusStatus />,
  }
]);

function App() {
  return (
    <div className="w-full h-screen">
      <RouterProvider router={router} />
    </div >
  )
}

export default App
