import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export type Appointment = {
  id?: string;
  appointmentDate: string;
  appointmentTime: string;
  birthDate: string;
  dentist: string;
  extraInfo: string;
  familyMedicalHistory: string;
  gender: string;
  idNumber: string;
  mail: string;
  medicalHistory: string;
  medicalIssue: string;
  medicines: string;
  name: string;
  tel: string;
};

type InitialState = {
  appointments: Appointment[];
  isLoading: boolean;
};

const initialState: InitialState = {
  appointments: [
    {
      id: "",
      appointmentDate: "",
      appointmentTime: "",
      birthDate: "",
      dentist: "",
      extraInfo: "",
      familyMedicalHistory: "",
      gender: "",
      idNumber: "",
      mail: "",
      medicalHistory: "",
      medicalIssue: "",
      medicines: "",
      name: "",
      tel: "",
    },
  ],
  isLoading: false,
};

export const createAppointment = createAsyncThunk(
  "appointment/createAppointment",
  async (data: Appointment) => {
    try {
      const docRef = await addDoc(collection(db, "appointments"), data);
      return { id: docRef.id, ...data };
    } catch (err) {
      console.error("appointment couldn't create", err);
    }
  },
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.appointments.push(action.payload!);
        state.isLoading = false;
      })
      .addCase(createAppointment.rejected, (state, err) => {
        console.error("appointment couldn't created", err);
        state.isLoading = false;
      });
  },
});

export default appointmentSlice.reducer;

export const {} = appointmentSlice.actions;
