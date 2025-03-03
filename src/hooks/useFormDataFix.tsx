//types
import { type AppointmentForm } from "../components/pages/appointment/appointmentForm/AppointmentForm";
import { type Appointment } from "../states/appointmentSlice";

export default function useFormDataFix(data: AppointmentForm) {
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
    allergies: data.allergies,
    medicalHistory: data.medicalHistory,
    medicalIssue: data.medicalIssue,
    medicines: data.medicines,
    name: data.name,
    tel: data.tel,
    address: data.address,
    status: "Beklemede",
  };
  return fixedData;
}
