import Button from "../../../UI/Button";
import AddEmployeeForm from "./addEmployee/AddEmployeeForm";
import EmployeeTable from "./EmployeeTable";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditMode,
  setShowEmployeeForm,
} from "../../../../states/employeeSlice";
import { RootState } from "../../../../states/store";
import EmployeeDetailsCard from "./employeeDetails/EmployeeDetailsCard";
import { useNavigate } from "react-router-dom";

export default function EmployeeManagementPage() {
  const dispatch = useDispatch();
  const { showEmployeeForm, showEmployeeDetails } = useSelector(
    (state: RootState) => state.employeeReducer,
  );
  const navigate = useNavigate();
  return (
    <main className="my-10 grid flex-grow px-4 lg:px-0">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 lg:mb-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Personel</h1>
          <p className="text-slate-500">
            Mevcut çalışanlarınızı görüntüleyebilir, düzenleyebilirsiniz.
          </p>
        </div>
        <div className="flex gap-4">
          <Button el="button" onClick={() => navigate(-1)}>
            Ana Panele Dön
          </Button>
          <Button
            el="button"
            onClick={() => {
              dispatch(setShowEmployeeForm()), dispatch(setEditMode(false));
            }}
          >
            Personel Ekle
          </Button>
        </div>
      </div>
      <EmployeeTable />
      {showEmployeeForm && <AddEmployeeForm />}
      {showEmployeeDetails && <EmployeeDetailsCard />}
    </main>
  );
}
