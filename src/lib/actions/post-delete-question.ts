"use server";

import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostDeleteQuestionParams = {
  qid: string;
  createdById: string;
  revalidatePath?: string;
};

export async function postDeleteQuestion(params: PostDeleteQuestionParams) {
  try {
    await prisma.question.delete({
      where: {
        id: params.qid,
        createdById: params.createdById,
      },
    });

    if (params.revalidatePath) {
      revalidatePath(params.revalidatePath);
    }
  } catch (error) {
    console.log(`error post delete question: ${error}`);
    throw error;
  }
}
