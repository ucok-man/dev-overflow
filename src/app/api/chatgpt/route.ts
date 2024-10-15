import { NextRequest, NextResponse } from "next/server";
import { openai } from "./client";

export const POST = async (request: NextRequest) => {
  try {
    const { content, title } = await request.json();
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a knowlegeable assistant that provides quality information.",
        },
        {
          role: "user",
          content: `Tell me the answer of this question: title '${title}' content: '${content}'. Please provide your answer in the form html markup languagge. Dont include this word.`,
        },
      ],
    });

    const reply = completion.choices[0].message;
    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json(
      { error: error },
      {
        status: 500,
      }
    );
  }
};
