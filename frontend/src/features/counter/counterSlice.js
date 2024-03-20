import { createSlice } from "@reduxjs/toolkit";
import { register } from "./counterAPI";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    nickname: null,
    email: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        console.log("pending state: ", state);
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.meta.arg);
        state.email = action.meta.arg.email;
        state.nickname = action.meta.arg.nickname;
        console.log(state);
      });
  },
});

export const authReducer = authSlice.reducer;
