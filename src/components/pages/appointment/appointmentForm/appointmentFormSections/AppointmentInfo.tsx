import specialists from "../../../../../data/specialists.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { tr } from "date-fns/locale/tr";
import Button from "../../../../UI/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Controller,
  UseFormRegister,
  Control,
  UseFormSetValue,
  FieldErrors,
} from "react-hook-form";
import { type AppointmentForm } from "../AppointmentForm";
import { useState } from "react";

type AppointmentInfoProps = {
  register: UseFormRegister<AppointmentForm>;
  control: Control<any>;
  setValue: UseFormSetValue<AppointmentForm>;
  errors: FieldErrors<AppointmentForm>;
};

export default function AppointmentInfo({
  register,
  control,
  setValue,
  errors,
}: AppointmentInfoProps) {
  registerLocale("tr", tr);

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
      <Controller
        name="appointmentDate"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <DatePicker
            {...field}
            className="h-12 w-full rounded-md pl-3"
            id="appointment-date"
            minDate={new Date()}
            placeholderText="gg/aa/yyyy"
            locale="tr"
            selected={field.value}
            onChange={(date) => field.onChange(date)}
          />
        )}
      />
      {errors.appointmentDate && (
        <p className="text-error">{errors.appointmentDate?.message}</p>
      )}
      <p className="font-semibold">Müsait Saatler</p>
      <ul className="grid grid-cols-5 gap-4 md:grid-cols-10 lg:grid-cols-6 xl:grid-cols-10">
        {workingHours.map((hour) => {
          return (
            <li key={hour}>
              <Button
                el="time-button"
                onClick={(e) => handleTimeSelect(hour, e)}
                className="bg-black"
                isSelected={selectedTime === hour}
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
  );
}
