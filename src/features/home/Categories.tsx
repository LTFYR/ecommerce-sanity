"use client";

import { CategoryCard } from "@/features/home/CategoryCard";
import { FeaturesTitle } from "@/components/FeaturesTitle";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { ITopCategoriesProps } from "@/interfaces/index";

export const TopCategories: React.FC<ITopCategoriesProps> = ({
  categories,
}) => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem" px="2rem">
      <FeaturesTitle title="Our Top Categories" />
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap="4"
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <CategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
