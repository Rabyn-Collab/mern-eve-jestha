import { useParams } from "react-router"
import { useGetMovieDetailQuery } from "./movieApi.js";
import MovieVideo from "./MovieVideo.jsx";

export default function MovieDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMovieDetailQuery(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-red-500">{error.message}</h1>;


  return (
    <div className="p-5">

      <div
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})` }}
        className="grid grid-cols-[1fr_2.4fr] bg-no-repeat bg-cover bg-gray-400 bg-blend-darken ">
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
        </div>
        <div className="space-y-2 text-white">
          <h1 >{data.title}</h1>
          <p>{data.release_date}</p>
          <p>{data.overview}</p>

        </div>

      </div>

      <MovieVideo id={data.id} />

    </div>
  )
}
