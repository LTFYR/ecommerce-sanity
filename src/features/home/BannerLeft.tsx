import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const BannerLeft = () => {
  return (
    <>
      <Heading
        size={{ base: "xl", lg: "3xl" }}
        lineHeight="4rem"
        color="brand.primary"
      >
        Find and buy <br /> Unlimited products
      </Heading>
      <Text fontSize={{ base: "md", lg: "lg" }} py="1rem" maxW="600px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        consequatur quam nulla id, corporis tempora corrupti autem molestias ea
        quod.
      </Text>
    </>
  );
};
