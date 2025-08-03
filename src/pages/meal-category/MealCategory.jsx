import axios from "axios";
import { useEffect, useState } from "react"

export default function MealCategory() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
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
  if (err) return <h1 className="text-pink-700">{err}</h1>
  console.log(data);

  return (
    <div>

    </div>
  )
}
