"use server";

import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostDeleteAnswerParams = {
  aid: string;
  revalidatePath?: string;
};

export async function postDeleteAnswer(params: PostDeleteAnswerParams) {
  try {
    await prisma.answer.delete({
      where: {
        id: params.aid,
      },
    });

    if (params.revalidatePath) {
      revalidatePath(params.revalidatePath);
    }
  } catch (error) {
    console.log(`error post delete answer: ${error}`);
    throw error;
  }
}
