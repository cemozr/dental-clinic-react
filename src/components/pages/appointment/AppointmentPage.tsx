import { useEffect, useState } from "react";
import Button from "../../UI/Button";
import AppointmentForm from "./AppointmentForm";

export default function AppointmentPage() {
  const [index, setIndex] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<
    "Randevu Bilgileri" | "Kişisel Bilgiler" | "Sağlık Bilgileri"
  >("Randevu Bilgileri");

  useEffect(() => {
    const handleSections = () => {
      if (index === 0) {
        setCurrentSection("Randevu Bilgileri");
      }
      if (index === 1) {
        setCurrentSection("Kişisel Bilgiler");
      }
      if (index === 2) {
        setCurrentSection("Sağlık Bilgileri");
      }
    };
    handleSections();
  }, [index]);

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
      <AppointmentForm currentSection={currentSection} />
      <div className="flex flex-col gap-4">
        {index > 0 && index <= 2 && (
          <Button
            el="wide-button"
            onClick={() => index > 0 && setIndex(index - 1)}
          >
            Geri Dön
          </Button>
        )}
        {index >= 0 && index < 2 && (
          <Button
            el="wide-button"
            onClick={() => index < 2 && setIndex(index + 1)}
          >
            İleri
          </Button>
        )}
        {index === 2 && <Button el="wide-button">Randevu Oluştur</Button>}
      </div>
    </main>
  );
}
