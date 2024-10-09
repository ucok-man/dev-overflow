import PopularTag from "./popular-tag/popular-tag";
import TopQuestion from "./top-question/top-question";

export default function RightSidebar() {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <TopQuestion />
      <PopularTag />
    </section>
  );
}
