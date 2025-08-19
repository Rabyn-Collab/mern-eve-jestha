import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import Cocktails from "./pages/drinks/Cocktails.jsx";
import Mocktails from "./pages/drinks/Mocktails.jsx";


export default function App() {



  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Cocktails />
        },

        {
          path: 'mocktails',
          element: <Mocktails />
        }


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
