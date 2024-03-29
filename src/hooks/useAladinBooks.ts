import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKey } from "@/constants/queryKey";
import { fetchBookList } from "@/api/aladin.api";
import { useLocation } from "react-router-dom";
import { QUERYSTRING } from "@/constants/querystring";

export const useAladinBooks = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get(QUERYSTRING.CATEGORY_ID);
  const isNew =
    searchParams.get(QUERYSTRING.NEW) === "true" ? "ItemNewSpecial" : "ItemEditorChoice";
  const queryType = categoryId === null && isNew === "ItemEditorChoice" ? "Bestseller" : isNew;

  const { data, isLoading, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [queryKey.aladinBooks, location.search],
    queryFn: ({ pageParam = 1 }) => fetchBookList(queryType, categoryId, pageParam),
    getNextPageParam: (_, allPages): number | null => {
      return allPages.length < 10 ? allPages.length + 1 : null;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 60 * 18,
    gcTime: 1000 * 60 * 60 * 24,
  });

  const books = data?.pages[0].length ? data.pages.flat() : [];
  const isEmpty = books.length === 0;

  return {
    aladinBooks: books,
    isFetching,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isEmpty,
  };
};
