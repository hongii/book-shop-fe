import styled from "styled-components";
import Button from "@/components/common/Button";
import { GoHeart } from "@react-icons/all-files/go/GoHeart";
import { AladinBookDetail } from "@/models/aladinBook.model";

interface Props {
  book: AladinBookDetail;
  onClick: () => void;
}

const LikeButton = ({ book, onClick }: Props) => {
  return (
    <LikeButtonStyle
      size="medium"
      scheme={`${book.isLiked ? "primary" : "normal"}`}
      onClick={onClick}
      book={book}
    >
      <GoHeart /> {book.likes}
    </LikeButtonStyle>
  );
};

const LikeButtonStyle = styled(Button)<Props>`
  color: ${({ book }) => (book.isLiked ? "red" : "inherit")};
  font-size: 1.5rem;

  svg {
    color: ${({ book }) => (book.isLiked ? "red" : "inherit")};
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    font-size: 2.2rem;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    font-size: 1.6rem;
  }
`;

export default LikeButton;
