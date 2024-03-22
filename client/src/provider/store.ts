import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import menuSlice from "./menuSlice";
import { itemSlice } from "./itemSlice";
import { shippingSlice } from "./shippingSlice";
import { shipOwnerSlice } from "./shipOwnerSlice";

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [itemSlice.reducerPath]: itemSlice.reducer,
    [shippingSlice.reducerPath]: shippingSlice.reducer,
    [shipOwnerSlice.reducerPath]: shipOwnerSlice.reducer,
    menu:menuSlice
  },
  middleware: (getDefaultMiddlewre) =>
    getDefaultMiddlewre().
    concat(userSlice.middleware)
    .concat(itemSlice.middleware)
    .concat(shippingSlice.middleware)
    .concat(shipOwnerSlice.middleware)
});

setupListeners(store.dispatch);
