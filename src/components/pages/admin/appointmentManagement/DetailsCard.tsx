import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/store";
import Button from "../../../UI/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdSettings } from "react-icons/md";
import { setShowDetails } from "../../../../states/appointmentSlice";

export default function DetailsCard() {
  const { showDetails, selectedAppointment } = useSelector(
    (state: RootState) => state.appointmentReducer,
  );
  const dispatch = useDispatch();
  return (
    <section className="absolute left-1/2 top-1/2 z-10 grid w-5/6 -translate-x-1/2 -translate-y-96 transform gap-4 rounded-md border border-slate-300 p-5 text-custom-dark-blue backdrop-blur-md">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Randevu Detayı</h2>

        <div className="flex items-center gap-2">
          <Button el="icon-button" title="Düzenle">
            <MdSettings />
          </Button>
          <Button
            el="icon-button"
            title="Kapat"
            onClick={() => dispatch(setShowDetails(null))}
          >
            <IoMdCloseCircleOutline />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="grid gap-2">
          <span className="flex gap-2">
            <p className="font-semibold">Hekim:</p>
            <p>{selectedAppointment?.dentist}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold">Randevu Tarihi:</p>
            <p>{selectedAppointment?.appointmentDate}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold">Randevu Saati:</p>
            <p>{selectedAppointment?.appointmentTime}</p>
          </span>
          <span className="flex flex-col">
            <p className="font-semibold">Hastanın Rahatsızlığı:</p>
            <p>{selectedAppointment?.medicalIssue}</p>
          </span>
          <span className="flex flex-col">
            <p className="font-semibold">Ek Bilgi:</p>
            <p>{selectedAppointment?.extraInfo}</p>
          </span>
        </div>
        <div className="grid gap-2">
          <span className="flex gap-2">
            <p className="font-semibold">TCKN:</p>{" "}
            <p>{selectedAppointment?.idNumber}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold">Hasta Adı:</p>{" "}
            <p>{selectedAppointment?.name}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold">E-posta:</p>{" "}
            <p>{selectedAppointment?.mail}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold">Telefon:</p>{" "}
            <p>{selectedAppointment?.tel}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold">Doğum Tarihi:</p>{" "}
            <p>{selectedAppointment?.birthDate}</p>
          </span>
          <span className="flex gap-2">
            <p className="font-semibold">Cinsiyet:</p>{" "}
            <p>{selectedAppointment?.gender}</p>
          </span>
          <span className="flex flex-col">
            <p className="font-semibold">Adres:</p>{" "}
            <p>{selectedAppointment?.address}</p>
          </span>
        </div>
        <div className="grid gap-2">
          <span className="flex flex-col">
            <p className="font-semibold">Alerjiler:</p>{" "}
            <p>{selectedAppointment?.allergies}</p>
          </span>
          <span className="flex flex-col">
            <p className="font-semibold">Kullanılan ilaç ve Tedaviler:</p>{" "}
            <p>{selectedAppointment?.medicines}</p>
          </span>
          <span className="flex flex-col">
            <p className="font-semibold">Tıbbi Geçmiş:</p>{" "}
            <p>{selectedAppointment?.medicalHistory}</p>
          </span>
          <span className="flex flex-col">
            <p className="font-semibold">Aile Tıbbi Geçmişi:</p>{" "}
            <p>{selectedAppointment?.familyMedicalHistory}</p>
          </span>
        </div>
      </div>
    </section>
  );
}
