import z from "zod";

export const employeeFormSchema = z.object({
  name: z.string().min(1, "İsim çok kısa."),
  mail: z.string().email({ message: "Geçerli bir e-posta giriniz." }),
  address: z.string().min(1, "Bu alan boş bırakılamaz"),
  tel: z
    .string()
    .min(7, "Numara eksik.")
    .max(17, "Numaranız standart uzunluğu aşıyor. (bkz. E.164)")
    .regex(
      /^\+([1-9][0-9]{0,4})\s*([1-9][0-9\s]{1,14})$/,
      "Geçerli bir numara giriniz. Alan kodu eklemeyi unutmayınız. Ör. +90 544 *** ****",
    ),
  title: z.string().min(1, "Bu alan boş bırakılamaz"),
  type: z.string().min(1, "Bu alan boş bırakılamaz"),
  photo: z
    .instanceof(FileList)
    .refine((fileList) => fileList.length > 0, {
      message: "Bir görsel seçiniz",
    })
    .transform((fileList) => fileList[0]),
});
