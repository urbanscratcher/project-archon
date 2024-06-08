"use client";

import { getInsight } from "@/services/insights.api";
import { useQuery } from "@tanstack/react-query";
import Box from "../../components/atoms/Box";
import ImageOverlayed from "../../components/atoms/ImageOverlayed";
import Loader from "../../components/atoms/Loader";
import Tag from "../../components/atoms/Tag";
import AuthorRow from "../../components/molecules/AuthorRow";
import LinkText from "../../components/molecules/LinkText";

function SavedForLaterItem({ idx }: { idx: number }) {
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

  if (isError) {
    return <p className="h-full">Error occurred while fetching insight</p>;
  }

  const data = {
    thumbnail: insight?.thumbnail || "",
    title: insight.title,
    topicName: insight.topic.name,
    href: `/insights/${idx}`,
    creator: insight.createdBy,
  };

  return (
    <>
      <ImageOverlayed
        src={data.thumbnail}
        alt={data.title}
        overlayStyle={
          "bg-gradient-to-br from-[rgba(18,18,18,0.73)] to-[rgba(96,109,43,0.58)]"
        }
      />
      <Box
        className={`absolute inset-0 z-10 grid h-full grid-rows-[min-content_auto_min-content] items-end gap-3 p-6`}
      >
        <Tag tagName={data.topicName} white />
        <LinkText
          href={data.href}
          text={data.title}
          level={3}
          className="text-white"
        />
        <AuthorRow creator={data.creator} white />
      </Box>
    </>
  );
}

export default SavedForLaterItem;
