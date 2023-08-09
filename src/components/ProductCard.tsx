"use client";
import { IProductCardProps } from "@/interfaces/index";
import { AddToCard } from "@/components/AddToCard";
import { Rate } from "@/components/Rate";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { substringText } from "@/constants/helpers";
import Link from "next/link";
import { AddToWishlistButton } from "@/components/WishlistButton";

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <Card w="xs" pos="relative" m="0.5rem" border="1px solid lightgray">
      <AddToWishlistButton product={product} />
      <CardBody>
        <Box
          boxSize="200px"
          bg={`center / contain no-repeat url(${product.mainImage})`}
          mx="auto"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product.slug}`}>
              <Heading size="sm">{substringText(product.name, 20)}</Heading>
            </Link>
            <Flex color="brand.dark" align="center" fontWeight="bold">
              <Text fontSize="sm">$</Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text>{substringText(product.description, 30)}</Text>
          <Rate rating={product.rating} />
          <AddToCard product={product} />
        </Stack>
      </CardBody>
    </Card>
  );
};
