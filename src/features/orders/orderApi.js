import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../app/mainApi";



export const orderApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({


    getOrders: builder.query({
      query: (token) => ({
        url: '/orders',
        headers: {
          Authorization: token
        },
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    createOrder: builder.mutation({
      query: (q) => ({
        url: '/orders',
        method: 'POST',
        headers: {
          Authorization: q.token
        },
        body: q.data
      }),
      invalidatesTags: ['Order']
    }),


  })

});


export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;