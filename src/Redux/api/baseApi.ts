import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-3-ten-chi.vercel.app' }),
    endpoints: () => ({}),

  })
  
