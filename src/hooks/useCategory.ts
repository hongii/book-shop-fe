import { Category } from "./../models/category.model";
import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    const id = params.get("category_id");
    setCategory((prev) => {
      return prev.map((item) => {
        if (id) {
          return {
            ...item,
            isActive: +id === item.categoryId ? true : false,
          };
        } else {
          return {
            ...item,
            isActive: item.categoryId === null ? true : false,
          };
        }
      });
    });
  };

  useEffect(() => {
    fetchCategory().then((results) => {
      if (!results) return;

      const allCategories = [{ categoryId: null, categoryName: "전체" }, ...results.categories];
      setCategory(allCategories);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { category };
};
