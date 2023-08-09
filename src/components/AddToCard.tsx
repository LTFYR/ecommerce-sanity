"use client";
import { IAddToCartProps, IProduct } from "@/interfaces/index";
import { AppContext } from "@/context/appContent";
import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";

interface IAddToCartButtonProps {
  product: IProduct;
  count?: number;
}

export const AddToCard = ({ product, count }: IAddToCartButtonProps) => {
  console.log(product);
  const {
    addToCart,
    state,
    removeFromCart,
    decrease,
    increase,
    reset,
    checkBasket,
  } = useContext(AppContext);

  console.log(state);
  return (
    <>
      {checkBasket("cart", product.id) ? (
        <Button
          variant="outline"
          borderColor="gray.200"
          color="gray.500"
          rounded="full"
          size="sm"
          w="150px"
          onClick={() => removeFromCart("cart", product.id)}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          rounded="full"
          size="sm"
          w="150px"
          transition={"ease"}
          _hover={{ color: "white", bgColor: "brand.primary" }}
          onClick={() => addToCart("cart", product, count)}
        >
          Add to cart
        </Button>
      )}
    </>
  );
};
