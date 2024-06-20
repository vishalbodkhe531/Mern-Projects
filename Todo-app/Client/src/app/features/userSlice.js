import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInFailuer: (state) => {
      state.loading = false;
      state.currentUser = null;
    },
    signInSuccess: (state, action) => {
      state.loading = true;
      state.currentUser = localStorage.setItem(
        "currentUser",
        JSON.stringify(action.payload)
      );
    },

    deleteUser: (state, action) => {
      state.currentUser = localStorage.clear(action.payload);
    },

    logoutUser: (state, action) => {
      state.currentUser = localStorage.clear(action.payload);
    },
  },
});

export const {
  signInStart,
  signInFailuer,
  signInSuccess,
  deleteUser,
  logoutUser,
  InputData,
} = userSlice.actions;

export default userSlice.reducer;
