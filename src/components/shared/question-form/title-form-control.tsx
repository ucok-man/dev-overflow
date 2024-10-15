import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionFormValidationSchema } from "@/lib/validation-schema";
import { ControllerRenderProps } from "react-hook-form";
import { z } from "zod";

type Props = {
  field: ControllerRenderProps<
    z.infer<typeof QuestionFormValidationSchema>,
    "title"
  >;
};

export default function TitleFormControl({ field }: Props) {
  return (
    <FormItem className="flex w-full flex-col">
      <FormLabel className="paragraph-semibold text-dark400_light800">
        Question Title <span className="text-primary-500">*</span>
      </FormLabel>
      <FormControl className="mt-3.5">
        <Input
          className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
          {...field}
        />
      </FormControl>
      <FormDescription className="body-regular mt-2.5 text-light-500">
        Be specific and imagine you&apos;re asking a question to another person.
      </FormDescription>
      <FormMessage className="text-red-500" />
    </FormItem>
  );
}
