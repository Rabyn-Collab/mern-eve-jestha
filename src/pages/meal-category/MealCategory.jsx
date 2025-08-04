import axios from "axios"
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";


export default function MealCategory() {
  const nav = useNavigate();

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
  if (err) return <h1>{err}</h1>

  return (
    <div className="p-5 grid grid-cols-3 gap-5">
      {data && data.categories.map((cata) => {
        return <Card key={cata.idCategory} className="mt-6 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={cata.strCategoryThumb}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {cata.strCategory}
            </Typography>
            <p className="line-clamp-3">
              {cata.strCategoryDescription}
            </p>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => nav(`/category-items?c=${cata.strCategory}`)}>Read More</Button>
          </CardFooter>
        </Card>
      })}
    </div>
  )
}
