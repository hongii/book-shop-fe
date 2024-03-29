import styled from "styled-components";
import Title from "@/components/common/Title";
import { Link } from "react-router-dom";

interface Props {
  icon?: React.ReactNode;
  linkIcon?: React.ReactNode;
  title: string;
  link?: string;
  linkMsg?: string;
}

const Empty = ({ icon, linkIcon, title, link, linkMsg }: Props) => {
  return (
    <EmptyStyle>
      {icon && <div className="icon">{icon}</div>}

      <Title size="large" color="secondary">
        {title}
      </Title>
      {link && linkMsg && (
        <p>
          <Link to={link}>
            {linkIcon}
            &nbsp; {linkMsg}
          </Link>
        </p>
      )}
    </EmptyStyle>
  );
};

const EmptyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  flex: 1;

  .icon {
    svg {
      font-size: 4rem;
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  a {
    display: flex;
    align-items: center;
    font-size: 1.3rem;

    &:hover {
      opacity: 0.8;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    a {
      font-size: 2rem;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    a {
      font-size: 1.7rem;
    }
  }
`;

export default Empty;
