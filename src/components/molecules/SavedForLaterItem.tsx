"use client";

import { getInsight } from "@/services/insights.api";
import { useQuery } from "@tanstack/react-query";
import Box from "../atoms/Box";
import ImageOverlayed from "../atoms/ImageOverlayed";
import ListItem, { ListItemProps } from "../atoms/ListItem";
import Loader from "../atoms/Loader";
import Tag from "../atoms/Tag";
import LinkText from "./LinkText";
import AuthorRow from "./AuthorRow";

function SavedForLaterItem({
  idx,
  ...restProps
}: ListItemProps & { idx: number }) {
  const {
    data: insight,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["insight", idx],
    queryFn: () => getInsight(idx),
  });

  if (isPending) {
    return <Loader />;
  }

  // TODO pop up error
  if (isError) {
    return <p>Error occurred while fetching insight.</p>;
  }

  return (
    <ListItem
      {...restProps}
      className={`relative h-[550px] w-full overflow-hidden rounded-2xl`}
    >
      <ImageOverlayed
        src={insight.thumbnail}
        alt={insight.title}
        overlayStyle={
          "bg-gradient-to-br from-[rgba(18,18,18,0.73)] to-[rgba(96,109,43,0.58)]"
        }
      />
      <Box
        className={`absolute inset-0 z-10 grid h-full grid-rows-[min-content_auto_min-content] items-end gap-3 p-6`}
      >
        <Tag tagName={insight.topic.name} white />
        <LinkText
          href={`/insights/${idx}`}
          text={insight.title}
          level={3}
          lineClamp={4}
          className="text-white"
        />
        <AuthorRow creator={insight.creator} white />
      </Box>
    </ListItem>
  );
}

export default SavedForLaterItem;
