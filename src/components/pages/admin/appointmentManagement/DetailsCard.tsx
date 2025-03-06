import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/store";
import Button from "../../../UI/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdSettings, MdArrowForward, MdArrowBack } from "react-icons/md";
import {
  setEditMode,
  setShowDetails,
} from "../../../../states/appointmentSlice";
import { useState } from "react";

export default function DetailsCard() {
  const [index, setIndex] = useState<number>(0);
  const { selectedAppointment } = useSelector(
    (state: RootState) => state.appointmentReducer,
  );
  const dispatch = useDispatch();

  return (
    <section className="absolute left-1/2 top-1/2 z-10 grid min-w-96 -translate-x-1/2 -translate-y-96 transform gap-4 rounded-md border border-slate-300 bg-secondary p-5 text-custom-dark-blue backdrop-blur-md lg:-translate-y-80 lg:bg-transparent">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Randevu Detayı</h2>

        <div className="flex items-center gap-2">
          <Button
            el="icon-button"
            title="Düzenle"
            onClick={() => dispatch(setEditMode(selectedAppointment))}
          >
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

      <div className="animate-fade-in grid">
        <div className={`${index != 0 && "hidden"} grid gap-2`}>
          <span className="flex gap-2">
            <p className="font-semibold">Hekim:</p>
            <p>{selectedAppointment?.specialist}</p>
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
        <div className={`${index != 1 && "hidden"} grid gap-2`}>
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
        <div className={`${index != 2 && "hidden"} grid gap-2`}>
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
      <div className="flex justify-center gap-4">
        <Button
          el="icon-button"
          onClick={() => index > 0 && setIndex(index - 1)}
        >
          <MdArrowBack />
        </Button>
        <Button
          el="icon-button"
          onClick={() => index < 2 && setIndex(index + 1)}
        >
          <MdArrowForward />
        </Button>
      </div>
    </section>
  );
}
