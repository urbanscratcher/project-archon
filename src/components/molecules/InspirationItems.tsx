"use client";

import useInspClickedStore from "@/stores/useInspClickedStore";
import { InsightRandom, InsightRandomList } from "@/types/Insight";
import { useEffect, useState } from "react";
import Thumbnail from "../atoms/Thumbnail";
import ListItem from "../atoms/ListItem";
import Loader from "../atoms/Loader";

function InspirationItems({
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

  // TODO error modal
  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      {inspirations.map((inspiration: InsightRandom) => (
        <ListItem key={`inspirations_${inspiration.idx}`}>
          <Thumbnail
            insightIdx={inspiration.idx}
            href={`/insights/${inspiration.idx}`}
            src={inspiration.thumbnail || ""}
            alt="inspiration"
            aspect={"photo"}
            rounded={"xl"}
          />
        </ListItem>
      ))}
    </>
  );
}

export default InspirationItems;
