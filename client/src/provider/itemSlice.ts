import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./BASE_URL";
export const itemSlice = createApi({
  reducerPath: "itemSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ["item"],
  endpoints: (builder) => ({
    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/item/create",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["item"],
    }),
    updateItem: builder.mutation({
      query: ({id, updateItem }) => ({
        url: `/item/update/${id}`,
        method: "PUT",
        body: updateItem,
      }),
      invalidatesTags: ["item"],
    }),
    deleteItem: builder.mutation({
        query: (id) => ({
          url: `/item/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["item"],
      }),
    getItems: builder.query({
      query: () => {
        return {
          url: "/item/",
          method: "GET",
        };
      },
      providesTags: ["item"],
    }),
  }),
});

export const {
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
  useGetItemsQuery
} = itemSlice;
