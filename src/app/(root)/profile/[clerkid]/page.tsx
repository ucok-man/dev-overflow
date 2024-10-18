import {
  Pagination,
  ProfileLink,
  QuestionCard,
  Stats,
} from "@/components/shared";
import AnswerCard from "@/components/shared/answer-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  fetchUserCreatedAnswer,
  fetchUserCreatedQuestion,
  fetchUserInfo,
} from "@/lib/actions";
import { formatdate } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import to from "await-to-js";
import Image from "next/image";
import Link from "next/link";

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

  const [err_fetchuserinfo, datainfo] = await to(
    fetchUserInfo({
      clerkid: params.clerkid,
    })
  );

  if (err_fetchuserinfo !== null) {
    throw new Error(`[ProfileDetailPage]: ${err_fetchuserinfo.message}`);
  }

  const [err_fetchquestion, dataquestion] = await to(
    fetchUserCreatedQuestion({
      uid: datainfo.user.id,
      page: Number(searchParams.page) || 1,
      pageSize: 10,
    })
  );
  if (err_fetchquestion !== null) {
    throw new Error(`[ProfileDetailPage]: ${err_fetchquestion.message}`);
  }

  const [err_fetchanswer, dataanswer] = await to(
    fetchUserCreatedAnswer({
      uid: datainfo.user.id,
      page: Number(searchParams.page) || 1,
      pageSize: 10,
    })
  );

  if (err_fetchanswer !== null) {
    throw new Error(`[ProfileDetailPage]: ${err_fetchanswer.message}`);
  }

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Image
            src={datainfo.user.picture}
            alt="profile picture"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />

          <div className="mt-3">
            <h2 className="h2-bold text-dark100_light900">
              {datainfo.user.name}
            </h2>
            <p className="paragraph-regular text-dark200_light800">
              @{datainfo.user.username}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
              {datainfo.user.website && (
                <ProfileLink
                  imgUrl="/assets/icons/link.svg"
                  href={datainfo.user.website}
                  title="Portfolio"
                />
              )}

              {datainfo.user.location && (
                <ProfileLink
                  imgUrl="/assets/icons/location.svg"
                  title={datainfo.user.location}
                />
              )}

              <ProfileLink
                imgUrl="/assets/icons/calendar.svg"
                title={formatdate(datainfo.user.createdAt)}
              />
            </div>

            {datainfo.user.bio && (
              <p className="paragraph-regular text-dark400_light800 mt-8">
                {datainfo.user.bio}
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
        reputation={datainfo.user.reputation}
        totalQuestions={datainfo.user._count.createdQuestion}
        totalAnswers={datainfo.user._count.createdAnswer}
        badges={datainfo.badgecounts}
      />

      {/* Items List */}
      <div className="mt-10 flex gap-10">
        <Tabs defaultValue="top-posts" className="flex-1">
          <TabsList className="background-light800_dark400 min-h-[42px] p-1">
            <TabsTrigger value="top-posts" className="tab">
              Questions
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
            {dataquestion.userquestions.map((question) => (
              <div key={question.id}>
                <QuestionCard question={question} uid={params.clerkid} />
                <div className="mt-10">
                  <Pagination
                    page={Number(searchParams.page) || 1}
                    isnext={dataquestion.isnext}
                  />
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="answers" className="flex w-full flex-col gap-6">
            {/* Answer Tab List */}
            {dataanswer.useranswers.map((answer) => (
              <div key={answer.id}>
                <AnswerCard answer={answer} uid={params.clerkid} />
                <div className="mt-10">
                  <Pagination
                    page={Number(searchParams.page) || 1}
                    isnext={dataquestion.isnext}
                  />
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
