import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./BASE_URL";

export const shippingSlice = createApi({
  reducerPath: "shippingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ["shippingApi"],
  endpoints: (builder) => ({
    createShipping: builder.mutation({
      query: (newShipping) => ({
        url: "/shipping/create",
        method: "POST",
        body: newShipping,
      }),
      invalidatesTags: ["shippingApi"],
    }),
    updateShipping: builder.mutation({
      query: ({id, updateshipping }) => ({
        url: `/shipping/update/${id}`,
        method: "PUT",
        body: updateshipping,
      }),
      invalidatesTags: ["shippingApi"],
    }),
    deleteShipping: builder.mutation({
        query: (id) => ({
          url: `/shipping/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["shippingApi"],
      }),
    getShippings: builder.query({
      query: () => {
        return {
          url: "/shipping/",
          method: "GET",
        };
      },
      providesTags: ["shippingApi"],
    }),
  }),
});

export const {
    useCreateShippingMutation,
    useUpdateShippingMutation,
    useDeleteShippingMutation,
    useGetShippingsQuery
} = shippingSlice;
