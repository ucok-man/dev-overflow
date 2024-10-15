"use client";

import { useToast } from "@/hooks/use-toast";
import { postCreateAnswer } from "@/lib/actions";
import { AnswerFormValidationSchema } from "@/lib/validation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import { Form, FormField } from "../../ui/form";
import ContentFormControl from "./content-form-control";

type Props = {
  qid: string;
  createdById: string;
  questionForAi: { title: string; content: string };
};

export default function CreateAnswerBox(props: Props) {
  const editorRef = useRef<Editor>();
  const { toast } = useToast();

  const pathname = usePathname();
  const [isSubmittingAI, setIsSubmittingAI] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof AnswerFormValidationSchema>>({
    resolver: zodResolver(AnswerFormValidationSchema),
    defaultValues: {
      content: "",
    },
  });

  const handleGenerateAI = async () => {
    setIsSubmittingAI(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/chatgpt`,
        {
          method: "POST",
          body: JSON.stringify({
            title: props.questionForAi.title,
            content: props.questionForAi.content,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`${response}`);
      }

      // Convert plain text to HTML format
      const {
        reply: { content },
      }: { reply: { content: string } } = await response.json();
      const contentHTML = content.replace(/```html|```/g, "");

      if (editorRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const editor = editorRef.current as any;
        editor.setContent(contentHTML);
      }

      toast({
        title: `Success generating answer`,
        variant: "default",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmittingAI(false);
    }
  };

  const handleOnSubmit = async (
    values: z.infer<typeof AnswerFormValidationSchema>
  ) => {
    setIsSubmitting(true);

    try {
      await postCreateAnswer({
        content: values.content,
        createdById: props.createdById,
        qid: props.qid,
        revalidatePath: pathname,
      });

      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
        {/* Context Title */}
        <h4 className="paragraph-semibold">Write your answer here</h4>

        {/* AI Button */}
        <Button
          className="btn light-border-2 gap-1.5 rounded-md px-4 py-2.5 text-primary-500 shadow-none dark:text-primary-500"
          onClick={handleGenerateAI}
        >
          <Image
            src="/assets/icons/stars.svg"
            alt="star"
            width={12}
            height={12}
            className="object-contain"
          />
          {isSubmittingAI && <div>Generating...</div>}
          {!isSubmittingAI && <div> Generate AI Answer </div>}
        </Button>
      </div>

      {/* Submit Form */}
      <Form {...form}>
        <form
          className="mt-6 flex w-full flex-col gap-10"
          onSubmit={form.handleSubmit(handleOnSubmit)}
        >
          <FormField
            key={form.formState.submitCount}
            control={form.control}
            name="content"
            render={(args) => (
              <ContentFormControl field={args.field} editorRef={editorRef} />
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              className="primary-gradient w-fit text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
