import { ReloadIcon } from "@radix-ui/react-icons";

export default function SearchLoading() {
  return (
    <div className="flex-center flex-col px-5">
      <ReloadIcon className="my-2 size-10 animate-spin text-primary-500" />
      <p className="text-dark200_light800 body-regular">
        Browsing the entire database
      </p>
    </div>
  );
}
