import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import Home from "./pages/home/Home.jsx";
import AddBlog from "./pages/blogs/AddBlog.jsx";
import UpdateBlog from "./pages/blogs/UpdateBlog.jsx";

export default function App() {



  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'add-blog',
          element: <AddBlog />
        },
        {
          path: 'update-blog/:id',
          element: <UpdateBlog />
        }


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
