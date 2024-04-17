"use client";

import { getStoredBookmarksOrInitialize } from "../Thumbnail";
import BookmarkList from "../modules/BookmarkList";

function Bookmarks() {
  const initialBookmarks = getStoredBookmarksOrInitialize();

  return (
    <section className="w-2/3 border-r border-r-sky-700 px-8">
      <h1 className="font-serif capitalize text-sky-700">
        You saved {initialBookmarks?.length > 0 ? initialBookmarks?.length : 0}{" "}
        insights
      </h1>
      {<BookmarkList initialBookmarks={initialBookmarks} />}
    </section>
  );
}

export default Bookmarks;
