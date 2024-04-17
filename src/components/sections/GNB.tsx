/**
 * CHECK
 * [x] UI기능 - 네비게이션바 스크롤 내리면 흰색 바탕
 * [x] 페이지 마다 text 색깔 다르게 설정
 */
"use client";

import Link from "next/link";
import Logo from "../modules/Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function GNB() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed z-50 flex w-full gap-1 px-10  ${isScrolled ? " border-b border-b-sky-700 bg-white " : "h-[96px] border-b border-b-sky-700/0 py-4"} items-baseline transition-all`}
    >
      <Logo isWhite={!isScrolled && pathname === "/"} />
      <ul
        className={`ml-10 grid w-full grid-cols-11 items-center justify-items-end ${pathname === "/" ? (isScrolled ? "font-semibold text-sky-700" : "font-medium text-white") : isScrolled ? "font-semibold text-sky-700" : " font-semibold text-sky-700"} `}
      >
        <li className={`text-md col-span-1 px-2 uppercase tracking-wide`}>
          <Link className={`menu__hover px-1`} href="/insights">
            Insights
          </Link>
        </li>
        <li className={`text-md col-span-1 px-2 uppercase tracking-wide`}>
          <Link className={`menu__hover px-1`} href="/authors">
            Authors
          </Link>
        </li>
        <li
          className={`text-md col-start-10 font-semibold  uppercase tracking-wide ${pathname === "/" ? "text-sky-700" : ""} `}
        >
          <Link className="menu__hover px-1" href="/bookmark">
            Bookmarks
          </Link>
        </li>
        <li
          className={`col-start-11 ${isScrolled ? "" : ""} text-md font-semibold uppercase tracking-wide ${pathname === "/" ? "text-sky-700" : ""}`}
        >
          <Link className="menu__hover px-1" href="/setting">
            Setting
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GNB;
