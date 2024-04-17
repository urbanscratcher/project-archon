async function Bookmarks() {
  const initialBookmarks = [{}];

  return (
    <section className="w-2/3 border-r border-r-g-300 px-8">
      <h1 className="font-serif capitalize text-sky-700">
        You saved {initialBookmarks?.length > 0 ? initialBookmarks?.length : 0}{" "}
        insights
      </h1>
      {/* {<BookmarkList initialAuthors={initialBookmarks} />} */}
    </section>
  );
}

export default Bookmarks;
