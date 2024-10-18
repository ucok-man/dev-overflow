"use server";

import to from "await-to-js";
import prisma from "../database/prisma-client";

type FetchUserByClerkIdParams = {
  clerkid: string;
};

export async function fetchUserByClerkId(params: FetchUserByClerkIdParams) {
  const [err_userfindunique, user] = await to(
    prisma.user.findUnique({
      where: {
        clerkId: params.clerkid,
      },
    })
  );
  if (err_userfindunique !== null) {
    throw new Error(
      `[fetchUserByClerkId] [prisma.user.findUnique] : ${err_userfindunique.message}`
    );
  }

  if (!user) {
    throw new Error(
      `[fetchUserByClerkId] [prisma.user.findUnique] : record with clerkid #${params.clerkid} not found`
    );
  }

  return user;
}
