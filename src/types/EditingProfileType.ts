import { z } from "zod";

export const EditinProfileScheme = z.object({
  firstName: z.string(),
  lastName: z.string(),
  city: z.string(),
  phone: z.string(),
//   email: z.string().email("Проверьте правильность ввода электронной почты"),
});

export type EditinProfileType = z.infer<typeof EditinProfileScheme>;
