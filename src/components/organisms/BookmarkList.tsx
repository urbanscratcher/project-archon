import BookmarkItem from "./BookmarkItem";

function BookmarkList({
  initialBookmarks,
}: {
  initialBookmarks: { idx: number }[];
}) {
  return (
    <ul>
      {initialBookmarks.map((b) => (
        <BookmarkItem key={b.idx} idx={b.idx} />
      ))}
    </ul>
  );
}

export default BookmarkList;
