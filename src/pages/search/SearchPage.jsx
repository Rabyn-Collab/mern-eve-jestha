import { useSearchParams } from "react-router"
import { useSearchBlogsQuery } from "../blogs/blogApi.js";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, error, data } = useSearchBlogsQuery(searchParams.get('search'));
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <p className="text-pink-700">{error.data}</p>

  return (
    <div>
      {data && data.map((blog) => {
        return <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.detail}</p>
          <img className="w-[200px] h-[200px]" src={blog.image} alt="" />



        </div>
      })}
    </div>
  )
}
