"use client";

import { ProductCard } from "@/components/ProductCard";
import { IProductsProps } from "@/interfaces/index";
import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { usePagination } from "@mantine/hooks";
const productsPerPage = 10;

export const Products: React.FC<IProductsProps> = ({ products }) => {
  const [show, setShow] = useState(products.slice(0, productsPerPage));

  const total = Math.ceil(products.length / productsPerPage);

  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * productsPerPage;
      const end = start + productsPerPage;
      setShow(products.slice(start, end));
    },
  });
  return (
    <>
      <Flex
        flexWrap="wrap"
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        justify={{ base: "center", lg: "space-between" }}
      >
        {show.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
      {productsPerPage < products.length && (
        <Flex
          justify="center"
          w={{ base: "100%", lg: "90%" }}
          mx="auto"
          py="2rem"
        >
          {pagination.range.map((range) =>
            range === "dots" ? (
              <Button
                borderWidth="1px"
                borderColor="brand.primary"
                color="brand.primary"
                bgColor="white"
                mx="1"
                key={range}
              >
                ...
              </Button>
            ) : (
              <Button
                onClick={() => pagination.setPage(range)}
                borderWidth="1px"
                borderColor="brand.primary"
                color={pagination.active === range ? "white" : "brand.primary"}
                bgColor={
                  pagination.active === range ? "brand.primary" : "white"
                }
                mx="1"
                key={range}
                _active={{ bgColor: "none" }}
                _hover={{ bgColor: "none" }}
              >
                {range}
              </Button>
            )
          )}
        </Flex>
      )}
    </>
  );
};
