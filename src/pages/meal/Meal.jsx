import { useParams } from "react-router"
import { useApiHooks } from "../../hooks/apiHooks.js";

export default function Meal() {
  const { id } = useParams();

  const [data, load, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/lookup.php', {
    i: id
  });



  if (load) return <h1>Loading....</h1>
  if (err) return <h1>{err}</h1>


  return (
    <div className="p-5">
      {data && data.meals.map((meal) => {
        const vidId = meal.strYoutube.split('=')[1];



        return <div key={meal.idMeal} className="space-y-4">
          <h1 className="text-2xl font-bold">{meal.strMeal}</h1>
          <div className="flex gap-5">
            <img className="h-[315px] w-[420px] object-cover" src={meal.strMealThumb} alt="" />
            <iframe width="420" height="315"
              src={`https://www.youtube.com/embed/${vidId}`}>
            </iframe>
          </div>

          <div className="flex gap-5">


            <div>
              {Object.keys(meal).map((mealKey, index) => {

                if (mealKey.includes('strIngredient')) {
                  return <h1 key={index}>{meal[mealKey]}</h1>
                }

              })}
            </div>

            <div>
              {Object.keys(meal).map((mealKey, index) => {

                if (mealKey.includes('strMeasure')) {
                  return <h1 key={index}>{meal[mealKey]}</h1>
                }
              })}

            </div>


          </div>



          <p>{meal.strInstructions}</p>

        </div>
      })}

    </div>
  )
}
