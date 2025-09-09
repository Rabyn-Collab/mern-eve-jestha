import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./features/home/Home";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

export default function App() {

  const router = createBrowserRouter([
    {

      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    }

  ]);
  return <RouterProvider router={router} />
}
