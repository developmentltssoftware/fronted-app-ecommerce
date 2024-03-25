import { ButtonProps, Flex } from "@chakra-ui/react";
import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { IoHome, IoBagHandle } from "react-icons/io5";
import { InputSearch } from "../../InputSearch";
import { ButtonHeader } from "../ButtonHeader";
export const names = [
  {
    color: "#000000",
    nameButton: "Início",
    icon: <IoHome size={20} />,
    variant: "outline",
    flagNameButton: true,
  },
  {
    color: "#000000",
    nameButton: "Promoções",
    icon: <CiDiscount1 size={20} />,
    variant: "outline",
    flagNameButton: true,
  },
  {
    color: "#000000",
    nameButton: "Pedidos",
    icon: <IoBagHandle size={20} />,
    variant: "outline",
    flagNameButton: true,
  },
];
interface IButtons extends ButtonProps {
  flagNameButton?: boolean;
}
export const Buttons: React.FC<IButtons> = (props: IButtons) => {
  return (
    <>
      <Flex align={"center"} justify={"center"} gap={4}>
        <InputSearch w={{ xl: 60, lg: 60, md: 60, sm: "10px", base: "10px" }} />
        {names.map((name, index) => (
          <Flex
            key={index}
            display={props.display}
            justify={"center"}
          >
            <ButtonHeader
              leftIcon={name.icon}
              nameButton={name.nameButton}
              color={name.color}
              variant={name.variant}
              _hover={{ borderColor: "#000" }}
            />
          </Flex>
        ))}
      </Flex>
    </>
  );
};
