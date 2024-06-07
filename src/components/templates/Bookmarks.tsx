"use client";

import useBookmarkStore from "@/stores/useBookmarkStore";
import SectionContainer from "../atoms/SectionContainer";
import BookmarkList from "../molecules/BookmarkList";

function Bookmarks() {
  const initialBookmarks = useBookmarkStore((state) => state.bookmarks);

  return (
    <SectionContainer>
      <h1 className="mb-4 font-serif capitalize text-sky-700">
        You saved {initialBookmarks?.length > 0 ? initialBookmarks?.length : 0}{" "}
        insights
      </h1>
      {<BookmarkList initialBookmarks={initialBookmarks} />}
    </SectionContainer>
  );
}

export default Bookmarks;
