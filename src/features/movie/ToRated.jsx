import { useGetTopRatedMovieQuery } from "./movieApi.js"
import MovieList from "./MovieList.jsx";

export default function ToRated() {
  const { isLoading, error, data } = useGetTopRatedMovieQuery();
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-red-500">{error.data}</h1>;

  return (
    <div>
      <MovieList data={data} />
    </div>
  )
}
