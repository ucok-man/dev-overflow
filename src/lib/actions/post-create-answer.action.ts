"use server";

import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostCreateAnswerParams = {
  content: string;
  qid: string;
  createdById: string;
  revalidatePath?: string;
};

export async function postCreateAnswer(params: PostCreateAnswerParams) {
  try {
    await prisma.answer.create({
      data: {
        content: params.content,
        questionId: params.qid,
        createdById: params.createdById,
      },
    });

    // add reputation to user who created this answer
    await prisma.user.update({
      where: {
        id: params.createdById,
      },
      data: {
        reputation: {
          increment: 10,
        },
      },
    });

    if (params.revalidatePath) {
      revalidatePath(params.revalidatePath);
    }
  } catch (error) {
    console.log(`error post create answer: ${error}`);
    throw error;
  }
}
