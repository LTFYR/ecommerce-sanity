import { CardProps, ImageProps } from "@chakra-ui/react";

export const heroCardStyle: CardProps = {
  direction: { base: "column", lg: "row" },
  align: "center",
  justify: "center",
  overflow: "hidden",
  variant: "outline",
  shadow: "sm",
  bgColor: "brand.light",
  gap: { base: 6, lg: 0 },
  border: "none",
  p: "2rem",
  width: { base: "100%", lg: "90%" },
  mx: "auto",
  mb: "2rem",
};

export const heroCardImageStyle: ImageProps = {
  objectFit: "cover",
  maxW: "100%",
  rounded: "md",
};
