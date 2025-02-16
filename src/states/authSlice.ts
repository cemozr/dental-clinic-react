import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast, Zoom } from "react-toastify";

type InitialState = {
  loginCredentials: {
    mail: string | null;
    password: string | null;
  };
  isLoading: boolean;
  status: "signed in" | "signed out";
};

const initialState: InitialState = {
  loginCredentials: {
    mail: null,
    password: null,
  },
  isLoading: false,
  status: "signed out",
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: { mail: string; password: string }) => {
    try {
      signInWithEmailAndPassword(auth, loginData.mail, loginData.password);
    } catch (err) {
      console.error("login failed", err);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    signOut(auth);
  } catch (err) {
    console.error("logout failed", err);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.status = "signed in";
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.status = "signed out";
        toast.success("Çıkış Yapıldı.", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        toast.error("Çıkış Başarısız.", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      });
  },
});

export default authSlice.reducer;

export const {} = authSlice.actions;
