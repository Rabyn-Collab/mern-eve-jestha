import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router"

export default function CategoryItems() {

  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: searchParams.get('c')
        }
      });
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (load) return <h1>Loading....</h1>
  if (err) return <h1>{err}</h1>
  console.log(data);
  return (
    <div>



    </div>
  )
}
