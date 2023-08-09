"use client";
import { ProductCard } from "@/components/ProductCard";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperNavigation } from "@/components/SwiperNavigation";
import { FeaturedProductProps } from "@/interfaces/index";
import { FeaturesTitle } from "@/components/FeaturesTitle";
import { Box } from "@chakra-ui/react";

export const FeaturedProducts: React.FC<FeaturedProductProps> = ({
  title,
  products,
}) => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" p="2rem">
      <FeaturesTitle title={title} />
      <Swiper
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ width: "100%", height: "100%" }}
        //   navigation
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <SwiperNavigation />
      </Swiper>
    </Box>
  );
};
