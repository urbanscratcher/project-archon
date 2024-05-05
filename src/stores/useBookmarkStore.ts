import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

const StorageKey = "bookmarks";

interface BookmarksState {
  bookmarks: { idx: number }[];
  addBookmark: (idx: number) => void;
  deleteBookmark: (idx: number) => void;
  isAlreadyBookmarked: (idx: number) => boolean;
}

type PersistType = (
  config: StateCreator<BookmarksState>,
  options: PersistOptions<BookmarksState>,
) => StateCreator<BookmarksState>;

const useBookmarkStore = create<BookmarksState>(
  (persist as PersistType)(
    (set, get) => ({
      bookmarks: [],
      addBookmark: (idx) => {
        const currentBookmarks = get().bookmarks;
        currentBookmarks.push({ idx });
        set({ bookmarks: currentBookmarks });
      },
      deleteBookmark: (idx) => {
        const currentBookmarks = get().bookmarks;
        set({
          bookmarks: currentBookmarks.filter(
            (b: { idx: number }) => b.idx !== idx,
          ),
        });
      },
      isAlreadyBookmarked: (idx) => {
        const currentBookmarks = get().bookmarks;
        const isAlreadyBookmarked = currentBookmarks.some(
          (b: { idx: number }) => b.idx === idx,
        );
        return isAlreadyBookmarked;
      },
    }),
    { name: StorageKey },
  ),
);

export default useBookmarkStore;
