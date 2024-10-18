"use server";

import to from "await-to-js";
import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostCreateAnswerParams = {
  content: string;
  qid: string;
  createdById: string;
  revalidatePath?: string;
};

export async function postCreateAnswer(params: PostCreateAnswerParams) {
  const [err_answercreate] = await to(
    prisma.answer.create({
      data: {
        content: params.content,
        questionId: params.qid,
        createdById: params.createdById,
      },
    })
  );
  if (err_answercreate !== null) {
    throw new Error(
      `[postCreateAnswer] [prisma.answer.create]: ${err_answercreate.message}`
    );
  }

  if (params.revalidatePath) {
    revalidatePath(params.revalidatePath);
  }
}
