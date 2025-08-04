import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router"
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

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



  return (
    <div className="p-5">

      <Card className="w-96">
        <List>

          {data && data.meals.map((meal) => {
            return <ListItem key={meal.idMeal}>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src={meal.strMealThumb} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {meal.strMeal}
                </Typography>

              </div>
            </ListItem>;
          })}


        </List>
      </Card>




    </div>
  )
}
