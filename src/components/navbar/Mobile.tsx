import { mobileNavbarContainerStyles } from "@/components/navbar/style";
import { Logo } from "@/components/Logo";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Search } from "@/components/navbar/search/Search";
import { MobileNavLinks } from "@/components/navbar/MobileNavLinks";
import { Cart } from "@/components/Cart/Cart";
import { Wishlist } from "@/components/Wishlist/Wishlist";

export const Mobile = () => {
  return (
    <Box>
      <Flex {...mobileNavbarContainerStyles}>
        <Box>
          <MobileNavLinks />
        </Box>
        <Logo />

        <Stack direction="row" spacing={1}>
          <Box>
            <Wishlist />
          </Box>
          <Box>
            <Cart />
          </Box>
        </Stack>
      </Flex>
      <Box
        px="2rem"
        py="0.05rem"
        mb="1rem"
        display={{ base: "block", lg: "none" }}
      >
        <Search />
      </Box>
    </Box>
  );
};
