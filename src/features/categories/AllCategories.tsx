"use client";

import { CategoryCard } from "@/features/categories/CategoryCard";
import { allCategoriesStyles } from "@/features/categories/style";
import { IAllCategoriesProps } from "@/interfaces/index";
import { Grid } from "@chakra-ui/react";
import React from "react";

const AllCategories: React.FC<IAllCategoriesProps> = ({ categories }) => {
  return (
    <Grid {...allCategoriesStyles}>
      {categories.map((category, i) => (
        <CategoryCard key={i} category={category} />
      ))}
    </Grid>
  );
};

export default AllCategories;
