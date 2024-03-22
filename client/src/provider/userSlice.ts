import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./BASE_URL";
import Cookies from "js-cookie";
const setToken = (token: string) => {
  Cookies.set("userToken", token);
};
const getToken = () => {
  return Cookies.get("userToken");
};

export const userSlice = createApi({
  reducerPath: "userApi",
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
  tagTypes: ["userApi"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["userApi"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      onQueryStarted: async (args, { queryFulfilled }) => {
        try {
          const token = await queryFulfilled;
          if (token) {
            setToken(token.data?.token);
          }
        } catch (error) {
          console.log(error);
        }
      },
      invalidatesTags: ["userApi"],
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: "/auth/",
          method: "GET",
        };
      },
      providesTags: ["userApi"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
} = userSlice;
