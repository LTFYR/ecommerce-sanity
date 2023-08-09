import { ShopNowButtonStyles, ShopNowLinkStyles } from "@/components/style";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ShopNowButton = () => {
  return (
    <Link {...ShopNowLinkStyles} href="/products">
      <Button {...ShopNowButtonStyles}>Shop Now</Button>
    </Link>
  );
};

export default ShopNowButton;
