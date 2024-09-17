import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import BusStatus from "./pages/BusStatus";
import Navigation from './pages/Navigation';
import Loading from './pages/Loading';
import MapNavigation from './pages/MapNavigation';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/busStatus",
    element: <BusStatus />,
  },
  {
    path: "/navigation",
    element: <Navigation />
  },
  {
    path: "/mapNavigation",
    element: <MapNavigation />
  },
  {
    path: "/loading",
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
