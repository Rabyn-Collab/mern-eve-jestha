import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../app/mainApi";




export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({


    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    createProduct: builder.mutation({
      query: (q) => ({
        url: '/products',
        method: 'POST',
        headers: {
          Authorization: q.token
        },
        body: q.data
      }),
      invalidatesTags: ['Product']
    }),

    removeProduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q.id}`,
        method: 'DELETE',
        headers: {
          Authorization: q.token
        }
      }),
      invalidatesTags: ['Product']
    }),


  })

});


export const { useGetProductsQuery, useCreateProductMutation, useRemoveProductMutation } = productApi;