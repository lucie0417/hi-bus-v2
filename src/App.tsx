import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import BusStatus from "./pages/BusStatus";
import MyFavorite from './pages/MyFavorite';
import Loading from './pages/Loading';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/BusStatus",
    element: <BusStatus />,
  },
  {
    path: "/MyFavorite",
    element: <MyFavorite />
  },
  {
    path: "/Loading",
    element: <Loading />
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
