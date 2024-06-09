"use client";

import ListItem from "@/components/atoms/ListItem";
import useBookmarkStore from "@/stores/useBookmarkStore";
import List from "../../components/atoms/List";
import SavedForLaterItem from "./SavedForLaterItem";

function SavedForLaterLoader() {
  const storedInsights = useBookmarkStore((state) => state.bookmarks);

  if (!storedInsights || storedInsights.length <= 0) {
    return (
      <h4 className="flex items-center justify-center font-sans capitalize">
        Explore New Insights :)
      </h4>
    );
  }

  const data =
    storedInsights.length >= 4 ? storedInsights.slice(0, 4) : storedInsights;

  return (
    <List className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((bookmark) => (
        <ListItem
          key={bookmark.idx}
          className={`relative hidden h-[480px] w-full content-center items-center justify-center overflow-hidden rounded-2xl first:flex sm:flex`}
        >
          <SavedForLaterItem idx={bookmark.idx} />
        </ListItem>
      ))}
    </List>
  );
}

export default SavedForLaterLoader;
