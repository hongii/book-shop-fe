import styled from "styled-components";
import { Cart } from "../../models/cart.model";
import { formatNumber } from "../../utils/format";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";
import CheckIconButton from "./CheckIconButton";
import { useMemo } from "react";
import { useAlert } from "../../hooks/useAlert";
import { getImgSrc } from "../../utils/image";

interface CartsProps {
  cart: Cart;
  selectedItems: number[];
  onSelected: (id: number) => void;
  onDeleted: (id: number) => void;
}

const CartItem = ({ cart, selectedItems, onSelected, onDeleted }: CartsProps) => {
  console.log(cart);
  const { showConfirm } = useAlert();
  const isSelected = useMemo(
    () => selectedItems.includes(cart.cartItemId),
    [selectedItems, cart.cartItemId],
  );

  const handleOnClick = () => {
    onSelected(cart.cartItemId);
  };

  const handleOnDelete = () => {
    showConfirm("선택한 상품을 삭제하시겠어요?", () => onDeleted(cart.cartItemId));
  };

  return (
    <CartItemStyle>
      <div className="check-content-container">
        <CheckIconButton isSelected={isSelected} onClick={handleOnClick} />
        <div className="book-img">
          <img src={getImgSrc(+cart.imgUrl)} alt="book-img" />
        </div>
        <div className="book-contents">
          <h1 className="title">{cart.title}</h1>
          <p className="book-summary">{cart.summary}</p>
          <p className="price">{`${formatNumber(cart.price)}원`}</p>
          <p className="quantity">{cart.quantity}권</p>
        </div>
      </div>
      <button className="delete-btn" onClick={handleOnDelete}>
        <IoCloseOutline />
      </button>
    </CartItemStyle>
  );
};

const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* margin: 1.5rem 0; */
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  width: 100%;

  p {
    margin: 0;
  }

  .book-img {
    img {
      border-radius: ${({ theme }) => theme.borderRadius.default};
      max-width: 130px;
      object-fit: fill;
    }

    @media screen and (max-width: 600px) {
      img {
        max-width: 100px;
      }
    }
  }

  .check-content-container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .book-contents {
    width: 100%;
    padding: 0 1rem;
    /* flex-grow: 1; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .book-summary {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .delete-btn {
    display: flex;
    align-items: flex-start;
    font-size: 2rem;
    border: none;
    background: none;
    padding: 0;

    svg {
      color: ${({ theme }) => theme.buttonScheme.normal.color};
      cursor: pointer;
    }
  }
`;

export default CartItem;