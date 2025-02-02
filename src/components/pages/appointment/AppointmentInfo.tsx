import { useState } from "react";
import specialists from "../../../data/specialists.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { tr } from "date-fns/locale/tr";
import Button from "../../UI/Button";

export default function AppointmentInfo() {
  registerLocale("tr", tr);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
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

  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor="specialist" className="font-semibold">
        Hekim Seçiniz
      </label>
      <select
        name="specialist"
        id="specialist"
        className="h-12 rounded-md text-center font-semibold"
      >
        {specialists.specialists.map((specialist, i) => {
          return (
            <option key={i} value={specialist.header}>
              {specialist.header}
            </option>
          );
        })}
      </select>
      <label htmlFor="appointment-date" className="font-semibold">
        Randevu Tarihi
      </label>
      <DatePicker
        className="h-12 w-full rounded-md pl-3"
        id="appointment-date"
        name="appointment-date"
        locale="tr"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <p className="font-semibold">Müsait Saatler</p>
      <ul className="grid grid-cols-5 gap-2">
        {workingHours.map((hour) => {
          return (
            <li key={hour}>
              <Button el="time-button">{hour}</Button>
            </li>
          );
        })}
      </ul>
      <label htmlFor="medical-issue" className="font-semibold">
        Hastanın Rahatsızlığı
      </label>
      <textarea
        id="medical-issue"
        name="medical-issue"
        rows={3}
        placeholder="Hastanın rahatsızlığı veya alınmak istenen hizmet"
        className="rounded-md p-3"
      />
      <label htmlFor="extra-info" className="font-semibold">
        Eklemek İstediğiniz Bir Bilgi (varsa)
      </label>
      <textarea
        id="extra-info"
        name="extra-info"
        rows={3}
        className="rounded-md p-3"
        placeholder="Merak ettiğiniz bir konu veya iletmek istediğiniz ekstra bir bilgi"
      />
    </fieldset>
  );
}
