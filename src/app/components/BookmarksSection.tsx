"use client";

import useBookmarkStore from "@/stores/useBookmarkStore";
import SectionContainer from "../../components/atoms/SectionContainer";
import BookmarkItem from "./BookmarkItem";

function BookmarksSection() {
  const initialBookmarks = useBookmarkStore((state) => state.bookmarks);

  return (
    <SectionContainer>
      <h1 className="mb-4 font-serif capitalize text-sky-700">
        You saved {initialBookmarks?.length > 0 ? initialBookmarks?.length : 0}{" "}
        insights
      </h1>
      <ul>
        {initialBookmarks.map((b) => (
          <BookmarkItem key={b.idx} idx={b.idx} />
        ))}
      </ul>
    </SectionContainer>
  );
}

export default BookmarksSection;
