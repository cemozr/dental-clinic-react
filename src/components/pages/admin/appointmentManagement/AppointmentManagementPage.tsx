import { useSelector } from "react-redux";
import Button from "../../../UI/Button";
import AppointmentEdit from "./appointmentEdit/AppointmentEdit";
import AppointmentTable from "./AppointmentTable";
import DetailsCard from "./DetailsCard";
import { RootState } from "../../../../states/store";

export default function AppointmentManagementPage() {
  const { showDetails } = useSelector(
    (state: RootState) => state.appointmentReducer,
  );

  return (
    <main className="my-10 grid flex-grow px-4 lg:px-0">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 lg:mb-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Randevular</h1>
          <p className="text-slate-500">
            Mevcut randevularınızı görüntüleyebilir, düzenleyebilirsiniz.
          </p>
        </div>
        <div>
          <Button el="colored-link-button" to="/appointment">
            Randevu Oluştur
          </Button>
        </div>
      </div>
      <AppointmentTable />
      {showDetails && <DetailsCard />}
      {/* <AppointmentEdit /> */}
    </main>
  );
}
