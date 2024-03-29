import styled from "styled-components";
import { IoEllipseOutline } from "@react-icons/all-files/io5/IoEllipseOutline";
import { IoCheckmarkCircle } from "@react-icons/all-files/io5/IoCheckmarkCircle";

interface Props {
  isSelected: boolean;
  onClick: () => void;
}

const CheckIconButton = ({ isSelected, onClick }: Props) => {
  return (
    <CheckIconButtonStyle $isSelected={isSelected} onClick={onClick}>
      {isSelected ? <IoCheckmarkCircle /> : <IoEllipseOutline />}
    </CheckIconButtonStyle>
  );
};

interface CheckIconButtonStyleProps {
  $isSelected: boolean;
}

const CheckIconButtonStyle = styled.button<CheckIconButtonStyleProps>`
  display: flex;
  align-items: flex-start;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;

  svg {
    color: ${({ theme, $isSelected }) =>
      $isSelected ? theme.buttonScheme.primary.backgroundColor : theme.buttonScheme.normal.color};

    circle {
      color: inherit;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    svg {
      width: 3rem;
      height: 3rem;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    svg {
      width: 2.7rem;
      height: 2.7rem;
    }
  }
`;

export default CheckIconButton;
