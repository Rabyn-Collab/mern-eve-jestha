import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import Upcoming from "./features/movie/Upcoming.jsx";
import MovieDetail from "./features/movie/MovieDetail.jsx";
import Popular from "./features/movie/Popular.jsx";
import ToRated from "./features/movie/ToRated.jsx";


export default function App() {



  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Upcoming />
        },
        {
          path: 'popular',
          element: <Popular />

        },
        {
          path: 'top-rated',
          element: <ToRated />
        },

        {
          path: 'movie-detail/:id',
          element: <MovieDetail />
        }


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
