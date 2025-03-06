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
  specialist: string;
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
  status?: string;
};

type InitialState = {
  appointments: Appointment[];
  isLoading: boolean;
  showDetails: boolean;
  selectedAppointment: Appointment | null;
  editMode: boolean;
};

const initialState: InitialState = {
  appointments: [
    {
      id: "",
      appointmentDate: "",
      appointmentTime: "",
      birthDate: "",
      specialist: "",
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
  editMode: false,
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

export const editAppointment = createAsyncThunk(
  "appointment/editAppointment",
  async (newData: { data: Appointment; id: Appointment["id"] }) => {
    try {
      const docRef = doc(db, "appointments", newData.id!);
      await updateDoc(docRef, {
        appointmentDate: newData.data.appointmentDate,
        appointmentTime: newData.data.appointmentTime,
        birthDate: newData.data.birthDate,
        specialist: newData.data.specialist,
        extraInfo: newData.data.extraInfo,
        familyMedicalHistory: newData.data.familyMedicalHistory,
        gender: newData.data.gender,
        idNumber: newData.data.idNumber,
        mail: newData.data.mail,
        allergies: newData.data.allergies,
        medicalHistory: newData.data.medicalHistory,
        medicalIssue: newData.data.medicalIssue,
        medicines: newData.data.medicines,
        name: newData.data.name,
        tel: newData.data.tel,
        address: newData.data.address,
      });
      // setEditMode(null);
    } catch (err) {
      console.error("Update failed", err);
    }
  },
);

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
    setEditMode: (state, action: PayloadAction<Appointment | null>) => {
      state.editMode = !state.editMode;
      if (state.editMode === true) {
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
      })
      .addCase(editAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editAppointment.fulfilled, (state) => {
        state.isLoading = false;
        state.editMode = false;
        state.showDetails = false;
        toast.success("Randevu bilgileri düzenlendi.", {
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
      .addCase(editAppointment.rejected, (state) => {
        state.isLoading = false;
        toast.error("Randevunuz bilgileri düzenlenemedi.", {
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

export const { setAppointments, setShowDetails, setEditMode } =
  appointmentSlice.actions;
