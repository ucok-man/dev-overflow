"use server";

import to from "await-to-js";
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
  // get the qeustion
  const [err_qeustionfinduniqe, question] = await to(
    prisma.question.findUnique({
      where: {
        id: params.qid,
      },
    })
  );

  if (err_qeustionfinduniqe !== null) {
    throw new Error(
      `[postToggleSaveQuestion] [prisma.question.findUnique]: ${err_qeustionfinduniqe.message}`
    );
  }

  if (!question) {
    throw new Error(
      `[postToggleSaveQuestion] [prisma.question.findUnique]: record id #${params.qid} not found`
    );
  }

  if (params.hasSaved) {
    question.savedByIds = question.savedByIds.filter(
      (uid) => uid !== params.cuid
    );
  }

  if (!params.hasSaved) {
    question.savedByIds.push(params.cuid);
  }

  // update qeustion
  const [err_questionupdate] = await to(
    prisma.question.update({
      data: {
        savedByIds: question.savedByIds,
      },
      where: {
        id: params.qid,
      },
    })
  );
  if (err_questionupdate !== null) {
    throw new Error(
      `[postToggleSaveQuestion] [prisma.question.update]: ${err_questionupdate.message}`
    );
  }

  if (params.revalidatePath) {
    revalidatePath(params.revalidatePath);
  }
}
