import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const drinkApi = createApi({
  reducerPath: 'drinkApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1' }),

  endpoints: (builder) => ({


    getCocktails: builder.query({
      query: () => ({
        url: '/filter.php',
        params: { a: 'Alcoholic' },
        method: 'GET'
      })
    }),

    getMocktails: builder.query({
      query: () => ({
        url: '/filter.php',
        params: { a: 'Non_Alcoholic' },
        method: 'GET'
      })
    }),

    getDrinkById: builder.query({
      query: (id) => ({
        url: '/lookup.php',
        params: { i: id },
        method: 'GET'
      })
    })


  })


});

export const { useGetCocktailsQuery, useGetMocktailsQuery, useGetDrinkByIdQuery } = drinkApi;