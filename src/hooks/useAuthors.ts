import { getAuthors } from "@/api/authors.api";
import { useInfiniteQuery } from "@tanstack/react-query";

function useAuthors({
  limit,
  offset,
  initialData,
}: {
  limit: number;
  offset: number;
  initialData?: any;
}) {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["authors", offset],
      queryFn: ({ pageParam = 0 }) => getAuthors({ limit, offset: pageParam }),
      initialPageParam: 0,
      initialData: {
        pages: [initialData],
        pageParams: [0],
      },
      getNextPageParam: (lastPage, _allPages) => {
        const { offset, limit, total } = lastPage;
        const nextOffset = (offset || 0) + (limit || 5);
        return nextOffset < total ? nextOffset : undefined;
      },
    });

  return { data, isLoading, isError, fetchNextPage, hasNextPage };
}
export default useAuthors;
