import { Button } from "@material-tailwind/react";
import { useGetBlogsQuery, useLazyGetBlogsQuery } from "../blogs/blogApi.js"
import RemoveBlog from "../blogs/RemoveBlog.jsx";
import { useNavigate } from "react-router";
import SearchInput from "../search/SearchInput.jsx";

export default function Home() {
  // const [a, b, c, d] = [11,22,33,44];

  // const person = {
  //   name: 'ram',
  //   age: 90
  // };
  // const { name, age } = person;
  // const [blogCall, { isLoading, error, data }] = useLazyGetBlogsQuery();

  const nav = useNavigate();

  const { isLoading, error, data } = useGetBlogsQuery();
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <p className="text-pink-700">{error.data}</p>

  return (
    <div className="p-5">
      <SearchInput />
      {/* <Button onClick={() => blogCall()}>Click To Call</Button> */}
      {data && data.map((blog) => {
        return <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.detail}</p>
          <img className="w-[200px] h-[200px]" src={blog.image} alt="" />
          <div className="flex gap-5 my-5">
            <Button
              onClick={() => nav(`/update-blog/${blog.id}`)}
              color="green" size="sm">Update Blog</Button>
            <RemoveBlog id={blog.id} />
          </div>


        </div>
      })}


    </div>
  )
}
