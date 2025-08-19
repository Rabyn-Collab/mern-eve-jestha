import { useGetCocktailsQuery } from "./drinkApi.js"

export default function Cocktails() {
  const { isLoading, error, data } = useGetCocktailsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.data}</div>;

  return (
    <div className="p-10">
      <h1 className="text-center mb-3">Cocktail Drinks</h1>
      <div className="grid grid-cols-4 gap-10">

        {data && data.drinks.map((drink) => {
          return <div key={drink.idDrink}>
            <img src={drink.strDrinkThumb} alt="" />
            <h1>{drink.strDrink}</h1>

          </div>
        })}

      </div>
    </div>
  )
}
