import { useNavigate } from "react-router";
import { useGetMocktailsQuery } from "./drinkApi.js";

export default function Mocktails() {
  const nav = useNavigate();
  const { isLoading, error, data } = useGetMocktailsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.data}</div>;
  return (
    <div className="p-10">
      <h1 className="text-center mb-3">Mocktail Drinks</h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">

        {data && data.drinks.map((drink) => {
          return <div
            onClick={() => nav(`/drink/${drink.idDrink}`)}
            key={drink.idDrink}>
            <img src={drink.strDrinkThumb} alt="" />
            <h1>{drink.strDrink}</h1>

          </div>
        })}

      </div>
    </div>
  )
}
