import { useNavigate } from "react-router";
import { useGetUpcomingMovieQuery } from "./movieApi.js";
import MovieList from "./MovieList.jsx";
import { useSearchParams } from "react-router";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";

export default function Upcoming() {

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const { isLoading, error, data } = useGetUpcomingMovieQuery(page);
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page])

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-red-500">{error.message}</h1>;

  console.log(data);


  return (
    <div>

      <MovieList data={data} />

      <div className="flex items-center justify-center gap-5 mb-6 mt-3">
        <Button
          onClick={() => nav(-1)}
          disabled={page === 1}>Prev</Button>
        <h1>{page}</h1>
        <Button
          onClick={() => setSearchParams({ page: Number(page) + 1 })}
          disabled={page === data.total_pages}>Next</Button>
      </div>

    </div>
  )
}
