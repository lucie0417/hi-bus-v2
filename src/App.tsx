import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import SearchBus from "./pages/SearchBus";
import Navigation from './pages/Navigation';
import Loading from './pages/Loading';
import MapNavigation from './pages/MapNavigation';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/searchBus",
    element: <SearchBus />,
  },
  {
    path: "/searchInterCityBus",
    element: <Navigation />
  },
  {
    path: "/searchBike",
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
