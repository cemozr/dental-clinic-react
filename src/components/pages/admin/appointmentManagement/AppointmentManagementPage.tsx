import Button from "../../../UI/Button";
import AppointmentTable from "./AppointmentTable";

export default function AppointmentManagementPage() {
  return (
    <main className="mt-10 grid flex-grow gap-4">
      <div className="flex items-center justify-between">
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
