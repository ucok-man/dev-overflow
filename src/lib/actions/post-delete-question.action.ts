"use server";

import to from "await-to-js";
import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostDeleteQuestionParams = {
  qid: string;
  revalidatePath?: string;
};

export async function postDeleteQuestion(params: PostDeleteQuestionParams) {
  const [err_questiondelete] = await to(
    prisma.question.delete({
      where: {
        id: params.qid,
      },
    })
  );
  if (err_questiondelete !== null) {
    throw new Error(
      `[postDeleteQuestion] [prisma.question.delete]: ${err_questiondelete.message}`
    );
  }

  if (params.revalidatePath) {
    revalidatePath(params.revalidatePath);
  }
}
