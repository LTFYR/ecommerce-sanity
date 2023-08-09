import { Button } from "@chakra-ui/react";
import { AppContext } from "@/context/appContent";
import { IProduct } from "@/interfaces/index";
import React, { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface IAddToWishlistButtonProps {
  product: IProduct;
}

export const AddToWishlistButton = ({ product }: IAddToWishlistButtonProps) => {
  const { addToCart, removeFromCart, checkBasket } = useContext(AppContext);

  return (
    <>
      {checkBasket("wishlist", product.id) ? (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: "transparent" }}
          rounded="full"
          title="Remove from Wishlist"
          onClick={() => removeFromCart("wishlist", product.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: "transparent" }}
          rounded="full"
          title="Add to Wishlist"
          onClick={() => addToCart("wishlist", product)}
        >
          <BsHeart />
        </Button>
      )}
    </>
  );
};
