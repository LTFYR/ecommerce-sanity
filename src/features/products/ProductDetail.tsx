"use client";
import { Breadcumbs } from "@/components/Breadcumb";
import { AddToCard } from "@/components/AddToCard";
import BuyNowButton from "@/components/BuyNowButton";
import { Quantity } from "@/components/Quantity";
import { Rate } from "@/components/Rate";
import { IBreadCrumbType, IProductCardProps } from "@/interfaces/index";
import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link as CLink,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { substringText } from "@/constants/helpers";
import SimilarProducts from "@/components/SimilarProducts";

export const items: IBreadCrumbType[] = [
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Categories",
    link: "/categories",
  },
];

const ProductDetail: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <>
      <Breadcumbs
        items={[
          ...items,
          {
            name: product.category.name,
            link: `/categories/${product.category.id}`,
          },
          {
            name: substringText(product.name, 20),
            link: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p="2rem"
        gap="20"
      >
        <GridItem p="1rem">
          <Image
            height="660px"
            src={product?.mainImage}
            alt={product.name}
            mx="auto"
          />
        </GridItem>
        <GridItem p="1rem">
          <Heading>{product.name}</Heading>
          <Text my="1rem">{product.description}</Text>
          <Rate rating={product.rating} />
          <Text fontWeight="bold" fontSize="2rem">
            $ {product.price}
          </Text>
          <Divider my="1rem" />
          <Quantity />
          <Divider my="1rem" />
          <Box>
            <BuyNowButton product={product} />
            <AddToCard product={product} />
          </Box>
          <Stack py="2rem">
            <Box
              borderWidth="1px"
              borderColor="gray.300"
              borderRadius="8px"
              p="1rem"
            >
              <Text fontWeight="bold">Free Delivery</Text>
              <CLink textDecor="underline" color="gray.500">
                Enter your postal code to check free delivery availibility
              </CLink>
            </Box>
            <Box
              borderWidth="1px"
              borderColor="gray.300"
              borderRadius="8px"
              p="1rem"
            >
              <Text fontWeight="bold">Return product</Text>
              <Text color="gray.500">
                Free 30 Days Delivery Returns
                <CLink textDecor="underline">Details</CLink>
              </Text>
            </Box>
          </Stack>
          <SimilarProducts product={product} />
        </GridItem>
      </Grid>
    </>
  );
};

export default ProductDetail;
