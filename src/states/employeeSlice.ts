import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import axios from "axios";
import { toast, Zoom } from "react-toastify";

export type Employee = {
  id?: string;
  name: string;
  title: string;
  status?: string;
  photo: string;
  tel: string;
  address: string;
  mail: string;
  type: string;
};

type InitialState = {
  employees: Employee[];

  isLoading: boolean;
  showEmployeeForm: boolean;
  editMode: boolean;
  selectedEmployee: Employee | null;
  showEmployeeDetails: boolean;
};
const initialState: InitialState = {
  employees: [
    {
      id: "",
      name: "",
      title: "",
      status: "Aktif",
      photo: "",
      tel: "",
      address: "",
      mail: "",
      type: "",
    },
  ],

  isLoading: false,
  showEmployeeForm: false,
  editMode: false,
  selectedEmployee: null,
  showEmployeeDetails: false,
};

export const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "myUploadPreset");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dylvgqmwy/image/upload",
      formData,
    );
    console.log("Image uploaded");
    return response.data.secure_url;
  } catch (err) {
    console.error("image couldn't uploaded", err);
  }
};

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employee: Employee) => {
    try {
      const docRef = await addDoc(collection(db, "employees"), employee);
      return { id: docRef.id, ...employee };
    } catch (err) {
      console.error("adding employee failed", err);
    }
  },
);

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "employees"));
      const temp: Employee[] = [];
      querySnapshot.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() } as Employee);
      });
      return temp;
    } catch (err) {
      console.error("fetching employees failed:", err);
    }
  },
);

export const updateEmployeeStatus = async (
  employeeId: Employee["id"],
  status: Employee["status"],
) => {
  try {
    const docRef = doc(db, "employees", employeeId!);
    await updateDoc(docRef, {
      status: status,
    });
  } catch (err) {
    console.error("Update failed", err);
  }
};

export const deleteEmployee = async (employeeId: Employee["id"]) => {
  try {
    await deleteDoc(doc(db, "employees", employeeId!));
    toast.success("Personel Kaydı Silindi.", {
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
    console.error("delete failed", err);
    toast.error("İşlem Başarısız.", {
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
};

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    setShowEmployeeForm: (state) => {
      state.showEmployeeForm = !state.showEmployeeForm;
    },
    setEditMode: (state, action: PayloadAction<Employee | boolean>) => {
      if (typeof action.payload === "boolean") {
        state.editMode = false;
      } else {
        state.selectedEmployee = action.payload;
        state.editMode = true;
      }
    },
    setShowEmployeeDetails: (state, action: PayloadAction<Employee | null>) => {
      state.showEmployeeDetails = !state.showEmployeeDetails;

      state.selectedEmployee = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.employees = action.payload!;
        state.isLoading = false;
      })
      .addCase(getEmployees.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload!);
        state.isLoading = false;
        state.showEmployeeForm = false;
      })
      .addCase(addEmployee.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default employeeSlice.reducer;

export const { setShowEmployeeForm, setEditMode, setShowEmployeeDetails } =
  employeeSlice.actions;
