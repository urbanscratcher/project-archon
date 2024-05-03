"use client";

import { getInsight } from "@/services/insights.api";
import useBookmarkStore from "@/stores/useBookmarkStore";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ImageWrap from "../ImageWrap";
import Loader from "../atoms/Loader";
import Tag from "../atoms/Tag";
import AuthorRow from "./AuthorRow";

function SavedForLaterList() {
  const storedInsights = useBookmarkStore((state) => state.bookmarks);

  return (
    <>
      {storedInsights.slice(0, 4).map((s) => (
        <SavedForLaterItem key={s.idx} idx={s.idx} />
      ))}
    </>
  );
}

function SavedForLaterItem({ idx }: { idx: number }) {
  const {
    data: insight,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["insight", idx],
    queryFn: () => getInsight(idx),
  });

  if (isLoading) {
    return <Loader />;
  }

  // TODO mark err
  if (isError) {
    return <div>Error occurred while fetching insight.</div>;
  }

  return (
    <li className={`relative h-[550px] w-full overflow-hidden rounded-2xl`}>
      <div className="img__overlay">
        <ImageWrap
          src={insight.thumbnail}
          alt={insight.title}
          fill
          className="absolute inset-0 -z-10 object-cover"
        />
      </div>
      <div
        className={`absolute inset-0 z-10 grid h-full grid-rows-[min-content_auto_min-content] items-end gap-3 p-6`}
      >
        <Tag tagName={insight.topic.name} isWhite />
        <Link href={`/insights/${idx}`}>
          <h3 className="line-clamp-4 text-white hover:cursor-pointer hover:underline hover:decoration-2">
            {insight.title}
          </h3>
        </Link>
        <AuthorRow creator={insight.creator} isWhite />
      </div>
    </li>
  );
}

export default SavedForLaterList;
