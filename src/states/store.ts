import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./appointmentSlice";
import employeeReducer from "./employeeSlice";

import authReducer from "./authSlice";
export const store = configureStore({
  reducer: { appointmentReducer, authReducer, employeeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
