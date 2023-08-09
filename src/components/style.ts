import { ButtonProps, HeadingProps } from "@chakra-ui/react";

export const ShopNowButtonStyles: ButtonProps = {
  rounded: "full",
  minW: "10rem",
  color: "white",
  bgColor: "brand.primary",
  _hover: { bgColor: "brand.dark" },
};

export const ShopNowLinkStyles = {
  display: "flex",
  justifyContent: { base: "center", lg: "center" },
};

export const FeaturesTitleStyles: HeadingProps = {
  my: "1.5rem",
};
