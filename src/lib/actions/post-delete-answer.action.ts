"use server";

import to from "await-to-js";
import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostDeleteAnswerParams = {
  aid: string;
  revalidatePath?: string;
};

export async function postDeleteAnswer(params: PostDeleteAnswerParams) {
  const [err_answerdelete] = await to(
    prisma.answer.delete({
      where: {
        id: params.aid,
      },
    })
  );
  if (err_answerdelete !== null) {
    throw new Error(
      `[postDeleteAnswer] [prisma.answer.delete]: ${err_answerdelete.message}`
    );
  }

  if (params.revalidatePath) {
    revalidatePath(params.revalidatePath);
  }
}
