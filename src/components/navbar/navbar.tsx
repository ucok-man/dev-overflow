import { GLOBAL_SEARCH_FILTER } from "@/lib/constants";
import SearchBox from "../shared/searchbox/searchbox";
import Logo from "./logo";
import MobileNav from "./mobile/mobile-navbar";
import ThemeSwithcer from "./theme-switcher/theme-switcher";
import UserIcon from "./user-icon";

export default function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Logo isSmHidden={true} />
      <div className="relative w-full max-w-[600px] max-lg:hidden">
        <SearchBox
          iconposition="left"
          placeholder="Search globally"
          clearPageWhenTyping={false}
          search={{
            querykey: "qg",
            clearWhenOffFocus: true,
          }}
          withresult={{
            value: true,
            filter: {
              clearWhenSearchEmpty: true,
              querykey: "fg",
              values: GLOBAL_SEARCH_FILTER,
            },
          }}
        />
      </div>

      <div className="flex-between gap-5">
        <ThemeSwithcer />
        <UserIcon />
        <MobileNav />
      </div>
    </nav>
  );
}
