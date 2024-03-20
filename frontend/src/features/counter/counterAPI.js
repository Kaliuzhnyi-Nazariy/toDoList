import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://todolist-project-dxkv.onrender.com";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const res = await axios.post("/api/users/register", credentials);
      console.log(credentials);
      //   setAuthHeader(res.data.token);
      console.log(res.data);

      return res.data;
    } catch (error) {
      //   if (error.response && error.response.status === 409) {
      //     toast.error("This email is already registered");
      //   } else {
      //     toast.error(error.message);
      //   }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
