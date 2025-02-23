import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import AppointmentInfo from "./appointmentFormSections/AppointmentInfo";
import PersonalInfo from "./appointmentFormSections/PersonalInfo";
import MedicalInfo from "./appointmentFormSections/MedicalInfo";
import { AppointmentFormSchema } from "./AppointmentFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../UI/Button";
import { useDispatch } from "react-redux";
import {
  createAppointment,
  type Appointment,
} from "../../../../states/appointmentSlice";
import { AppDispatch } from "../../../../states/store";
import { useEffect } from "react";

export type AppointmentForm = z.infer<typeof AppointmentFormSchema>;

type AppointmentFormProps = {
  index: number;
  currentSection: string;
};

export default function AppointmentForm({
  index,
  currentSection,
}: AppointmentFormProps) {
  const dispatch: AppDispatch = useDispatch();

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

  const onSubmit: SubmitHandler<AppointmentForm> = (data) => {
    const formattedAppointmentDate: string = data
      .appointmentDate!.toISOString()
      .split("T")[0];
    const formattedBirthDate: string = data
      .birthDate!.toISOString()
      .split("T")[0];

    const fixedData: Appointment = {
      appointmentDate: formattedAppointmentDate,
      appointmentTime: data.appointmentTime,
      birthDate: formattedBirthDate,
      dentist: data.specialist,
      extraInfo: data.extraInfo,
      familyMedicalHistory: data.familyMedicalHistory,
      gender: data.gender,
      idNumber: data.idNumber,
      mail: data.mail,
      medicalHistory: data.medicalHistory,
      medicalIssue: data.medicalIssue,
      medicines: data.medicines,
      name: data.name,
      tel: data.tel,
      status: "Beklemede",
    };

    dispatch(createAppointment(fixedData));
  };
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      {currentSection === "Randevu Bilgileri" ? (
        <AppointmentInfo
          register={register}
          control={control}
          setValue={setValue}
          errors={errors as FieldErrors<AppointmentForm>}
        />
      ) : currentSection === "Kişisel Bilgiler" ? (
        <PersonalInfo
          register={register}
          control={control}
          errors={errors as FieldErrors<AppointmentForm>}
        />
      ) : (
        <MedicalInfo
          register={register}
          errors={errors as FieldErrors<AppointmentForm>}
        />
      )}
      {index === 2 && (
        <Button type="submit" el="wide-button">
          Randevu Oluştur
        </Button>
      )}
    </form>
  );
}
