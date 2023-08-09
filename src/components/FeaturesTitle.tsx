import { FeaturesTitleStyles } from "@/components/style";
import { FeaturesTitleProps } from "@/interfaces/index";
import { Heading } from "@chakra-ui/react";
import React from "react";

export const FeaturesTitle: React.FC<FeaturesTitleProps> = ({ title }) => {
  return (
    <Heading {...FeaturesTitleStyles} size="md">
      {title}
    </Heading>
  );
};
