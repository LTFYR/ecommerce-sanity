"use client";
import ShopNowButton from "@/components/ShopNowButton";
import { BannerLeft } from "@/features/home/BannerLeft";
import { BannerFlexStyles } from "@/features/home/style";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const Banner = () => {
  return (
    <Flex {...BannerFlexStyles}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <BannerLeft />
        <ShopNowButton />
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box
          w={{ base: "300px", lg: "600px" }}
          h={{ base: "300px", lg: "500px" }}
          mx="2rem"
          bg="center / cover no-repeat url(banner.png)"
        />
      </Box>
    </Flex>
  );
};
