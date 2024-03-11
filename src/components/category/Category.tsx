import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCategory } from "@/hooks/useCategory";

const Category = () => {
  const { categories, isCategoriesLoading } = useCategory();

  if (isCategoriesLoading || !categories) {
    return null;
  }

  return (
    <CategoryStyle>
      <ul className="category-list">
        <h2>도서 카테고리</h2>
        {categories.map((item) => {
          return (
            <li key={item.categoryId}>
              <Link
                to={`/books${
                  item.categoryId !== null ? `?page=1&category_id=${item.categoryId}` : "?page=1"
                }`}
              >
                {item.categoryName}
              </Link>
            </li>
          );
        })}
      </ul>
    </CategoryStyle>
  );
};

const CategoryStyle = styled.div`
  .category-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;

    h2 {
      padding: 0.3rem;
      font-size: 1.5rem;
      font-weight: 600;
      border-bottom: 2px solid ${({ theme }) => theme.color.border};
    }

    li {
      white-space: nowrap;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 1.3rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.text};
      border-radius: 6px;
      transition: opacity 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => theme.color.backgroundRGBA};
      }

      a {
        padding: 10px;
        display: block;
      }
    }
  }
`;

export default Category;
