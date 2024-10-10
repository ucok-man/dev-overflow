import {
  homepageFilters,
  HomePageHeader,
  LocalSearchbar,
  LocalSearchbarFilter,
  MobileLocalSearchbarFilter,
} from "@/components";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Dev Overflow",
};

export default function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          containerClasses="flex-1"
        />

        <MobileLocalSearchbarFilter
          filters={homepageFilters}
          defaultVal="recommended"
          trigerClasess="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <LocalSearchbarFilter
        filters={homepageFilters}
        defaultVal="recommended"
      />
    </div>
  );
}
