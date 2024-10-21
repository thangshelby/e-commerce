import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userType } from "../types";
import axios from "../api/index";

 const userInit = {
  id: 0,
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  birth: "",
  gender: "",
};

interface AuthState {
  user: userType;
  token: string;
}

const initialState: AuthState = {
  user: userInit,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
      });

  },
});

export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async () => {
    try {
      return axios
        .get("/auth/refresh-token/n.nducthanggg@gmail.com", {
          withCredentials: true,
        })
        .then((response) => {
          return response.data;
        });
    } catch (error) {
      console.log(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data: { email: string; password: string }) => {
    try {
      return await axios
        .post("http://localhost:5001/auth/user/sign-in",data, {
          headers: {
            "Content-Type": "application/json",
          },

        })
        .then((response) => {
          return response.data;
        });

    } catch (error) {
      console.log(error);
    }
  }
);

export default authSlice.reducer;
