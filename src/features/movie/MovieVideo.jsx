import { useGetMovieVideosQuery } from "./movieApi.js";

import { Carousel } from "@material-tailwind/react";


export default function MovieVideo({ id }) {

  const { isLoading, error, data } = useGetMovieVideosQuery(id);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-red-500">{error.data}</h1>;
  console.log(data);

  return (
    <div className="mt-5">
      <Carousel

        className="rounded-xl max-w-[700px] h-[400px]">

        {data.results.map((vid) => {
          return <iframe
            allowFullScreen
            key={vid.id} className="w-[700px] h-[400px]"
            src={`https://www.youtube.com/embed/${vid.key}`}>
          </iframe>
        })}

      </Carousel>
    </div>
  )
}

