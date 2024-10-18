"use server";

import { Tag } from "@prisma/client";
import to from "await-to-js";
import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostEditQuestionParam = {
  qid: string;
  title: string;
  content: string;
  tags: string[];
  revalidatePath?: string;
};

export async function postEditQuestion(params: PostEditQuestionParam) {
  const tags: Tag[] = [];
  for (const tagname of params.tags) {
    // make sure all tage are lowercase
    const sanitizedtag = tagname.toLowerCase();

    const [err_upserttag, tag] = await to(
      prisma.tag.upsert({
        create: {
          name: sanitizedtag,
          description: "",
        },
        update: {
          name: sanitizedtag,
        },
        where: {
          name: sanitizedtag,
        },
      })
    );

    if (err_upserttag !== null) {
      throw new Error(
        `[postEditQuestion] [prisma.tag.upsert]: ${err_upserttag.message}`
      );
    }
    tags.push(tag);
  }

  const [err_questionupdate] = await to(
    prisma.question.update({
      where: {
        id: params.qid,
      },
      data: {
        content: params.content,
        title: params.title,
        tagIds: tags.map((t) => t.id),
      },
    })
  );
  if (err_questionupdate !== null) {
    throw new Error(
      `[postEditQuestion] [prisma.question.update]: ${err_questionupdate.message}`
    );
  }

  if (params.revalidatePath) {
    revalidatePath(params.revalidatePath);
  }
}
