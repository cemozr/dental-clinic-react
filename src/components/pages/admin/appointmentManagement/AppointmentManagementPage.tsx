import Button from "../../../UI/Button";
import AppointmentTable from "./AppointmentTable";

export default function AppointmentManagementPage() {
  return (
    <main className="my-10 grid flex-grow px-4 lg:px-0">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 lg:mb-4 lg:flex-row lg:items-center">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Randevular</h3>
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
    </main>
  );
}
