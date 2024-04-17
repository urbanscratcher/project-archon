"use client";

import useInspClickedStore from "@/stores/useInspClickedStore";
import { InsightRandom, InsightRandomList } from "@/types/Insight";
import { useEffect, useState } from "react";
import Thumbnail from "../Thumbnail";
import Loader from "../Loader";

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
    return (
      <li className="col-span-2 row-span-3 my-5">
        <Loader />
      </li>
    );
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      {inspirations.map((inspiration: InsightRandom) => (
        <li key={`inspirations_${inspiration.idx}`}>
          <Thumbnail
            insightIdx={inspiration.idx}
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
