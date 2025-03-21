import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
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
  selectedSpecialist: string | null;
  availableHours: string[];
};

const workingHours: string[] = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

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
  selectedSpecialist: null,
  availableHours: [],
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

export const handleAppointmentHours = createAsyncThunk(
  "appointment/handleAppointmentHours",
  async (data: { selectedDate: Date; selectedDentist: string }) => {
    try {
      const localDate = new Date(data.selectedDate);
      localDate.setMinutes(
        localDate.getMinutes() - localDate.getTimezoneOffset(),
      );
      const fixedDate: string = localDate.toISOString().split("T")[0];

      const q = query(
        collection(db, "appointments"),
        where("specialist", "==", data.selectedDentist),
        where("appointmentDate", "==", fixedDate),
      );
      const querySnapshot = await getDocs(q);
      const bookedHours: string[] = querySnapshot.docs.map(
        (doc) => doc.data().appointmentTime,
      );
      const filteredHours = workingHours.filter(
        (hour) => !bookedHours.includes(hour),
      );
      return filteredHours;
    } catch (err) {
      console.error("getting hours failed", err);
      return [];
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
    setSelectedSpecialist: (state, action: PayloadAction<string>) => {
      state.selectedSpecialist = action.payload;
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
      })
      .addCase(handleAppointmentHours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleAppointmentHours.fulfilled, (state, action) => {
        state.availableHours = action.payload;
        state.isLoading = false;
      })
      .addCase(handleAppointmentHours.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default appointmentSlice.reducer;

export const {
  setAppointments,
  setShowDetails,
  setEditMode,
  setSelectedSpecialist,
} = appointmentSlice.actions;
