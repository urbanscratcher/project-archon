"use client";

import List from "@/components/atoms/List";
import useBookmarkStore from "@/stores/useBookmarkStore";
import SectionContainer from "../../../components/atoms/SectionContainer";
import BookmarksContent from "./BookmarksContent";

function BookmarksSection() {
  const initialBookmarks = useBookmarkStore((state) => state.bookmarks);

  return (
    <SectionContainer>
      <h1 className="mb-4 font-serif capitalize text-sky-700">
        You saved {initialBookmarks?.length > 0 ? initialBookmarks?.length : 0}{" "}
        insights
      </h1>
      <List>
        {initialBookmarks.map((b) => (
          <BookmarksContent key={b.idx} idx={b.idx} />
        ))}
      </List>
    </SectionContainer>
  );
}

export default BookmarksSection;
