"use client";

import { IHeroProps } from "@/interfaces/index";
import { heroCardImageStyle, heroCardStyle } from "@/components/hero/style";
import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export const Hero: React.FC<IHeroProps> = ({
  bntLink,
  btnContent,
  description,
  heading,
  imageUrl,
}) => {
  return (
    <Box bgColor="brand.light" width="100%">
      <Card {...heroCardStyle}>
        <Box mx="2rem" w={{ base: "100%", lg: "50%" }}>
          <Heading size={{ base: "xl", lg: "2xl" }}>{heading}</Heading>
          <Text py="1rem">{description}</Text>
          <Link href={bntLink}>
            <Button
              bgColor="red.500"
              border="none"
              color="white"
              variant="outline"
              _hover={{
                bg: "transparent",
                border: "1px solid white",
                color: "red",
              }}
            >
              {btnContent}
            </Button>
          </Link>
        </Box>
        <Box mx="2rem" w={{ base: "100%", lg: "50%" }}>
          <Image src={imageUrl} alt={heading} {...heroCardImageStyle} />
        </Box>
      </Card>
    </Box>
  );
};
