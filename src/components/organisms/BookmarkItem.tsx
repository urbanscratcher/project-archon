import { getInsight } from "@/services/insights.api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../atoms/Loader";
import Thumbnail from "../atoms/Thumbnail";
import Tag from "../atoms/Tag";
import InsightTitle from "./InsightTitle";
import DateTTRRow from "../molecules/DateTTRRow";
import AuthorRow from "./AuthorRow";

function BookmarkItem({ idx }: { idx: number }) {
  const {
    data: insight,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["insight", idx],
    queryFn: () => getInsight(idx),
  });

  if (isLoading) {
    return <Loader />;
  }

  // TODO mark err
  if (isError) {
    return <div>Error occurred while fetching insight.</div>;
  }

  return (
    <li
      className={`grid h-fit grid-cols-1 grid-rows-[auto_1fr] items-center gap-4 border-b border-b-g-300 py-6 last:border-b-0 sm:grid-cols-[1fr_2fr] sm:grid-rows-none`}
    >
      <Thumbnail
        insightIdx={insight.idx}
        href={`/insights/${insight.idx}`}
        src={insight?.thumbnail || ""}
        alt={insight.title}
        aspect={``}
        className="aspect-video w-full sm:aspect-auto sm:h-full sm:w-auto"
      />
      <div className={`flex flex-col gap-2`}>
        <Tag tagName={insight.topic.name} />
        <h3 className="line-clamp-3 text-ellipsis font-serif text-sky-700">
          <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
        </h3>
        <p className="line-clamp-3 text-ellipsis text-sky-700">
          {insight.summary}
        </p>
        <DateTTRRow createdAt={insight.createdAt} />
        <AuthorRow creator={insight.creator} />
      </div>
    </li>
  );
}

export default BookmarkItem;
