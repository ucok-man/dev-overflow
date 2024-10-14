"use server";

import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostToggleSaveQuestionParams = {
  cuid: string;
  qid: string;
  hasSaved: boolean;
  revalidatePath?: string;
};

export async function postToggleSaveQuestion(
  params: PostToggleSaveQuestionParams
) {
  try {
    // get the qeustion
    const question = await prisma.question.findUnique({
      where: {
        id: params.qid,
      },
    });

    if (!question) {
      throw new Error(`record #${params.qid} not found`);
    }

    if (params.hasSaved) {
      question.savedByIds = question.savedByIds.filter(
        (uid) => uid !== params.cuid
      );
    }

    if (!params.hasSaved) {
      question.savedByIds.push(params.cuid);
    }

    //   update qeustion
    await prisma.question.update({
      data: {
        savedByIds: question.savedByIds,
      },
      where: {
        id: params.qid,
      },
    });

    if (params.revalidatePath) {
      revalidatePath(params.revalidatePath);
    }
  } catch (error) {
    console.log(`error post vote question: ${error}`);
    throw error;
  }
}
