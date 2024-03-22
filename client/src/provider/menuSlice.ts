import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: false,
  },
  reducers: {
    showMenu(state) {
      state.menu = true;
    },
    hideMenu(state) {
      state.menu = false; 
    },
  },
});

export const { showMenu, hideMenu } = menuSlice.actions;
export default menuSlice.reducer;
