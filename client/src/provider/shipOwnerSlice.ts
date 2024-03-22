import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./BASE_URL";

export const shipOwnerSlice = createApi({
  reducerPath: "shipOwnerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["shipOwnerApi"],
  endpoints: (builder) => ({
    createShipOwner: builder.mutation({
      query: (newShipOwner) => ({
        url: "/shipOwner/create",
        method: "POST",
        body: newShipOwner,
      }),
      invalidatesTags: ["shipOwnerApi"],
    }),
    updateShipOwner: builder.mutation({
      query: ({id, updateShipOwner }) => ({
        url: `/shipOwner/update/${id}`,
        method: "PUT",
        body: updateShipOwner,
      }),
      invalidatesTags: ["shipOwnerApi"],
    }),
    deleteShipOwner: builder.mutation({
        query: (id) => ({
          url: `/shipOwner/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["shipOwnerApi"],
      }),
    getShipOwners: builder.query({
      query: () => {
        return {
          url: "/shipOwner/",
          method: "GET",
        };
      },
      providesTags: ["shipOwnerApi"],
    }),
  }),
});

export const {
 useCreateShipOwnerMutation,
 useDeleteShipOwnerMutation,
 useUpdateShipOwnerMutation,
 useGetShipOwnersQuery
} = shipOwnerSlice;
