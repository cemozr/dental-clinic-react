import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import AppointmentInfo from "./appointmentFormSections/AppointmentInfo";
import PersonalInfo from "./appointmentFormSections/PersonalInfo";
import MedicalInfo from "./appointmentFormSections/MedicalInfo";
import { AppointmentFormSchema } from "./AppointmentFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../UI/Button";

export type AppointmentForm = z.infer<typeof AppointmentFormSchema>;

type AppointmentFormProps = {
  index: number;
  currentSection: string;
};

export default function AppointmentForm({
  index,
  currentSection,
}: AppointmentFormProps) {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AppointmentForm>({
    resolver: zodResolver(AppointmentFormSchema),
  });

  const onSubmit: SubmitHandler<AppointmentForm> = (data) => {
    console.log(data);
  };
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
