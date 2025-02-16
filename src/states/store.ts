import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./appointmentSlice";
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: { appointmentReducer, authReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
