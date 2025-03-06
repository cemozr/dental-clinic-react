import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import AppointmentInfo from "./appointmentFormSections/AppointmentInfo";
import PersonalInfo from "./appointmentFormSections/PersonalInfo";
import MedicalInfo from "./appointmentFormSections/MedicalInfo";
import { AppointmentFormSchema } from "./AppointmentFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../UI/Button";
import { useDispatch } from "react-redux";
import { createAppointment } from "../../../../states/appointmentSlice";
import { AppDispatch } from "../../../../states/store";
import { useEffect } from "react";
import useFormDataFix from "../../../../hooks/useFormDataFix";

export type AppointmentForm = z.infer<typeof AppointmentFormSchema>;

type AppointmentFormProps = {
  index: number;
  currentSection?: string;
};

export default function AppointmentForm({ index }: AppointmentFormProps) {
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
    const fixedData = useFormDataFix(data);

    dispatch(createAppointment(fixedData));
  };
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      {index === 0 ? (
        <AppointmentInfo
          register={register}
          control={control}
          setValue={setValue}
          errors={errors as FieldErrors<AppointmentForm>}
        />
      ) : index === 1 ? (
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
