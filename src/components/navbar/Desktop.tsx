import { NavLinks } from "@/components/navbar/NavLinks";
import { Logo } from "@/components/Logo";
import {
  cartLogoStyles,
  desktopNavbarStyles,
  navbarLogoStyles,
} from "@/components/navbar/style";
import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { Search } from "@/components/navbar/search/Search";
import { Cart } from "@/components/Cart/Cart";
import { Wishlist } from "@/components/Wishlist/Wishlist";

export const Desktop = () => {
  return (
    <Flex {...desktopNavbarStyles}>
      <Stack {...navbarLogoStyles}>
        <Box>
          <Logo />
        </Box>
        <NavLinks />
      </Stack>
      <Stack>
        <Box>
          <Search />
        </Box>
      </Stack>
      <Stack {...cartLogoStyles}>
        <Box>
          <Wishlist />
        </Box>
        <Box>
          <Cart />
        </Box>
      </Stack>
    </Flex>
  );
};
