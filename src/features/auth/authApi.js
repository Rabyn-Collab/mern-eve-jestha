import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../app/mainApi";




export const authApi = createApi({

  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (data) => ({
        url: '/users/login',
        method: 'POST',
        body: data
      })
    }),


    register: builder.mutation({
      query: (data) => ({
        url: '/users/register',
        method: 'POST',
        body: data
      })
    }),


    updateUser: builder.mutation({
      query: (q) => ({
        url: '/users/update',
        method: 'PATCH',
        body: q.data,
        headers: {
          Authorization: q.token
        }
      })
    }),





  })

});



export const { useLoginMutation, useRegisterMutation, useUpdateUserMutation } = authApi;