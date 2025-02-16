import { z } from "zod";

export const authSchema = z.object({
  mail: z
    .string()
    .email({ message: "Geçerli bir e-posta giriniz." })
    .min(1, "Bu alan boş bırakılamaz."),
  password: z.string().min(1, "Bu alan boş bırakılamaz."),
});
