import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./BASE_URL";

export const shipSlice = createApi({
  reducerPath: "shipApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["shipApi"],
  endpoints: (builder) => ({
    createShip: builder.mutation({
      query: (newship) => ({
        url: "/ship/create",
        method: "POST",
        body: newship,
      }),
      invalidatesTags: ["shipApi"],
    }),
    updateShip: builder.mutation({
      query: ({id, updateShip }) => ({
        url: `/ship/update/${id}`,
        method: "PUT",
        body: updateShip,
      }),
      invalidatesTags: ["shipApi"],
    }),
    deleteShip: builder.mutation({
        query: (id) => ({
          url: `/ship/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["shipApi"],
      }),
    getShips: builder.query({
      query: () => {
        return {
          url: "/ship/",
          method: "GET",
        };
      },
      providesTags: ["shipApi"],
    }),
  }),
});

export const {
 useCreateShipMutation,
 useUpdateShipMutation,
 useDeleteShipMutation,
 useGetShipsQuery
} = shipSlice;
