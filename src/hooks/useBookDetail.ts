import { addBookReviewRequest } from "@/api/review.api";
import { useState } from "react";
import { fetchDetailBooks, toggleLikeBook } from "@/api/books.api";
import { addToCartParams, requestAddToCart } from "@/api/carts.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "@/constants/queryKey";
import { addBookReview, fetchBookReview } from "@/api/review.api";
import { useAlert } from "@/hooks/useAlert";
import { BookReviewItem } from "@/models/book.model";
import { useToast } from "@/hooks/useToast";
import { useCartStore } from "@/store/cartStore";

export const useBookDetail = (bookId: string | undefined) => {
  // const [isAddToCart, setIsAddToCart] = useState<boolean>(false);
  // const [resMessage, setResMessage] = useState<string>("");
  // const { updateCartItemsCount } = useCartStore();
  // const { showAlert } = useAlert();
  // const { showToast } = useToast();
  // const queryClient = useQueryClient();
  // const { data: bookDetail, isLoading: isBookDetailLoading } = useQuery({
  //   queryKey: [queryKey.bookDetail, bookId],
  //   queryFn: () => (bookId && Number(bookId) ? fetchDetailBooks(bookId) : Promise.resolve(null)),
  // });
  // const { data: bookReview, isLoading: isBookReviewLoading } = useQuery({
  //   queryKey: [queryKey.bookReview, bookId],
  //   queryFn: () => (bookId ? fetchBookReview(bookId) : Promise.resolve(null)),
  // });
  // const { mutate: addToCart } = useMutation({
  //   mutationFn: async ({ bookId, quantity }: addToCartParams) => {
  //     const { cartItemsCount, message } = await requestAddToCart({ bookId, quantity });
  //     return { cartItemsCount, message };
  //   },
  //   onSuccess: ({ cartItemsCount, message }) => {
  //     updateCartItemsCount(cartItemsCount);
  //     setResMessage(message);
  //     setIsAddToCart(true);
  //     setTimeout(() => {
  //       setIsAddToCart(false);
  //     }, 3000);
  //   },
  // });
  // const { mutate: toggleLike } = useMutation({
  //   mutationFn: async (bookId: number) => {
  //     const { likes, message } = await toggleLikeBook(bookId);
  //     return { likes, message };
  //   },
  //   onSuccess: ({ likes, message }) => {
  //     if (bookDetail) {
  //       const updatedBookDetail = {
  //         ...bookDetail,
  //         likes: likes,
  //         isLiked: message === "liked",
  //       };
  //       queryClient.setQueryData([queryKey.bookDetail, bookId], updatedBookDetail);
  //       const showMessage =
  //         message === "liked" ? "좋아요를 추가하였습니다." : "좋아요를 취소하였습니다.";
  //       showToast(showMessage);
  //     }
  //   },
  // });
  // const { mutate: addReview } = useMutation({
  //   mutationFn: ({ bookId, reviewData }: addBookReviewRequest) => addBookReview(bookId, reviewData),
  //   onSuccess: ({ message, reviewData }) => {
  //     const previousData: BookReviewItem[] | undefined = queryClient.getQueryData([
  //       queryKey.bookReview,
  //       bookId,
  //     ]);
  //     if (previousData) {
  //       const newData = [...previousData, reviewData];
  //       queryClient.setQueryData([queryKey.bookReview, bookId], newData);
  //     }
  //     showAlert(message);
  //   },
  // });
  // return {
  //   bookDetail,
  //   isBookDetailLoading,
  //   toggleLike,
  //   addToCart,
  //   isAddToCart,
  //   bookReview,
  //   isBookReviewLoading,
  //   addReview,
  //   message: resMessage,
  // };
};
