import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";






export const authApi = createApi({

  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (data) => ({
        url: '/api/users/login',
        method: 'POST',
        body: data
      })
    }),


    register: builder.mutation({
      query: (data) => ({
        url: '/api/users/register',
        method: 'POST',
        body: data
      })
    })





  })

});



export const { useLoginMutation, useRegisterMutation } = authApi;