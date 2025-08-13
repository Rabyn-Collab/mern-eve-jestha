import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import Home from "./pages/home/Home.jsx";
import UserAddForm from "./pages/users/UserAddForm.jsx";
import UserUpdateForm from "./pages/users/UserUpdateForm.jsx";

export default function App() {

  // const persons = [
  //   { id: 1, name: 'ram' },
  //   { id: 2, name: 'shyam' },
  //   { id: 3, name: 'hari' },
  // ];

  // const per = persons.map((person) => {
  //   return person.id === 1 ? { id: 1, name: 'rita' } : person
  // });

  // console.log(per);

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
        },
        {
          path: 'update-user/:id',
          element: <UserUpdateForm />
        }

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
