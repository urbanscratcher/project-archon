"use client";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseOutline, IoMenuSharp } from "react-icons/io5";
import Box from "../atoms/Box";
import List from "../atoms/List";
import MenuItem from "../molecules/MenuItem";

function GNB() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // UI State Cases
  const isOnMain = pathname === "/";

  const isMainDefault = isOnMain && !isScrolled && !isMenuShown;
  const isMainMenuShown = isOnMain && !isScrolled && isMenuShown;
  const isMainScrolled = isOnMain && isScrolled && !isMenuShown;
  const isMainScrolledMenuShown = isOnMain && isScrolled && isMenuShown;

  const isPageDefault = !isOnMain && !isScrolled && !isMenuShown;
  const isPageMenuShown = !isOnMain && !isScrolled && isMenuShown;
  const isPageScrolled = !isOnMain && isScrolled && !isMenuShown;
  const isPageScrolledMenuShown = !isOnMain && isScrolled && isMenuShown;

  return (
    <nav
      className={`fixed z-50 w-full transition-all
      ${isMainScrolled || isPageScrolled || isMainScrolledMenuShown || isPageScrolledMenuShown ? "border-b border-b-sky-700 bg-white" : ""}
      ${isMainDefault || isPageDefault ? "border-b border-b-sky-700/0" : ""}
      ${isPageMenuShown || isMainScrolledMenuShown || isPageScrolledMenuShown ? "h-[120px] border-b border-b-sky-700 bg-white sm:h-fit" : ""}
      ${isMainMenuShown ? "h-[120px] border-b border-b-sky-700 bg-white sm:h-fit sm:border-b-sky-700/0 sm:bg-transparent" : ""}
    `}
    >
      {/* navigation box */}
      <Box
        horizontal
        className={`
        mx-auto w-screen items-center
        justify-between
        sm:justify-center sm:gap-1 sm:px-2
        xl:w-full xl:max-w-[1920px] 
     `}
      >
        {/* logo */}
        <Link
          href="/"
          className={`z-50 w-[126px] translate-y-[1px] px-1 py-1  sm:h-fit sm:w-[160px] sm:translate-y-[2px]`}
        >
          <Image
            src={logoImg}
            className={`
            ${isMainDefault ? "whiten" : ""}
            ${isMainMenuShown ? "sm:whiten" : ""}
            h-full`}
            width={180}
            height={37}
            alt="ArchOn logo"
          />
        </Link>
        {/* mobile: menu show/close button */}
        <button
          onClick={(e) => {
            setIsMenuShown(!isMenuShown);
            setIsScrolled(true);
          }}
          className={`z-50 flex h-fit px-1 text-3xl sm:hidden
          ${isMainDefault ? "text-white" : ""}
        `}
        >
          {isMenuShown ? <IoCloseOutline /> : <IoMenuSharp />}
        </button>
        {/* menu list */}
        <List
          className={`lg:grid-cols-24
          absolute
          top-[34px] z-10 flex h-fit
          w-screen
          flex-col items-end
          gap-1 pr-2
          transition-transform
          sm:static
          sm:grid 
          sm:w-full
          sm:grid-cols-4 sm:items-center sm:justify-items-center
        sm:gap-0 sm:pr-0
        sm:pt-3
        lg:grid-cols-8
        lg:justify-items-end
        xl:grid-cols-11 
        ${isMainMenuShown || isPageMenuShown || isMainScrolledMenuShown || isPageScrolledMenuShown ? "opacity-100 " : "-translate-y-full opacity-0 sm:translate-y-0 sm:opacity-100 "}
        ${
          isMainScrolled || isMainScrolledMenuShown
            ? "font-semibold text-sky-700"
            : ""
        }
        ${isMainDefault ? "font-semibold text-sky-700 sm:font-medium sm:text-white" : ""}
        ${isMainMenuShown ? "font-semibold text-sky-700 sm:text-white" : ""}
         `}
        >
          <MenuItem
            className={``}
            pathName={pathname}
            href={"/insights"}
            onClick={() => setIsMenuShown(false)}
          >
            Insights
          </MenuItem>
          <MenuItem
            className={``}
            pathName={pathname}
            href={"/authors"}
            onClick={() => setIsMenuShown(false)}
          >
            Authors
          </MenuItem>
          <MenuItem
            className={`
            lg:col-start-[-3]
            ${isMainDefault ? "lg:text-sky-700" : ""}
            ${isMainMenuShown ? "lg:text-sky-700" : ""}
            `}
            pathName={pathname}
            href={"/bookmarks"}
            onClick={() => setIsMenuShown(false)}
          >
            Bookmarks
          </MenuItem>
          <MenuItem
            className={`
            lg:col-start-[-2]
            ${isMainDefault ? "lg:text-sky-700" : ""}
            ${isMainMenuShown ? "lg:text-sky-700" : ""}
            `}
            pathName={pathname}
            href={"/setting"}
            onClick={() => setIsMenuShown(false)}
          >
            Setting
          </MenuItem>
        </List>
      </Box>
    </nav>
  );
}

export default GNB;
