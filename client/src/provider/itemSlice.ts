import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./BASE_URL";
import Cookies from "js-cookie";
const getToken = () => {
  return Cookies.get("userToken");
};

export const itemSlice = createApi({
  reducerPath: "itemSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["itemApi"],
  endpoints: (builder) => ({
    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/item/create",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["itemApi"],
    }),
    updateItem: builder.mutation({
      query: ({id, updateItem }) => ({
        url: `/item/update/${id}`,
        method: "PUT",
        body: updateItem,
      }),
      invalidatesTags: ["itemApi"],
    }),
    deleteItem: builder.mutation({
        query: (id) => ({
          url: `/item/delete/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["itemApi"],
      }),
    getItems: builder.query({
      query: () => {
        return {
          url: "/item/",
          method: "GET",
        };
      },
      providesTags: ["itemApi"],
    }),
  }),
});

export const {
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
  useGetItemsQuery
} = itemSlice;
