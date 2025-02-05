import z from "zod";

export const AppointmentFormSchema = z.object({
  specialist: z.string().min(1, "Lütfen bir hekim seçiniz."),
  appointmentDate: z
    .date()
    .nullable()
    .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
      message: "Bir tarih seçiniz",
    }),
  appointmentTime: z.string().min(1, "Lütfen saat seçiniz."),

  medicalIssue: z
    .string()
    .min(1, "Bu alan boş bırakılamaz.")
    .max(300, "Maksimum 300 karakter giriniz."),
  extraInfo: z
    .string()
    .min(1, "Bu alan boş bırakılamaz.")
    .max(300, "Maksimum 300 karakter giriniz."),
  idNumber: z
    .string()
    .length(11, "T.C. kimlik numaranız 11 haneli olmalıdır.")
    .regex(/^[1-9][0-9]{10}$/, "Geçersiz kimlik numarası."),
  name: z
    .string()
    .min(1, "Bu alan boş bırakılamaz.")
    .max(100, "Geçerli bir isim giriniz."),
  mail: z
    .string()
    .min(1, "Bu alan boş bırakılamaz.")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Geçerli bir e-posta giriniz.",
    ),
  tel: z
    .string()
    .min(7, "Numara eksik.")
    .max(17, "Numaranız standart uzunluğu aşıyor. (bkz. E.164)")
    .regex(
      /^\+([1-9][0-9]{0,4})\s*([1-9][0-9\s]{1,14})$/,
      "Geçerli bir numara giriniz. Alan kodu eklemeyi unutmayınız. Ör. +90 544 *** ****",
    ),
  birthDate: z
    .date()
    .nullable()
    .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
      message: "Bir tarih seçiniz",
    }),
  gender: z.string().min(1, "Lütfen cinsiyet seçiniz."),
  address: z
    .string()
    .min(1, "Bu alan boş bırakılamaz")
    .max(200, "Adres çok uzun lütfen sadeleştiriniz."),
  allergies: z
    .string()
    .min(1, "Bu alan boş bırakılamaz")
    .max(300, "Maksimum 300 karakter giriniz."),
  medicines: z
    .string()
    .min(1, "Bu alan boş bırakılamaz")
    .max(300, "Maksimum 300 karakter giriniz."),
  medicalHistory: z
    .string()
    .min(1, "Bu alan boş bırakılamaz")
    .max(300, "Maksimum 300 karakter giriniz."),
  familyMedicalHistory: z
    .string()
    .min(1, "Bu alan boş bırakılamaz")
    .max(300, "Maksimum 300 karakter giriniz."),
  privacyCheck: z.boolean().refine((val) => val === true, {
    message: "Lütfen rıza metnini onaylayınız.",
  }),
});
