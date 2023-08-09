import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <Text color={"white"} fontWeight={"bold"}>
        Shop
        <Text as="span" color="aqua">
          Y
        </Text>
      </Text>
    </Link>
  );
};
