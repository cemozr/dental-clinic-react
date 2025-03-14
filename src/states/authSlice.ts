import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../config/firebase";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast, Zoom } from "react-toastify";

type InitialState = {
  loginCredentials: {
    mail: string | null;
    password: string | null;
  };
  isLoading: boolean;
  userStatus: "signed in" | "signed out";
};

const initialState: InitialState = {
  loginCredentials: {
    mail: null,
    password: null,
  },
  isLoading: false,
  userStatus: "signed out",
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: { mail: string; password: string }) => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(
        auth,
        loginData.mail,
        loginData.password,
      );
      toast.success("Hoşgeldiniz👋", {
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
    } catch (err) {
      console.error("login failed", err);
      toast.error("Giriş başarısız. Bilgilerinizi kontrol ediniz.", {
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
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    signOut(auth);
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
  } catch (err) {
    console.error("logout failed", err);
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
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<InitialState["userStatus"]>) => {
      state.userStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.userStatus = "signed in";
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;

        state.userStatus = "signed out";
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;

export const { setUser } = authSlice.actions;
