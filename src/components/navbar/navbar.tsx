import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Logo />
      [GLOBAL SEARCH]
      <div className="flex-between gap-5">
        [THEME SWITCHER] [USER ICON] [MOBILE NAV]
      </div>
    </nav>
  );
}
