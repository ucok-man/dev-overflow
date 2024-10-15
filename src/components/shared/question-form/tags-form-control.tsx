import { Badge } from "@/components/ui/badge";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionFormValidationSchema } from "@/lib/validation-schema/question-form.validation.schema";
import Image from "next/image";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  field: ControllerRenderProps<
    z.infer<typeof QuestionFormValidationSchema>,
    "tags"
  >;

  type: "edit" | "create";
  form: ReturnType<
    typeof useForm<z.infer<typeof QuestionFormValidationSchema>>
  >;
};

export default function TagsFormControl({ field, type, form }: Props) {
  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: Props["field"]
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters.",
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (tag: string, field: Props["field"]) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue("tags", newTags);
  };

  return (
    <FormItem className="flex w-full flex-col">
      <FormLabel className="paragraph-semibold text-dark400_light800">
        Tags <span className="text-primary-500">*</span>
      </FormLabel>
      <FormControl className="mt-3.5">
        <>
          <Input
            disabled={type === "edit"}
            className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
            placeholder="Add tags..."
            onKeyDown={(e) => handleInputKeyDown(e, field)}
          />

          {field.value.length > 0 && (
            <div className="flex-start mt-2.5 gap-2.5">
              {field.value.map((tag: string) => (
                <Badge
                  key={tag}
                  className="subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                  onClick={() =>
                    type !== "edit" ? handleTagRemove(tag, field) : () => {}
                  }
                >
                  {tag}
                  {type !== "edit" && (
                    <Image
                      src="/assets/icons/close.svg"
                      alt="Close icon"
                      width={12}
                      height={12}
                      className="cursor-pointer object-contain invert-0 dark:invert"
                    />
                  )}
                </Badge>
              ))}
            </div>
          )}
        </>
      </FormControl>
      <FormDescription className="body-regular mt-2.5 text-light-500">
        Add up to 3 tags to describe what your question is about. You need to
        press enter to add a tag.
      </FormDescription>
      <FormMessage className="text-red-500" />
    </FormItem>
  );
}
