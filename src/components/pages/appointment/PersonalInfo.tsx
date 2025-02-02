import { tr } from "date-fns/locale/tr";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { FaIdCard } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function PersonalInfo() {
  registerLocale("tr", tr);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor="id-number" className="font-semibold">
        T.C. Kimlik Numarası
      </label>
      <div className="relative">
        <FaIdCard className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
        <input
          type="text"
          name="id-number"
          id="id-number"
          placeholder="TCKN"
          className="h-12 w-full rounded-md pl-8"
        />
      </div>
      <label htmlFor="name" className="font-semibold">
        İsim Soyisim
      </label>
      <div className="relative">
        <IoPersonOutline className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Tam isim"
          className="h-12 w-full rounded-md pl-8"
        />
      </div>
      <label htmlFor="mail" className="font-semibold">
        E-posta
      </label>
      <div className="relative">
        <GoMail className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
        <input
          type="text"
          name="mail"
          id="mail"
          placeholder="örnek@gmail.com"
          className="h-12 w-full rounded-md pl-8"
        />
      </div>
      <label htmlFor="tel" className="font-semibold">
        Telefon
      </label>
      <div className="relative">
        <FiPhone className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
        <input
          type="text"
          name="tel"
          id="tel"
          placeholder="599 999 99 99"
          className="h-12 w-full rounded-md pl-8"
        />
      </div>
      <label htmlFor="birth-date" className="font-semibold">
        Doğum Tarihi
      </label>
      <DatePicker
        className="h-12 w-full rounded-md pl-3"
        id="birth-date"
        name="birth-date"
        locale="tr"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <label htmlFor="gender" className="font-semibold">
        Cinsiyet
      </label>
      <div className="relative">
        {" "}
        <IoPersonOutline className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
        <select
          name="gender"
          id="gender"
          className="h-12 w-full rounded-md pl-8"
        >
          <option>Erkek</option>
          <option>Kadın</option>
          <option>Diğer</option>
        </select>
      </div>
      <label htmlFor="address" className="font-semibold">
        Adres
      </label>
      <div className="relative">
        <IoLocationOutline className="absolute left-2 top-3 text-xl text-gray-500" />
        <textarea
          name="address"
          id="address"
          rows={2}
          placeholder="mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl"
          className="w-full rounded-md p-3 pl-8"
        ></textarea>
      </div>
    </fieldset>
  );
}
