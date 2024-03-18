import { Book } from "@/models/book.model";
import styled from "styled-components";
import BookItem from "@/components/books/BookItem";

interface Props {
  books: Book[];
}
const MainNewBooks = ({ books }: Props) => {
  return (
    <MainNewBooksStyle>
      {books.map((book) => (
        <BookItem key={book.id} book={book} view="grid" />
      ))}
    </MainNewBooksStyle>
  );
};

const MainNewBooksStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default MainNewBooks;