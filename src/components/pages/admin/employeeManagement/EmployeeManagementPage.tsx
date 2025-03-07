import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../../../UI/Button";
import AddEmployeeForm from "./addEmployee/AddEmployeeForm";
import EmployeeTable from "./EmployeeTable";
import { useDispatch, useSelector } from "react-redux";
import { setShowEmployeeForm } from "../../../../states/employeeSlice";
import { RootState } from "../../../../states/store";

export default function EmployeeManagementPage() {
  const dispatch = useDispatch();
  const { showEmployeeForm } = useSelector(
    (state: RootState) => state.employeeReducer,
  );
  return (
    <main className="my-10 grid flex-grow px-4 lg:px-0">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 lg:mb-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Personel</h1>
          <p className="text-slate-500">
            Mevcut çalışanlarınızı görüntüleyebilir, düzenleyebilirsiniz.
          </p>
        </div>
        <div>
          <Button el="button" onClick={() => dispatch(setShowEmployeeForm())}>
            Personel Ekle
          </Button>
        </div>
      </div>
      <EmployeeTable />
      {showEmployeeForm && (
        <div className="animate-fade-in absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-slate-300 p-5 backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Personel Ekle</h2>

            <Button
              el="icon-button"
              title="Kapat"
              onClick={() => dispatch(setShowEmployeeForm())}
            >
              <IoMdCloseCircleOutline />
            </Button>
          </div>
          <AddEmployeeForm />
        </div>
      )}
    </main>
  );
}
