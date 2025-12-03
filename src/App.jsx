import Home from "./pages/Home";
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Applayout from './ui/Applayout';

function App() {
  const sitemap = [
    {
      path: "",
      element: <Home/>,
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"projects",
      element:<Projects/>
    },
    {
      path:"project",
      element:<Project/>
    },

  ]
  let router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      children:sitemap
    }
  ]);
  return <RouterProvider router={router} />
}

export default App
