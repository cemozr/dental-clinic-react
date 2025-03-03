import specialists from "../../../../../data/specialists.json";
import { AppDispatch } from "../../../../../states/store";
import { useDispatch } from "react-redux";
import { AppointmentForm } from "../../../appointment/appointmentForm/AppointmentForm";
import { AppointmentFormSchema } from "../../../appointment/appointmentForm/AppointmentFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  ControllerRenderProps,
  FieldErrors,
  useForm,
} from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { tr } from "date-fns/locale/tr";
import { FaIdCard, FaRegClock } from "react-icons/fa";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";

export default function EditForm() {
  const dispatch: AppDispatch = useDispatch();

  registerLocale("tr", tr);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<AppointmentForm>({
    resolver: zodResolver(AppointmentFormSchema),
  });

  return (
    <form action="" className="grid w-full grid-cols-3 gap-4">
      <fieldset id="appointment-info-section" className="flex flex-col gap-4">
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
        <div className="relative">
          <FaRegClock className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
          <input
            type="text"
            id="appointment-date"
            placeholder="gg/aa/yyyy"
            className="h-12 w-full rounded-md pl-8"
            {...register("appointmentDate")}
          />
        </div>
        {errors.appointmentDate && (
          <p className="text-error">{errors.appointmentDate?.message}</p>
        )}
        <label htmlFor="appointment-time" className="font-semibold">
          Randevu Saati
        </label>
        <div className="relative">
          <FaRegClock className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
          <input
            type="text"
            id="appointment-time"
            placeholder="Saat"
            className="h-12 w-full rounded-md pl-8"
            {...register("appointmentTime")}
          />
        </div>
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
          Ek Bilgi
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

      <fieldset id="personal-info-section" className="flex flex-col gap-2">
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
        <Controller
          name="birthDate"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <DatePicker
              className="h-12 w-full rounded-md pl-3"
              id="birth-date"
              locale="tr"
              dateFormat="dd/MM/yyyy"
              placeholderText="gg/aa/yyyy"
              maxDate={new Date()}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
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
            defaultValue=""
            {...register("gender")}
          >
            <option>Erkek</option>
            <option>Kadın</option>
            <option>Diğer</option>
          </select>
          <IoMdArrowDropdown className="absolute right-6 top-1/2 -translate-y-1/2 transform text-lg" />
        </div>
        {errors.gender && <p className="text-error">{errors.gender.message}</p>}
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
      <fieldset id="medical-info-section" className="flex flex-col gap-4">
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
        <div className="hidden gap-2">
          <input
            checked
            type="checkbox"
            id="privacy-check"
            {...register("privacyCheck")}
          />
          <p>
            Kişisel bilgilerimi ve sağlık bilgilerimi tarafınızla paylaşmayı ve
            bilgilerimin tarafınızca saklanmasını onaylıyorum
          </p>
        </div>
        {errors.privacyCheck && (
          <p className="text-error">{errors.privacyCheck.message}</p>
        )}
      </fieldset>
    </form>
  );
}
