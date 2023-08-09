"use client";

import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AppContext } from "@/context/appContent";
import { IBreadCrumbType, IProductCardProps } from "@/interfaces/index";

const BuyNowButton: React.FC<IProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { reset, addToCart } = useContext(AppContext);
  return (
    <Link href="/checkout">
      <Button
        variant="outline"
        size="sm"
        w="160px"
        mr="1rem"
        my="0.5rem"
        _hover={{ bgColor: "none" }}
        bgColor="brand.primary"
        color="white"
        borderRadius="50px"
        onClick={() => {
          reset("checkout");
          addToCart("checkout", product, quantity);
        }}
      >
        Buy Now
      </Button>
    </Link>
  );
};

export default BuyNowButton;
