import { ITopCategoryCardProps } from "@/interfaces/index";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const CategoryCard: React.FC<ITopCategoryCardProps> = ({ category }) => {
  return (
    <Card
      direction="row"
      align="center"
      overflow="hidden"
      variant="outline"
      w="100%"
      h="100%"
      p="10px"
      _hover={{ cursor: "pointer", bgColor: "gray.300" }}
    >
      <Image src={category.image} alt={category.name} w={100} h={100} />
      <CardBody>
        <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
      </CardBody>
    </Card>
  );
};
