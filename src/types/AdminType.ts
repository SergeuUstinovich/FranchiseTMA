import { z } from "zod";

export const AdminScheme = z.object({
  tg_id: z.string().nonempty('Обязательно для заполнения'),
  amount: z.string().nonempty('Обязательно для заполнения'),
});

export type AdminType = z.infer<typeof AdminScheme>;