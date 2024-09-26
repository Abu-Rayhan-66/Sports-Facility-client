import { baseApi } from "../../api/baseApi";


const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCheckAvailability: builder.query({
            query: (date) => ({
              url: "/api/check-availability",
              params: {date},
              method: "GET",
            }),
            providesTags: ["booking"],
          }),
          getAllBooking: builder.query({
            query: () => ({
              url: `/api/bookings`,
              method: "GET",
            }),
            providesTags: ["facility"],
          }),

          getSpecificUserBooking: builder.query({
            query: () => ({
              url: `/api/bookings/user`,
              method: "GET",
            }),
            providesTags: ["booking"],
          }),

          getSingleBooking: builder.query({
            query: (id) => ({
              url: `/api/bookings/${id}`,
              method: "GET",
            }),
            providesTags: ["booking"],
          }),

          createBooking: builder.mutation({
            query: (data) => ({
              
              url: "/api/bookings",
              method: "POST",
              body: data,
              
            }),
            invalidatesTags: ["booking"],
          }),
  })
})


export const {
    useGetCheckAvailabilityQuery,
    useCreateBookingMutation,
    useGetAllBookingQuery,
    useGetSpecificUserBookingQuery,
    useGetSingleBookingQuery

    
  } = bookingApi;
  