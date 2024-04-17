"use client";

import { Topic } from "@/types/Topic";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  IoArrowDown,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import TopicsList from "./TopicsList";

function TopicsNavbar({ topics }: { topics: Topic[] }) {
  const ulRef = useRef<HTMLUListElement>(null);
  const search = useSearchParams();
  const searchTopic = search.get("topics")?.toLowerCase() || "all";

  useEffect(() => {
    // get the width of ul element
    const ulEl = ulRef.current;
    const totalWidth = ulEl?.clientWidth || 0;

    // get the position x of the selected one
    let posX = 0;
    const children = ulEl?.children;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        if (
          children.item(i)?.textContent?.trim().toLowerCase() === searchTopic
        ) {
          posX = children.item(i)?.getClientRects()[0].x || 0;
          break;
        }
      }
    }

    // move to the center
    if (ulEl) {
      ulRef.current?.scrollBy({
        left: posX - totalWidth / 2,
        behavior: "smooth",
      });
    }
  }, [searchTopic]);

  const prevClickHandler = () => {
    ulRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };
  const nextClickHanlder = () => {
    ulRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex w-full">
      {/* navigation */}
      <div className="flex w-11/12 flex-nowrap items-center justify-between border-b border-b-g-100 uppercase text-sky-700">
        <button
          className="h-full w-fit px-4 text-xl transition-opacity hover:opacity-80"
          onClick={prevClickHandler}
        >
          <IoChevronBackOutline />
        </button>
        <ul
          className="flex w-full flex-nowrap gap-6 overflow-hidden whitespace-nowrap text-[15px] font-semibold tracking-[1.25px] outline-offset-2"
          ref={ulRef}
        >
          <TopicsList topics={topics} />
        </ul>
        <button
          className="h-full w-fit px-4 text-xl transition-opacity hover:opacity-80"
          onClick={nextClickHanlder}
        >
          <IoChevronForwardOutline />
        </button>
      </div>
      {/* date button */}
      <div className="flex w-1/12 items-center gap-1 text-[15px] font-semibold tracking-[1.25px] text-sky-700">
        <p>DATE</p>
        <IoArrowDown />
      </div>
    </div>
  );
}

export default TopicsNavbar;
