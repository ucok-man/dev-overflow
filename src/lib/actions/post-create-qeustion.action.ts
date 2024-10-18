"use server";

import { Tag } from "@prisma/client";
import to from "await-to-js";
import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

export type PostCreateQuestionParams = {
  title: string;
  content: string;
  tags: string[];
  createdById: string;
  revalidatedPath: string;
};

export async function postCreateQuestion(params: PostCreateQuestionParams) {
  const [err_questioncreate, question] = await to(
    prisma.question.create({
      data: {
        title: params.title,
        content: params.content,
        views: 0,
        createdById: params.createdById,
      },
    })
  );
  if (err_questioncreate !== null) {
    throw new Error(
      `[postCreateQuestion] [prisma.question.create]: ${err_questioncreate.message}`
    );
  }

  const tags: Tag[] = [];
  for (const tagname of params.tags) {
    // make sure all tage are lowercase
    const sanitizedtag = tagname.toLowerCase();

    const [err_tagupsert, tag] = await to(
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
    if (err_tagupsert !== null) {
      throw new Error(
        `[postCreateQuestion] [prisma.tag.upsert]: ${err_tagupsert.message}`
      );
    }

    tags.push(tag);
  }

  const [err_questionupdate] = await to(
    prisma.question.update({
      where: {
        id: question.id,
      },
      data: {
        tagIds: tags.map((t) => t.id),
      },
    })
  );
  if (err_questionupdate !== null) {
    throw new Error(
      `[postCreateQuestion] [prisma.question.update]: ${err_questionupdate.message}`
    );
  }

  if (revalidatePath) {
    revalidatePath(params.revalidatedPath);
  }
}
