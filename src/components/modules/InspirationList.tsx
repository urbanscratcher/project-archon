"use client";

import useInspClickedStore from "@/stores/useInspClickedStore";
import { InsightRandom, InsightRandomList } from "@/types/Insight";
import { useEffect, useState } from "react";
import ImageWrap from "../ImageWrap";

function InspirationList({
  initialInspirations,
}: {
  initialInspirations: InsightRandomList;
}) {
  const [inspirations, setInspirations] = useState(initialInspirations);

  const data = useInspClickedStore((state: any) => state.data);
  const isLoading = useInspClickedStore((state: any) => state.isLoading);
  const isError = useInspClickedStore((state: any) => state.isError);

  useEffect(() => {
    if (data?.length > 0) {
      setInspirations(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      {inspirations.map((inspiration: InsightRandom) => (
        <li
          key={`${inspiration.title}_${inspiration.idx}`}
          className={`relative aspect-[3/2] w-full overflow-hidden rounded-xl`}
        >
          <ImageWrap
            src={inspiration.thumbnail || ""}
            alt="inspiration"
            fill
            className={`object-cover`}
          />
        </li>
      ))}
    </>
  );
}

export default InspirationList;
