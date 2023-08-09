import { Mobile } from "@/components/navbar/Mobile";
import { Desktop } from "@/components/navbar/Desktop";
import { navbarStyle } from "@/components/navbar/style";
import { Box } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <Box
      h="60px"
      mb={{ base: "60px", lg: "0" }}
      bgColor="red.100"
      display="flex"
      alignItems={"center"}
    >
      <Box {...navbarStyle}>
        <Desktop />
        <Mobile />
      </Box>
    </Box>
  );
};
