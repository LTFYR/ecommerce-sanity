"use client";

import { IBreadcrumbProps } from "@/interfaces/index";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Breadcumbs: React.FC<IBreadcrumbProps> = ({ items = [] }) => {
  return (
    <>
      {items.length > 0 && (
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          py="2rem"
          px="1rem"
          w={{ base: "100%", lg: "90%" }}
          mx="auto"
          fontSize={{ base: "xs", md: "md" }}
        >
          {items.map((item, i) =>
            i !== items.length - 1 ? (
              <BreadcrumbItem key={i}>
                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={i}>
                <Text color="gray.500">{item.name}</Text>
              </BreadcrumbItem>
            )
          )}
        </Breadcrumb>
      )}
    </>
  );
};
