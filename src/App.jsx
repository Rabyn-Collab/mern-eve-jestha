import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import MealCategory from "./pages/meal-category/MealCategory.jsx";
import CategoryItems from "./pages/category-items/CategoryItems.jsx";

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
        {
          path: 'category-items',
          element: <CategoryItems />
        }

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
