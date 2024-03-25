import { Flex, FlexProps, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ITitleProductProps extends FlexProps {
  text: string;
  textHeading: string;
}
export const TitleProduct: React.FC<ITitleProductProps> = (props:ITitleProductProps) => {
    return (
      <Flex border={"1px solid #f4f5f7"} borderRadius={7} p={2}>
        <Heading size="md">
          {props.textHeading}
          <Text py="2" fontWeight={400} fontSize={14}>{props.text}</Text>
        </Heading>
      </Flex>
    );
}