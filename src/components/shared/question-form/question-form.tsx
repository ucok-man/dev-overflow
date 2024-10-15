"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { postCreateQuestion } from "@/lib/actions";
import { postEditQuestion } from "@/lib/actions/post-edit-question.action";
import { QuestionFormValidationSchema } from "@/lib/validation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ExplanationFormControl from "./explanation-form-control";
import TagsFormControl from "./tags-form-control";
import TitleFormControl from "./title-form-control";

type Props =
  | {
      type: "create";
      uid: string;
    }
  | {
      type: "edit";
      schema: z.infer<typeof QuestionFormValidationSchema>;
      qid: string;
    };

export default function QuestionForm(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof QuestionFormValidationSchema>>({
    resolver: zodResolver(QuestionFormValidationSchema),
    defaultValues: {
      title: (props.type === "edit" && props.schema.title) || "",
      explanation: (props.type === "edit" && props.schema.explanation) || "",
      tags: (props.type === "edit" && props.schema.tags) || [],
    },
  });

  async function onSubmit(
    values: z.infer<typeof QuestionFormValidationSchema>
  ) {
    try {
      setIsSubmitting(true);
      if (props.type === "edit") {
        await postEditQuestion({
          qid: props.qid,
          content: props.schema.explanation,
          title: props.schema.title,
          tags: props.schema.tags,
          revalidatePath: pathname,
        });

        router.push(`/question/${props.qid}`);
      }

      if (props.type === "create") {
        await postCreateQuestion({
          title: values.title,
          content: values.explanation,
          tags: values.tags,
          createdById: props.uid,
          revalidatedPath: pathname,
        });
        router.push("/");
      }
    } catch (error) {
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        {/* Form Control Title */}
        <FormField
          control={form.control}
          name="title"
          render={(arg) => <TitleFormControl field={arg.field} />}
        />

        {/* Form Control explanation */}
        <FormField
          control={form.control}
          name="explanation"
          render={(arg) => (
            <ExplanationFormControl
              field={arg.field}
              initialValue={
                props.type === "edit" ? props.schema.explanation : ""
              }
            />
          )}
        />

        {/* Form Control tags */}
        <FormField
          control={form.control}
          name="tags"
          render={(arg) => (
            <TagsFormControl field={arg.field} form={form} type={props.type} />
          )}
        />

        <Button
          type="submit"
          className="primary-gradient w-fit !text-light-900"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <>{props.type === "edit" ? "Editing..." : "Posting..."}</>
          )}
          {!isSubmitting && (
            <>{props.type === "edit" ? "Edit Question" : "Ask a Question"}</>
          )}
        </Button>
      </form>
    </Form>
  );
}
