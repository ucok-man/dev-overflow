"use server";

import to from "await-to-js";
import prisma from "../database/prisma-client";

type PostUpdateQuestionViewParams = {
  qid: string;
};

export async function postUpdateQuestionView({
  qid,
}: PostUpdateQuestionViewParams) {
  const [err_questionupdate] = await to(
    prisma.question.update({
      where: { id: qid },
      data: {
        views: {
          increment: 1,
        },
      },
    })
  );

  if (err_questionupdate !== null) {
    throw new Error(
      `[postUpdateQuestionView] [prisma.question.update]: ${err_questionupdate.message}`
    );
  }
}
