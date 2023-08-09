import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export const SwiperNavigation = () => {
  const swiper = useSwiper();
  return (
    <Box mb="1.5rem">
      <IconButton
        rounded="lg"
        icon={<FaChevronLeft />}
        borderWidth="1px"
        borderColor="brand.primary"
        bgColor="white"
        color="brand.dark"
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
        mx="1"
      />
      <IconButton
        rounded="lg"
        icon={<FaChevronRight />}
        borderWidth="1px"
        borderColor="brand.primary"
        bgColor="white"
        color="brand.dark"
        aria-label="Prev"
        onClick={() => swiper.slideNext()}
        mx="1"
      />
    </Box>
  );
};
