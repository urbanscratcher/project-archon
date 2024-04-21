"use client";

import useBookmarkStore from "@/stores/useBookmarkStore";
import BookmarkList from "../organisms/BookmarkList";

function Bookmarks() {
  const initialBookmarks = useBookmarkStore((state) => state.bookmarks);

  return (
    <section className="w-full px-8 lg:w-2/3 lg:border-r lg:border-r-sky-700">
      <h1 className="font-serif capitalize text-sky-700">
        You saved {initialBookmarks?.length > 0 ? initialBookmarks?.length : 0}{" "}
        insights
      </h1>
      {<BookmarkList initialBookmarks={initialBookmarks} />}
    </section>
  );
}

export default Bookmarks;
