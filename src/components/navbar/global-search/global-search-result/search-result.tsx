import { GlobalSearchResultType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  datas: GlobalSearchResultType[] | undefined;
};

export default function SearchResult({ datas }: Props) {
  if (!datas || datas.length <= 0) return NoResultFound();

  return (
    <div className="flex flex-col gap-2">
      {datas!.map((item, index) => (
        <Link
          href={renderLink(item.type, item.id)}
          key={item.type + item.id + index}
          className="flex w-full cursor-pointer items-start gap-3 px-5 py-2.5 hover:bg-light-700/50 dark:hover:bg-dark-500/50"
        >
          <Image
            src="/assets/icons/tag.svg"
            alt="tags"
            width={18}
            height={18}
            className="invert-colors mt-1 object-contain"
          />

          <div className="flex flex-col">
            <p className="body-medium text-dark200_light800 line-clamp-1">
              {item.title}
            </p>
            <p className="text-light400_light500 small-medium mt-1 font-bold capitalize">
              {item.type}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function NoResultFound() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-center flex-col px-5">
        <p className="text-dark200_light800 body-regular px-5 py-2.5">
          Oops, no results found
        </p>
      </div>
    </div>
  );
}

function renderLink(type: string, id: string | number) {
  switch (type) {
    case "question":
      return `/question/${id}`;
    case "answer":
      return `/question/${id}`;
    case "user":
      return `/profile/${id}`;
    case "tag":
      return `/tags/${id}`;
    default:
      return "/";
  }
}
