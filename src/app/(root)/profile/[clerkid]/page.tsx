import { Pagination, ProfileLink, QuestionCard, Stats } from "@/components";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchUserCreatedQuestion, fetchUserInfo } from "@/lib/actions";
import { formatdate } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    clerkid: string;
  };
  searchParams: {
    ql?: string;
    fl?: string;
    page?: string;
  };
};

export default async function ProfileDetailPage({
  params,
  searchParams,
}: Props) {
  const clerkid = auth().userId as string;
  const { user, badgecounts } = await fetchUserInfo({
    clerkid: params.clerkid,
  });
  if (!user) {
    return notFound();
  }

  const { userqestions, isnext } = await fetchUserCreatedQuestion({
    uid: user.id,
    page: Number(searchParams.page) || 1,
    pageSize: 10,
  });

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Image
            src={user.picture}
            alt="profile picture"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />

          <div className="mt-3">
            <h2 className="h2-bold text-dark100_light900">{user.name}</h2>
            <p className="paragraph-regular text-dark200_light800">
              @{user.username}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
              {user.website && (
                <ProfileLink
                  imgUrl="/assets/icons/link.svg"
                  href={user.website}
                  title="Portfolio"
                />
              )}

              {user.location && (
                <ProfileLink
                  imgUrl="/assets/icons/location.svg"
                  title={user.location}
                />
              )}

              <ProfileLink
                imgUrl="/assets/icons/calendar.svg"
                title={formatdate(user.createdAt)}
              />
            </div>

            {user.bio && (
              <p className="paragraph-regular text-dark400_light800 mt-8">
                {user.bio}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
        <SignedIn>
          {clerkid === params.clerkid && (
            <Link href="/profile/edit">
              <Button className="paragraph-medium btn text-dark300_light900 min-h-[46px] min-w-[175px] px-4 py-3">
                Edit Profile
              </Button>
            </Link>
          )}
        </SignedIn>
      </div>

      {/* Statistic */}
      <Stats
        reputation={user.reputation}
        totalQuestions={user._count.createdQuestion}
        totalAnswers={user._count.createdAnswer}
        badges={badgecounts}
      />

      {/* Items List */}
      <div className="mt-10 flex gap-10">
        <Tabs defaultValue="top-posts" className="flex-1">
          <TabsList className="background-light800_dark400 min-h-[42px] p-1">
            <TabsTrigger value="top-posts" className="tab">
              Top Posts
            </TabsTrigger>
            <TabsTrigger value="answers" className="tab">
              Answers
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="top-posts"
            className="mt-5 flex w-full flex-col gap-6"
          >
            {/* Question Tab List */}
            {userqestions.map((question) => (
              <div key={question.id}>
                <QuestionCard question={question} cuid={user.id} />
                <div className="mt-10">
                  <Pagination
                    page={Number(searchParams.page) || 1}
                    isnext={isnext}
                  />
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="answers" className="flex w-full flex-col gap-6">
            {/* <AnswersTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={clerkId}
            /> */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
