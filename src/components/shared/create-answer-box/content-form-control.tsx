import { AnswerFormValidationSchema } from "@/lib/validation-schema";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "next-themes";
import { MutableRefObject } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormItem, FormMessage } from "../../ui/form";

type Props = {
  field: ControllerRenderProps<
    z.infer<typeof AnswerFormValidationSchema>,
    "content"
  >;
  editorRef: MutableRefObject<Editor | undefined>;
};
export default function ContentFormControl({ field, editorRef }: Props) {
  const { resolvedTheme } = useTheme();

  return (
    <FormItem className="flex w-full flex-col gap-3">
      <FormControl className="mt-3.5">
        <Editor
          key={resolvedTheme}
          apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
          onInit={(evt, editor) => {
            editorRef.current = editor as unknown as Editor;
          }}
          onBlur={field.onBlur}
          onEditorChange={(content) => field.onChange(content)}
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
      <FormMessage className="text-red-500" />
    </FormItem>
  );
}
