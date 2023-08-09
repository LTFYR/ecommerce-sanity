"use client";
import { ITopCategoryCardProps } from "@/interfaces/index";
import { Card, CardBody, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CategoryCard: React.FC<ITopCategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card
        direction="column"
        align="center"
        overflow="hidden"
        w="100%"
        h="100%"
        p="10px"
        variant="outline"
        _hover={{ bgColor: "gray.200", cursor: "pointer" }}
      >
        <Image
          src={category.image}
          alt={category.name}
          width={200}
          height={200}
        />
        <CardBody>
          <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};
