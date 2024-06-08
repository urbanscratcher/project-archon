"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseOutline, IoMenuSharp } from "react-icons/io5";
import Box from "../atoms/Box";
import List from "../atoms/List";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

function GNB() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
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

  return (
    <nav
      className={`fixed z-50 w-full transition-all
      ${isScrolled ? "border-b border-b-sky-700 bg-white sm:h-fit" : "sm:py-4"}
    ${pathname === "/" && !isScrolled && "border-b border-b-sky-700/0"}
    ${pathname !== "/" && !isScrolled && "border-b border-b-sky-700 sm:border-none"}
    ${openMenu ? "h-[130px] bg-white sm:h-auto" : "h-[28px] sm:h-auto"}
    ${openMenu && isScrolled ? "" : "sm:bg-transparent"} 
    ${!openMenu && isScrolled ? "sm:bg-white" : ""}
    `}
    >
      <Box
        horizontal
        className={`mx-auto w-screen justify-between sm:items-baseline sm:justify-center sm:gap-1 sm:px-2 xl:w-full xl:max-w-[1920px] 
     `}
      >
        <Logo
          className={`z-50 h-fit w-[110px] px-1 sm:h-auto sm:w-[160px] `}
          isWhite={!isScrolled && pathname === "/" && !openMenu}
        />
        <button
          onClick={(e) => {
            setOpenMenu(!openMenu);
            setIsScrolled(true);
          }}
          className={`z-50 flex h-fit px-1 text-3xl sm:hidden
       ${!isScrolled && pathname === "/" && "text-white"}
       ${!isScrolled && pathname !== "/" && "text-sky-700"}
        ${isScrolled && pathname !== "/" && "text-sky-700"}
        ${isScrolled && pathname === "/" && "text-sky-700"}
        `}
        >
          {openMenu ? <IoCloseOutline /> : <IoMenuSharp />}
        </button>
        <List
          className={`lg:grid-cols-24 absolute z-10 flex h-fit w-screen flex-col items-end pr-2 pt-[28px] transition-transform sm:static
        sm:grid
        sm:w-full
        sm:grid-cols-4
        sm:items-center
        sm:justify-items-center
        sm:pr-0 sm:pt-0
        lg:grid-cols-8
        lg:justify-items-end
        xl:grid-cols-11 
        ${openMenu ? "opacity-100" : "-translate-y-full opacity-0 sm:translate-y-0 sm:opacity-100 "}
        ${
          pathname === "/" && isScrolled
            ? "font-semibold text-sky-700"
            : "font-semibold text-sky-700 sm:font-medium sm:text-white"
        }
         `}
        >
          <MenuItem
            className={`${pathname !== "/" && "font-semibold text-sky-700"}`}
            pathName={pathname}
            href={"/insights"}
            onClick={() => setOpenMenu(false)}
          >
            Insights
          </MenuItem>
          <MenuItem
            className={`${pathname !== "/" && "font-semibold text-sky-700"}`}
            pathName={pathname}
            href={"/authors"}
            onClick={() => setOpenMenu(false)}
          >
            Authors
          </MenuItem>
          <MenuItem
            className={`
            lg:col-start-[-3]
            ${pathname === "/" && isScrolled && "text-sky-700"}
            ${pathname === "/" && !isScrolled ? "text-white lg:text-sky-700" : ""}
            ${pathname !== "/" && "font-semibold text-sky-700"}`}
            pathName={pathname}
            href={"/bookmarks"}
            onClick={() => setOpenMenu(false)}
          >
            Bookmarks
          </MenuItem>
          <MenuItem
            className={`
            lg:col-start-[-2]
            ${pathname === "/" && isScrolled ? "text-sky-700" : ""}
            ${pathname === "/" && !isScrolled ? "text-white lg:text-sky-700" : ""}
            ${pathname !== "/" && "font-semibold text-sky-700"}`}
            pathName={pathname}
            href={"/setting"}
            onClick={() => setOpenMenu(false)}
          >
            Setting
          </MenuItem>
        </List>
      </Box>
    </nav>
  );
}

export default GNB;
