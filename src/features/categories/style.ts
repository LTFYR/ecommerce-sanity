import { GridProps } from "@chakra-ui/react";

export const allCategoriesStyles: GridProps = {
  w: { base: "100%", lg: "90%" },
  templateColumns: { base: "repeat(1,1fr)", lg: "repeat(2,1fr)" },
  gap: "20px",
  p: "2rem",
  mx: "auto",
};
