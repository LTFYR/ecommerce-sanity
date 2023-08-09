import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navbarStyle: BoxProps = {
  pos: "fixed",
  w: "100%",
  bg: "black",
  color: "white",
  top: 0,
  mb: "1rem",
  zIndex: 10,
};

export const desktopNavbarStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "1rem",
  borderBottomWidth: "1px",
  borderColor: "gray.200",
  display: { base: "none", lg: "flex" },
};

export const navbarLogoStyles: StackProps = {
  direction: "row",
  gap: 6,
  alignItems: "center",
};

export const cartLogoStyles: StackProps = {
  direction: "row",
  spacing: 2,
};

export const mobileNavbarContainerStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "1rem",
  display: { base: "flex", lg: "none" },
};
