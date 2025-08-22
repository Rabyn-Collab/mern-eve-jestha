import { useNavigate } from "react-router";

export default function MovieList({ data }) {
  const nav = useNavigate();
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
