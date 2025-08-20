import { useParams } from "react-router"
import { useGetDrinkByIdQuery } from "./drinkApi.js";

export default function DrinkDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetDrinkByIdQuery(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data}</h1>;
  console.log(data);

  return (
    <div className="p-10">
      {data && data.drinks.map((drink) => {

        return <div key={drink.idDrink}>

          <div className="grid grid-cols-[1fr_2fr] max-lg:grid-cols-2 max-md:grid-cols-1 gap-12">
            <div className="space-y-7">
              <h1 className="text-3xl text-center font-medium tracking-wider">{drink.strDrink}</h1>
              <img className="w-full" src={drink.strDrinkThumb} alt="" />
            </div>

            <div className="space-y-7">
              <h1 className="text-3xl text-center font-medium tracking-wider">Ingredients</h1>

              <div className="flex">
                {/* <div>
                  {Object.keys(drink).map((keyName, i) => {
                    if (keyName.includes('strMeasure')) {
                      return <div key={i} className="flex">

                        <h1>{drink[keyName]}</h1>
                      </div>

                    }

                  })}
                </div> */}

                <div className="grid grid-cols-4">
                  {Object.keys(drink).map((keyName, i) => {
                    if (keyName.includes('strIngredient')) {
                      return <div key={i} className="space-y-3">
                        <img src={`https://www.thecocktaildb.com/images/ingredients/${drink[keyName]}-medium.png`} alt="" />
                        <h1 className="text-center">{drink[keyName]}</h1>

                      </div>

                    }

                  })}
                </div>


              </div>



            </div>

          </div>






        </div>

      })}



    </div>
  )
}
