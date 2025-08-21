import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),


  endpoints: (builder) => ({

    getUpcomingMovie: builder.query({
      query: () => ({
        url: '/movie/upcoming',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    }),


    getMovieDetail: builder.query({
      query: (id) => ({
        url: `/movie/${id}`,
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    }),



  })

});


export const { useGetUpcomingMovieQuery, useGetMovieDetailQuery } = movieApi;