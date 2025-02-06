import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import AppointmentForm from "./appointmentForm/AppointmentForm";
import bannerImage from "/assets/Rectangle687.png";

export default function AppointmentPage() {
  const [index, setIndex] = useState<number>(0);
  const [currentSection, setCurrentSection] =
    useState<string>("Randevu Bilgileri");

  useEffect(() => {
    const handleSections = () => {
      setCurrentSection(
        ["Randevu Bilgileri", "Kişisel Bilgiler", "Sağlık Bilgileri"][index],
      );
    };
    handleSections();
  }, [index]);

  return (
    <main className="mx-5 my-10 flex flex-grow flex-col text-custom-dark-blue lg:mx-20">
      <h1 className="mb-6 text-4xl font-bold">Randevu Oluştur</h1>

      <div className="grid items-center gap-10 lg:grid-cols-12">
        <section className="lg:col-span-6 xl:col-span-7">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-3xl font-semibold">{currentSection}</h2>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-custom-mid-blue">
              <p className="text-center text-xs font-bold text-secondary">
                {index + 1}/3
              </p>
            </div>
          </div>
          <AppointmentForm index={index} currentSection={currentSection} />
          <div className="mt-6 flex flex-col gap-4">
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
        </section>
        <section className="hidden lg:col-span-6 lg:block xl:col-span-5">
          <img className="rounded-lg" src={bannerImage} alt="dentist photo" />
        </section>
      </div>
    </main>
  );
}
