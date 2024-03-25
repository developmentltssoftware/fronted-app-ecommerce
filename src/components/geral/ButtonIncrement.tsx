import { Flex, Icon, IconProps, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { typeButton } from "../types/constants";

interface IButtonIncrementProps extends IconProps {
  types: typeButton;
  value: number;
  limit: number;
}

export const ButtonIncrement: React.FC<IButtonIncrementProps> = (
  props: IButtonIncrementProps
) => {
  const [stateButton, setStateButton] = useState<number>(props.value);
  
  let type_button: typeButton = typeButton.primary;

  switch (props.types) {
    case typeButton.primary:
      type_button = typeButton.primary;
      break;
    case typeButton.secondary:
      type_button = typeButton.secondary;
      () => setStateButton(0);
      break;
    default:
      break;
  }

  return (
    <Flex
      pt="2"
      gap={2}
      justify={"center"}
      align={"center"}
      fontSize="sm"
      backgroundColor={props.backgroundColor ? props.backgroundColor : "none"}
      w={"100px"}
      h={type_button === typeButton.primary ? "40px" : "10px"}
      borderRadius={7}
    >
      <Icon
        as={LuMinus}
        borderRadius={25}
        onClick={() => {
          setStateButton((prev) => Math.max(prev - 1, props.limit));
        }}
        _hover={{ cursor: "pointer", backgroundColor: "#ffff11" }}
        _focus={{ backgroundColor: "#f4f5f7" }}
        _active={{
          backgroundColor: "#f4f5f7",
        }}
        visibility={
          type_button === typeButton.secondary && stateButton <= 0
            ? "hidden"
            : "visible"
        }
        display={type_button === typeButton.secondary ? "flex" : "flex"}
      />
      <Text
        visibility={
          type_button === typeButton.secondary && stateButton <= 0
            ? "hidden"
            : "visible"
        }
        display={type_button === typeButton.secondary ? "flex" : "flex"}
      >
        {Math.abs(stateButton)}
      </Text>

      <Icon
        as={LuPlus}
        borderRadius={25}
        onClick={() => setStateButton((prev) => prev + 1)}
        _hover={{ cursor: "pointer", backgroundColor: "#ffff11" }}
        _focus={{ backgroundColor: "#f4f5f7" }}
        _active={{
          backgroundColor: "#f4f5f7",
        }}
      />
    </Flex>
  );
};
