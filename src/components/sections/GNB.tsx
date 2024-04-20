"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseOutline, IoMenuSharp } from "react-icons/io5";
import Logo from "../modules/Logo";

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
      className={`fixed z-50 flex w-screen justify-between transition-all sm:items-baseline sm:justify-center sm:gap-1
      sm:px-2 
      ${isScrolled && "border-b border-b-sky-700 bg-white sm:h-fit"}
      ${!isScrolled && "sm:py-4"}
      ${pathname === "/" && !isScrolled && "border-b border-b-sky-700/0"}
      ${pathname !== "/" && !isScrolled && "border-b border-b-sky-700 sm:border-none"}
      ${openMenu ? "h-[130px] bg-white sm:h-auto" : "h-[28px] sm:h-auto"}
      ${openMenu && isScrolled ? "" : "sm:bg-transparent"} 
      ${!openMenu && isScrolled ? "sm:bg-white" : ""}`}
    >
      <Logo
        className={`z-50 h-fit w-[110px] px-1 sm:h-auto ${isScrolled ? "sm:w-[145px]" : "sm:w-[160px]"} `}
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
      <ul
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
        <li
          className={`text-md uppercase tracking-wide ${pathname !== "/" && "font-semibold text-sky-700"}`}
        >
          <Link
            className={`menu__hover sm:px-1`}
            href="/insights"
            onClick={() => setOpenMenu(false)}
          >
            Insights
          </Link>
        </li>
        <li
          className={`text-md uppercase tracking-wide ${pathname !== "/" && "font-semibold text-sky-700"}`}
        >
          <Link
            className={`menu__hover sm:px-1`}
            href="/authors"
            onClick={() => setOpenMenu(false)}
          >
            Authors
          </Link>
        </li>
        <li
          className={`text-md font-semibold uppercase tracking-wide
          lg:col-start-[-3]
          ${pathname === "/" && isScrolled && "text-sky-700"}
          ${pathname === "/" && !isScrolled ? "text-white lg:text-sky-700" : ""}
          ${pathname !== "/" && "font-semibold text-sky-700"}`}
        >
          <Link
            className="menu__hover sm:px-1"
            href="/bookmarks"
            onClick={() => setOpenMenu(false)}
          >
            Bookmarks
          </Link>
        </li>
        <li
          className={`text-md font-semibold uppercase tracking-wide
          lg:col-start-[-2]
          ${pathname === "/" && isScrolled ? "text-sky-700" : ""}
          ${pathname === "/" && !isScrolled ? "text-white lg:text-sky-700" : ""}
          ${pathname !== "/" && "font-semibold text-sky-700"}`}
        >
          <Link
            className="menu__hover sm:px-1"
            href="/setting"
            onClick={() => setOpenMenu(false)}
          >
            Setting
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GNB;
