

// export const base = 'http://192.168.1.116:5000';
// export const baseUrl = 'http://192.168.1.116:5000/api';

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const base = 'https://mern-eve-jestha.onrender.com';
export const baseUrl = 'https://mern-eve-jestha.onrender.com/api';


export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: 'include' }),
  endpoints: (builder) => ({})
});

