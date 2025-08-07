import { useNavigate, useSearchParams } from "react-router"
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { useApiHooks } from "../../hooks/apiHooks.js";

export default function CategoryItems() {

  const [searchParams, setSearchParams] = useSearchParams();
  const nav = useNavigate();

  const [data, load, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php', {
    c: searchParams.get('c')
  });


  if (load) return <h1>Loading....</h1>
  if (err) return <h1>{err}</h1>



  return (
    <div className="p-5">

      <Card className="w-96">
        <List>

          {data && data.meals.map((meal) => {
            return <ListItem
              onClick={() => nav(`/meal/${meal.idMeal}`)}
              key={meal.idMeal}>
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
