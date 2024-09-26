import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (data) => ({
        
        url: "/api/facility",
        method: "POST",
        body: data,
        
      }),
      invalidatesTags: ["facility"],
    }),

    getAllFacility: builder.query({
      query: ({searchTerm = "", minPrice = "", maxPrice = ""}) => ({
        url: "/api/facility",
        params: { searchTerm, minPrice, maxPrice },
        method: "GET",
      }),
      providesTags: ["facility"],
    }),

    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/api/facility/${id}`,
        method: "GET",
      }),
      providesTags: ["facility"],
    }),

    updateFacility: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/facility/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["facility"],
    }),

    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/api/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facility"],
    }),
    
  }),
});

export const {
  useCreateFacilityMutation,
  useGetAllFacilityQuery,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useGetSingleFacilityQuery
  
} = facilityApi;
