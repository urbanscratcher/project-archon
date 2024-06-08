"use client";

import useInspClickedStore from "@/stores/useInspClickedStore";
import { InsightRandom, InsightRandomList } from "@/types/Insight";
import { useEffect, useState } from "react";
import ListItem from "../atoms/ListItem";
import Loader from "../atoms/Loader";
import Thumbnail from "../atoms/Thumbnail";

function Inspirations({
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
      <ListItem className="col-span-2 row-span-3 my-5">
        <Loader />
      </ListItem>
    );
  }

  if (isError) {
    return (
      <ListItem className="col-span-2 row-span-3 my-5">
        <p>error</p>
      </ListItem>
    );
  }

  return (
    <>
      {inspirations.map((i: InsightRandom) => (
        <ListItem key={i.idx}>
          <Thumbnail
            insightIdx={i.idx}
            href={`/insights/${i.idx}`}
            src={i.thumbnail || "/fallback.webp"}
            alt="inspiration"
            aspect={"photo"}
            rounded={"xl"}
          />
        </ListItem>
      ))}
    </>
  );
}

export default Inspirations;
