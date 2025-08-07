import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import Home from "./pages/home/Home.jsx";
import UserAddForm from "./pages/users/UserAddForm.jsx";

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
          path: 'add-user',
          element: <UserAddForm />
        }

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
