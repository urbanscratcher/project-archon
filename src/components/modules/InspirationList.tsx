"use client";

import useInspClickedStore from "@/stores/useInspClickedStore";
import { InsightRandom, InsightRandomList } from "@/types/Insight";
import { useEffect, useState } from "react";
import ImageWrap from "../ImageWrap";
import Thumbnail from "../Thumbnail";

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
        <li key={`inspirations_${inspiration.idx}`}>
          <Thumbnail
            href={`/insights/${inspiration.idx}`}
            src={inspiration.thumbnail || ""}
            alt="inspiration"
            aspect={"photo"}
            rounded={"xl"}
          />
        </li>
      ))}
    </>
  );
}

export default InspirationList;
