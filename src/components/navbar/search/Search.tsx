import { inputStyles } from "@/components/navbar/search/style";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

export const Search = () => {
  return (
    <Box>
      <InputGroup size="sm" w={{ base: "100%", lg: "32rem" }}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
        />
        <Input {...inputStyles} type="text" placeholder="Search products" />
      </InputGroup>
    </Box>
  );
};
