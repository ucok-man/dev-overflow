import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { ControllerRenderProps } from "react-hook-form";

type ExplanationField = ControllerRenderProps<
  {
    title: string;
    explanation: string;
    tags: string[];
  },
  "explanation"
>;

type Props = {
  field: ExplanationField;
};

export default function ExplanationFormControl({ field }: Props) {
  const editorRef = useRef<Editor>();
  const { resolvedTheme } = useTheme();

  return (
    <FormItem className="flex w-full flex-col gap-3">
      <FormLabel className="paragraph-semibold text-dark400_light800">
        Detailed explanation of your problem
        <span className="text-primary-500">*</span>
      </FormLabel>
      <FormControl className="mt-3.5">
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
          onInit={(evt, editor) => {
            editorRef.current = editor as unknown as Editor;
          }}
          onBlur={field.onBlur}
          onEditorChange={(content) => field.onChange(content)}
          // TODO: fill missing value in case edit question
          initialValue={""}
          init={{
            height: 350,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "codesample",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
            ],
            toolbar:
              "undo redo | " +
              "codesample | bold italic forecolor | alignleft aligncenter |" +
              "alignright alignjustify | bullist numlist",
            content_style: "body { font-family:Inter; font-size:16px }",
            skin: resolvedTheme === "dark" ? "oxide-dark" : "oxide",
            content_css: resolvedTheme === "dark" ? "dark" : "light",
          }}
        />
      </FormControl>
      <FormDescription className="body-regular mt-2.5 text-light-500">
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </FormDescription>
      <FormMessage className="text-red-500" />
    </FormItem>
  );
}
