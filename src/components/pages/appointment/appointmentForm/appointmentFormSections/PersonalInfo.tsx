import { tr } from "date-fns/locale/tr";
import DatePicker, { registerLocale } from "react-datepicker";
import { FaIdCard } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Controller,
  Control,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { type AppointmentForm } from "../AppointmentForm";

type PersonalInfoProps = {
  control: Control<any>;
  register: UseFormRegister<any>;
  errors: FieldErrors<AppointmentForm>;
};

export default function PersonalInfo({
  register,
  control,
  errors,
}: PersonalInfoProps) {
  registerLocale("tr", tr);

  return (
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
      {errors.address && <p className="text-error">{errors.address.message}</p>}
    </fieldset>
  );
}
