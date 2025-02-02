import AppointmentInfo from "./AppointmentInfo";
import MedicalInfo from "./MedicalInfo";
import PersonalInfo from "./PersonalInfo";

type AppointmentFormProps = {
  currentSection: "Randevu Bilgileri" | "Kişisel Bilgiler" | "Sağlık Bilgileri";
};

export default function AppointmentForm({
  currentSection,
}: AppointmentFormProps) {
  return (
    <form>
      {currentSection === "Randevu Bilgileri" ? (
        <AppointmentInfo />
      ) : currentSection === "Kişisel Bilgiler" ? (
        <PersonalInfo />
      ) : (
        <MedicalInfo />
      )}
    </form>
  );
}
