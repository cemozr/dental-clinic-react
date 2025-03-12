import { useSelector } from "react-redux";
import Button from "../../../UI/Button";
import AppointmentEdit from "./appointmentEdit/AppointmentEdit";
import AppointmentTable from "./AppointmentTable";
import DetailsCard from "./DetailsCard";
import { RootState } from "../../../../states/store";
import { useNavigate } from "react-router-dom";

export default function AppointmentManagementPage() {
  const { showDetails, editMode } = useSelector(
    (state: RootState) => state.appointmentReducer,
  );
  const navigate = useNavigate();

  return (
    <main className="my-10 grid flex-grow px-4 lg:px-0">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 lg:mb-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Randevular</h1>
          <p className="text-slate-500">
            Mevcut randevularınızı görüntüleyebilir, düzenleyebilirsiniz.
          </p>
        </div>
        <div className="flex gap-4">
          <Button el="button" onClick={() => navigate(-1)}>
            Ana Panele Dön
          </Button>
          <Button el="colored-link-button" to="/appointment">
            Randevu Al
          </Button>
        </div>
      </div>
      <AppointmentTable />
      {showDetails && <DetailsCard />}
      {editMode && <AppointmentEdit />}
    </main>
  );
}
