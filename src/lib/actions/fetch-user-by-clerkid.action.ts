"use server";

import prisma from "../database/prisma-client";

export async function fetchUserByClerkId({ clerkid }: { clerkid: string }) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: clerkid,
      },
    });

    if (!user) {
      throw new Error(
        `error find user by clerk id: clerkid #${clerkid} not found record`
      );
    }
    return user;
  } catch (error) {
    console.log(`error find user by clerk id: ${error}`);
    throw error;
  }
}
