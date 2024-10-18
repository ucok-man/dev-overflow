"use server";

import to from "await-to-js";
import prisma from "../database/prisma-client";
import { AnswerQueryFilterValue } from "../enums";
import { PrismaQueryFindMany } from "../types";

type FetchAllAnswerParams = {
  qid: string;
  filter: AnswerQueryFilterValue;
  page: number;
  pageSize: number;
};

export async function fetchAllAnswer(params: FetchAllAnswerParams) {
  const query: PrismaQueryFindMany<"answer"> = {};
  query.where = {
    questionId: params.qid,
  };

  // create query builder
  switch (params.filter) {
    case AnswerQueryFilterValue.HighestUpvotes:
      query.orderBy = {
        upvotedBy: {
          _count: "desc",
        },
      };
      break;

    // TODO: this should be prisma bug????
    case AnswerQueryFilterValue.LowestUpvotes:
      query.orderBy = {
        upvotedBy: {
          _count: "asc",
        },
      };
      break;

    case AnswerQueryFilterValue.Recent:
      query.orderBy = {
        createdAt: "desc",
      };
      break;

    case AnswerQueryFilterValue.Oldest:
      query.orderBy = {
        createdAt: "asc",
      };
      break;
  }

  query.skip = (params.page - 1) * params.pageSize;
  query.take = params.pageSize;

  const [errfindmany, answers] = await to(
    prisma.answer.findMany({
      ...query,
      include: {
        createdBy: true,
      },
    })
  );
  if (errfindmany !== null) {
    throw new Error(
      `[fetchAllAnswer] [prisma.answer.findMany] find users: ${errfindmany.message}`
    );
  }

  const [errcount, totalrecord] = await to(
    prisma.answer.count({
      where: query.where,
      orderBy: query.orderBy,
    })
  );
  if (errcount !== null) {
    throw new Error(
      `[fetchAllAnswer] [prisma.answer.count] count answer record: ${errcount.message}`
    );
  }

  const isnext = totalrecord > query.skip! + answers.length;

  return { answers, isnext };
}
