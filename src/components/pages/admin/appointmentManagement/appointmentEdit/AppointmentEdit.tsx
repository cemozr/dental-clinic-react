import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../../../../UI/Button";
import EditForm from "./EditForm";

export default function AppointmentEdit() {
  return (
    <section className="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-secondary p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-custom-dark-blue">
          Randevu Detayı
        </h2>
        <Button el="icon-button">
          <IoMdCloseCircleOutline />
        </Button>
      </div>
      <div className="flex gap-10">
        <EditForm />
      </div>
    </section>
  );
}
