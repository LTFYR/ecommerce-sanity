import { IRatingProps } from "@/interfaces/index";
import { colors } from "@/theme";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReactStars from "react-stars";

export const Rate: React.FC<IRatingProps> = ({ rating }) => {
  return (
    <Flex justify="space-between">
      <ReactStars
        count={5}
        value={rating.rate}
        half={true}
        size={18}
        color2={"yellow"}
        edit={false}
      />
      <Text>({rating.count})</Text>
    </Flex>
  );
};
