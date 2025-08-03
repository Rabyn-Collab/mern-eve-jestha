import axios from "axios"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setLoad(false);
      setData(response.data)
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  if (load) return <h1>Loading....</h1>
  if (err) return <h1 className="text-pink-700">{err}</h1>
  console.log(data);

  return (
    <div className="p-5">
      {data && data.map((todo) => {
        return <div key={todo.id}>
          <h1>{todo.title}</h1>

        </div>
      })}

    </div>
  )
}
