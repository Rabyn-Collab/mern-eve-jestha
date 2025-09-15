import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./features/home/Home";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import AdminPanel from "./features/admin/AdminPanel";
import AddForm from "./features/admin/AddForm";
import EditForm from "./features/admin/EditForm";

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
        },
        {
          path: 'admin-panel',
          element: <AdminPanel />
        },
        {
          path: 'add-form',
          element: <AddForm />
        },
        {
          path: 'edit-form/:id',
          element: <EditForm />
        }
      ]
    }

  ]);
  return <RouterProvider router={router} />
}
