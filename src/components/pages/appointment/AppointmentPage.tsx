import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import AppointmentInfo from "./AppointmentInfo";
import PersonalInfo from "./PersonalInfo";
import MedicalInfo from "./MedicalInfo";
import { AppointmentFormSchema } from "./AppointmentFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type AppointmentForm = z.infer<typeof AppointmentFormSchema>;

export default function AppointmentPage() {
  const [index, setIndex] = useState<number>(0);
  const [currentSection, setCurrentSection] =
    useState<string>("Randevu Bilgileri");

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AppointmentForm>({
    resolver: zodResolver(AppointmentFormSchema),
  });

  useEffect(() => {
    const handleSections = () => {
      setCurrentSection(
        ["Randevu Bilgileri", "Kişisel Bilgiler", "Sağlık Bilgileri"][index],
      );
    };
    handleSections();
  }, [index]);

  const onSubmit: SubmitHandler<AppointmentForm> = (data) => {
    console.log(data);
  };
  return (
    <main className="mx-5 my-10 flex flex-grow flex-col gap-4 text-custom-dark-blue lg:mx-20">
      <h1 className="mb-4 text-4xl font-bold">Randevu Oluştur</h1>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">{currentSection}</h2>
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-custom-mid-blue">
          <p className="text-center text-xs font-bold text-secondary">
            {index + 1}/3
          </p>
        </div>
      </div>
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
      <div className="flex flex-col gap-4">
        {index >= 0 && index < 2 && (
          <Button
            el="wide-button"
            onClick={() => index < 2 && setIndex(index + 1)}
          >
            İleri
          </Button>
        )}
        {index > 0 && (
          <Button
            el="wide-button"
            onClick={() => index > 0 && setIndex(index - 1)}
          >
            Geri Dön
          </Button>
        )}
      </div>
    </main>
  );
}
