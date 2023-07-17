import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import Skills from './components/Skills';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Error from './components/Error'

const AppLayout = () => {
  return(
   <div className="App">
       <Outlet/>
       <RouterProvider router={appRouter}/>
       {/* <Navbar/> */}
   </div>
  )
}

// const appRouter = createBrowserRouter([{
//   path:"/",
//   element:<Body />,
// },
// {
//   path:"/about",
//   element:<About />,
// },
// {
//   path:"/skills",
//   element:<Skills />,
// },
// {
//   path:"/projects",
//   element:<Projects />,
// },
// {
//   path:"/contact",
//   element:<Contact />,
// },
// ])

const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<Navbar />,
      children:[ 
        {
          path:"/",
          element:<Body />,
      },
      {
          path:"/about",
          element:<About />,
      },
      {
          path:"/skills",
          element:<Skills />,
      },
      {
        path:"/projects",
        element:<Projects />,
    },
      {
          path:"/contact",
          element:<Contact />,
      },
],
    errorElement:<Error />,
}
])

export default AppLayout;
