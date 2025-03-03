import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { toast, Zoom } from "react-toastify";

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
  allergies: string;
  medicalHistory: string;
  medicalIssue: string;
  medicines: string;
  name: string;
  tel: string;
  address: string;
  status: string;
};

type InitialState = {
  appointments: Appointment[];
  isLoading: boolean;
  showDetails: boolean;
  selectedAppointment: Appointment | null;
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
      allergies: "",
      medicalHistory: "",
      medicalIssue: "",
      medicines: "",
      name: "",
      tel: "",
      address: "",
      status: "Beklemede",
    },
  ],
  isLoading: false,
  showDetails: false,
  selectedAppointment: null,
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

export const deleteAppointment = async (appointmentId: Appointment["id"]) => {
  try {
    await deleteDoc(doc(db, "appointments", appointmentId!));
  } catch (err) {
    console.error("appointment couldn't delete", err);
  }
};

export const updateAppointment = async (
  appointmentId: Appointment["id"],
  status: Appointment["status"],
) => {
  try {
    const docRef = doc(db, "appointments", appointmentId!);
    await updateDoc(docRef, {
      status: status,
    });
  } catch (err) {
    console.error("Update failed", err);
  }
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointments: (state, action: PayloadAction<Appointment[]>) => {
      state.appointments = action.payload;
    },
    setShowDetails: (state, action: PayloadAction<Appointment | null>) => {
      state.showDetails = !state.showDetails;
      if (state.showDetails === true) {
        state.selectedAppointment = action.payload;
      } else state.selectedAppointment = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.appointments.push(action.payload!);
        state.isLoading = false;
        toast.success("Randevunuz başarıyla oluşturuldu.", {
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
      .addCase(createAppointment.rejected, (state, err) => {
        console.error("appointment couldn't created", err);
        state.isLoading = false;
        toast.error("Randevunuz oluşturulamadı.", {
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

export default appointmentSlice.reducer;

export const { setAppointments, setShowDetails } = appointmentSlice.actions;
