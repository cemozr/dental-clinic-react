import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import axios from "axios";

type Employee = {
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

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    setShowEmployeeForm: (state) => {
      state.showEmployeeForm = !state.showEmployeeForm;
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

export const { setShowEmployeeForm } = employeeSlice.actions;
