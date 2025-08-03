import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import MealCategory from "./pages/meal-category/MealCategory.jsx";

export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <MealCategory />

        },

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
