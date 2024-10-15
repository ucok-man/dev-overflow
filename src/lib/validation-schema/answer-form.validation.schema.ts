import { z } from "zod";

export const AnswerFormValidationSchema = z.object({
  content: z.string().min(100),
});
