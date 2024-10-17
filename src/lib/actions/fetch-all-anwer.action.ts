"use server";

import prisma from "../database/prisma-client";
import { AnswerQueryFilterValue } from "../enums";
import { PrismaQueryFindMany } from "../types";

type FetchAllAnswerParams =
  | {
      qid: string;
      withoption: false;
    }
  | {
      qid: string;
      withoption: true;
      options: {
        filter: AnswerQueryFilterValue;
        page: number;
        pageSize: number;
      };
    };

export async function fetchAllAnswer(params: FetchAllAnswerParams) {
  const query: PrismaQueryFindMany<"answer"> = {};
  query.where = {
    questionId: params.qid,
  };

  if (params.withoption) {
    // create query builder
    switch (params.options.filter) {
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

    query.skip = (params.options.page - 1) * params.options.pageSize;
    query.take = params.options.pageSize;
  }

  const answers = await prisma.answer.findMany({
    ...query,
    include: {
      createdBy: true,
    },
  });

  if (!params.withoption) {
    return { answers, isnext: false };
  }

  if (params.withoption) {
    const totalrecord = await prisma.answer.count({
      where: query.where,
      orderBy: query.orderBy,
    });

    const isnext = totalrecord > query.skip! + answers.length;

    return { answers, isnext };
  }
}
