"use client";

import useBookmarkStore from "@/stores/useBookmarkStore";
import List from "../atoms/List";
import SavedForLaterItem from "./SavedForLaterItem";

function SavedForLaterContent() {
  const storedInsights = useBookmarkStore((state) => state.bookmarks);

  // [ ] design
  if (storedInsights.length <= 0) {
    return <div>Explore some insights :)</div>;
  }

  const StoredInsightsSlice =
    storedInsights.length >= 4 ? storedInsights.slice(0, 4) : storedInsights;

  return (
    <List className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {StoredInsightsSlice.map((bookmark) => (
        <SavedForLaterItem
          key={`savedForLater_${bookmark.idx}`}
          idx={bookmark.idx}
        />
      ))}
    </List>
  );
}

export default SavedForLaterContent;
