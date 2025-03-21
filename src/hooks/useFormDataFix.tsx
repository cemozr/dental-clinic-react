//types
import { type AppointmentForm } from "../components/pages/appointment/appointmentForm/AppointmentForm";
import { type Appointment } from "../states/appointmentSlice";

export default function useFormDataFix(data: AppointmentForm) {
  const localAppointmentDate = new Date(data.appointmentDate!);
  localAppointmentDate.setMinutes(
    localAppointmentDate.getMinutes() -
      localAppointmentDate.getTimezoneOffset(),
  );

  const formattedAppointmentDate: string = localAppointmentDate
    .toISOString()
    .split("T")[0];

  const localBirthDate = new Date(data.birthDate!);
  localBirthDate.setMinutes(
    localBirthDate.getMinutes() - localBirthDate.getTimezoneOffset(),
  );
  const formattedBirthDate: string = localBirthDate.toISOString().split("T")[0];

  const fixedData: Appointment = {
    appointmentDate: formattedAppointmentDate,
    appointmentTime: data.appointmentTime,
    birthDate: formattedBirthDate,
    specialist: data.specialist,
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
