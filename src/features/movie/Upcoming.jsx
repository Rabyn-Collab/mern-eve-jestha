import { useNavigate } from "react-router";
import { useGetUpcomingMovieQuery } from "./movieApi.js";

export default function Upcoming() {
  const { isLoading, error, data } = useGetUpcomingMovieQuery();
  const nav = useNavigate();
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-red-500">{error.message}</h1>;


  return (
    <div className="p-5 grid grid-cols-4 gap-4">

      {data && data.results.map((movie) => {
        return <div
          className="cursor-pointer"
          onClick={() => nav(`/movie-detail/${movie.id}`)}
          key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />

        </div>
      })}

    </div>
  )
}
