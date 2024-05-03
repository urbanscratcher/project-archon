"use client";

import { getRandomInsights } from "@/services/insights.api";
import useInspClickedStore from "@/stores/useInspClickedStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { IoFlashSharp } from "react-icons/io5";

function GetInspirationsBtn() {
  const { clicked, setClicked, setIsLoading, setIsError, setData } =
    useInspClickedStore((state: any) => ({
      clicked: state.clicked,
      setClicked: state.setClicked,
      setIsLoading: state.setIsLoading,
      setIsError: state.setIsError,
      setData: state.setData,
    }));

  const limit = 6;
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["inspirations", limit],
    queryFn: () => getRandomInsights({ limit }),
    enabled: clicked,
  });

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    setIsError(isError);
  }, [isError, setIsError]);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data, setData]);

  const clickHandler = () => {
    setClicked(true);
    refetch();
  };

  return (
    <button onClick={clickHandler}>
      <IoFlashSharp
        className={`scale-[120%] hover:cursor-pointer hover:text-sky-600`}
      />
    </button>
  );
}

export default GetInspirationsBtn;
