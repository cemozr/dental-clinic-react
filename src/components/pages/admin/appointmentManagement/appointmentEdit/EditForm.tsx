import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaIdCard } from "react-icons/fa";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { z } from "zod";
import { editFormSchema } from "./editFormSchema";
import { useState } from "react";
import Button from "../../../../UI/Button";
import specialists from "../../../../../data/specialists.json";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../states/store";
import {
  Appointment,
  editAppointment,
} from "../../../../../states/appointmentSlice";

type EditForm = z.infer<typeof editFormSchema>;
type EditFormProps = {
  index: number;
};

export default function EditForm({ index }: EditFormProps) {
  const { selectedAppointment } = useSelector(
    (state: RootState) => state.appointmentReducer,
  );
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditForm>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      specialist: selectedAppointment?.specialist,
      appointmentDate: selectedAppointment?.appointmentDate,
      appointmentTime: selectedAppointment?.appointmentTime,
      medicalIssue: selectedAppointment?.medicalIssue,
      extraInfo: selectedAppointment?.extraInfo,
      idNumber: selectedAppointment?.idNumber,
      name: selectedAppointment?.name,
      mail: selectedAppointment?.mail,
      tel: selectedAppointment?.tel,
      birthDate: selectedAppointment?.birthDate,
      gender: selectedAppointment?.gender,
      address: selectedAppointment?.address,
      allergies: selectedAppointment?.allergies,
      medicines: selectedAppointment?.medicines,
      medicalHistory: selectedAppointment?.medicalHistory,
      familyMedicalHistory: selectedAppointment?.familyMedicalHistory,
    },
  });

  const onSubmit: SubmitHandler<EditForm> = (
    data: Omit<Appointment, "status">,
  ) => {
    dispatch(editAppointment({ data: data, id: selectedAppointment?.id }));
  };

  const workingHours: string[] = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const handleTimeSelect = (
    time: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setValue("appointmentTime", time);
    setSelectedTime(time);
  };
  return (
    <form
      className="animate-fade-in grid gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {index === 0 ? (
        //Appointment Section
        <fieldset className="flex flex-col gap-4">
          <label htmlFor="specialist" className="font-semibold">
            Hekim Seçiniz
          </label>
          <div className="relative">
            <select
              id="specialist"
              className="h-12 w-full appearance-none rounded-md text-center font-semibold"
              {...register("specialist")}
            >
              {specialists.specialists.map((specialist, i) => {
                return (
                  <option key={i} value={specialist.header}>
                    {specialist.header}
                  </option>
                );
              })}
            </select>
            <IoMdArrowDropdown className="absolute right-6 top-1/2 -translate-y-1/2 transform text-lg" />
          </div>
          {errors.specialist && (
            <p className="text-error">{errors.specialist?.message}</p>
          )}
          <label htmlFor="appointment-date" className="font-semibold">
            Randevu Tarihi
          </label>
          <input
            type="text"
            id="appointmentDate"
            placeholder="yyyy/aa/gg"
            className="h-12 w-full rounded-md pl-4"
            {...register("appointmentDate")}
          />
          {errors.appointmentDate && (
            <p className="text-error">{errors.appointmentDate?.message}</p>
          )}
          <p className="font n-semibold">Randevu Saati</p>
          <ul className="grid grid-cols-5 gap-4 md:grid-cols-10 lg:grid-cols-6 xl:grid-cols-10">
            {workingHours.map((hour) => {
              return (
                <li key={hour}>
                  <Button
                    el="time-button"
                    onClick={(e) => handleTimeSelect(hour, e)}
                    className="bg-black"
                    isSelected={
                      selectedAppointment?.appointmentTime === hour ||
                      selectedTime === hour
                    }
                  >
                    {hour}
                  </Button>
                </li>
              );
            })}
          </ul>
          {errors.appointmentTime && (
            <p className="text-error">{errors.appointmentTime?.message}</p>
          )}
          <label htmlFor="medical-issue" className="font-semibold">
            Hastanın Rahatsızlığı
          </label>
          <textarea
            id="medical-issue"
            rows={3}
            placeholder="Hastanın rahatsızlığı veya alınmak istenen hizmet"
            className="rounded-md p-3"
            {...register("medicalIssue")}
          />
          {errors.medicalIssue && (
            <p className="text-error">{errors.medicalIssue?.message}</p>
          )}
          <label htmlFor="extra-info" className="font-semibold">
            Eklemek İstediğiniz Bir Bilgi (varsa)
          </label>
          <textarea
            id="extra-info"
            rows={3}
            className="rounded-md p-3"
            placeholder="Merak ettiğiniz bir konu veya iletmek istediğiniz ekstra bir bilgi"
            {...register("extraInfo")}
          />
          {errors.extraInfo && (
            <p className="text-error">{errors.extraInfo?.message}</p>
          )}
        </fieldset>
      ) : index === 1 ? (
        //Personal Info Section
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="id-number" className="font-semibold">
            T.C. Kimlik Numarası
          </label>
          <div className="relative">
            <FaIdCard className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
            <input
              type="text"
              id="id-number"
              placeholder="TCKN"
              className="h-12 w-full rounded-md pl-8"
              {...register("idNumber")}
            />
          </div>
          {errors.idNumber && (
            <p className="text-error">{errors.idNumber.message}</p>
          )}
          <label htmlFor="name" className="font-semibold">
            İsim Soyisim
          </label>
          <div className="relative">
            <IoPersonOutline className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
            <input
              type="text"
              id="name"
              placeholder="Tam isim"
              className="h-12 w-full rounded-md pl-8"
              {...register("name")}
            />
          </div>
          {errors.name && <p className="text-error">{errors.name.message}</p>}
          <label htmlFor="mail" className="font-semibold">
            E-posta
          </label>
          <div className="relative">
            <GoMail className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
            <input
              type="email"
              id="mail"
              placeholder="örnek@gmail.com"
              className="h-12 w-full rounded-md pl-8"
              {...register("mail")}
            />
          </div>
          {errors.mail && <p className="text-error">{errors.mail.message}</p>}
          <label htmlFor="tel" className="font-semibold">
            Telefon
          </label>
          <div className="relative">
            <FiPhone className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
            <input
              type="text"
              id="tel"
              placeholder="+90 599 999 9999"
              className="h-12 w-full rounded-md pl-8"
              {...register("tel")}
            />
          </div>
          {errors.tel && <p className="text-error">{errors.tel.message}</p>}
          <label htmlFor="birth-date" className="font-semibold">
            Doğum Tarihi
          </label>
          <input
            type="text"
            id="birthDate"
            placeholder="yyyy/aa/gg"
            className="h-12 w-full rounded-md pl-4"
            {...register("birthDate")}
          />
          {errors.birthDate && (
            <p className="text-error">{errors.birthDate.message}</p>
          )}
          <label htmlFor="gender" className="font-semibold">
            Cinsiyet
          </label>
          <div className="relative">
            {" "}
            <IoPersonOutline className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
            <select
              id="gender"
              className="h-12 w-full appearance-none rounded-md pl-8"
              {...register("gender")}
            >
              <option>Erkek</option>
              <option>Kadın</option>
              <option>Diğer</option>
            </select>
            <IoMdArrowDropdown className="absolute right-6 top-1/2 -translate-y-1/2 transform text-lg" />
          </div>
          {errors.gender && (
            <p className="text-error">{errors.gender.message}</p>
          )}
          <label htmlFor="address" className="font-semibold">
            Adres
          </label>
          <div className="relative">
            <IoLocationOutline className="absolute left-2 top-3 text-xl text-gray-500" />
            <textarea
              id="address"
              rows={2}
              placeholder="mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl"
              className="w-full rounded-md p-3 pl-8"
              {...register("address")}
            ></textarea>
          </div>
          {errors.address && (
            <p className="text-error">{errors.address.message}</p>
          )}
        </fieldset>
      ) : (
        //Medical Info Section
        <fieldset className="flex flex-col gap-4">
          <label htmlFor="allergies" className="font-semibold">
            Alerjiler
          </label>
          <textarea
            id="allergies"
            rows={3}
            className="rounded-md p-3"
            placeholder="Lateks, çeşitli metaller, lokal anestezi alerjileri vb. "
            {...register("allergies")}
          />
          {errors.allergies && (
            <p className="text-error">{errors.allergies.message}</p>
          )}
          <label htmlFor="medicines" className="font-semibold">
            Kullanılan İlaçlar ve Tedaviler
          </label>
          <textarea
            id="medicines"
            rows={3}
            className="rounded-md p-3"
            placeholder="Antibiyotik, ağrı kesici vb. "
            {...register("medicines")}
          />
          {errors.medicines && (
            <p className="text-error">{errors.medicines.message}</p>
          )}
          <label htmlFor="medical-history" className="font-semibold">
            Tıbbi Geçmiş
          </label>
          <textarea
            id="medical-history"
            rows={3}
            className="rounded-md p-3"
            placeholder="Diyabet, hipertansiyon (yüksek tansiyon), kalp hastalıkları..."
            {...register("medicalHistory")}
          />
          {errors.medicalHistory && (
            <p className="text-error">{errors.medicalHistory.message}</p>
          )}
          <label htmlFor="family-medical-history" className="font-semibold">
            Aile Tıbbi Geçmişi
          </label>
          <textarea
            id="family-medical-history"
            rows={3}
            className="rounded-md p-3"
            placeholder="Genetik rahatsızlıklar, diş eti hastalıkları, çürükler veya çene problemleri vb."
            {...register("familyMedicalHistory")}
          />
          {errors.familyMedicalHistory && (
            <p className="text-error">{errors.familyMedicalHistory.message}</p>
          )}
        </fieldset>
      )}
      {index === 2 && (
        <Button type="submit" el="wide-button">
          Randevu Oluştur
        </Button>
      )}
    </form>
  );
}
