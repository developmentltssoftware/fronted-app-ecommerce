import { Flex } from "@chakra-ui/react";
import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { IoHome, IoBagHandle } from "react-icons/io5";
import { BsPersonFillCheck } from "react-icons/bs";
import { ButtonHeader } from "../ButtonHeader";
import pizzaria from "../../../../assets/img/pizza-nice.jpg";
import { ImageMain } from "./ImageMain";
import { HeaderNew } from "./HeaderNew";
import { FlexSelect } from "../FlexSelect";
import { FlexLogoSmall } from "./FlexLogoSmall";
import { CardSmallOrderProduct } from "../../CardSmallOrderProduct";
import coca from "../../../../assets/img/coca.jpg";
import fanta_laranja from "../../../../assets/img/fanta_laranja.jpg";
import sprit from "../../../../assets/img/SPRITE_LATA.jpg";
import { FlexBag } from "../../comanda/FlexBag";

const names = [
  {
    color: "#ffffff",
    nameButton: "Início",
    icon: <IoHome size={20} />,
    variant: "ghost",
  },
  {
    color: "#ffffff",
    nameButton: "Promoções",
    icon: <CiDiscount1 size={20} />,
    variant: "ghost",
  },
  {
    color: "#ffffff",
    nameButton: "Pedidos",
    icon: <IoBagHandle size={20} />,
    variant: "ghost",
  },
  {
    color: "#ffffff",
    nameButton: "Minha Conta",
    icon: <BsPersonFillCheck size={20} />,
    variant: "ghost",
  },
];
export const HeaderBlack: React.FC = () => {
  return (
    <Flex
      // father of everybody element
      flexDirection={"column"}
      gap={2}
      justifyContent={"space-between"}
      align={"center"}
      h={40}
      width={"100vw"}
      p={2}
      m={0}
      bg={"#000000"}
      pos={"relative"}
      backgroundImage={{
        base: `url(${pizzaria})`,
        sm: `url(${pizzaria})`,
        md: `url(${undefined})`,
        lg: `url(${undefined}`,
      }}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Flex align={"center"} gap={14} justify={"center"}>
        {/* flex of header */}
        {names.map((name, index) => (
          <Flex
            key={index}
            align={"center"}
            justify={"center"}
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          >
            <ButtonHeader
              leftIcon={name.icon}
              nameButton={name.nameButton}
              color={name.color}
              backgroundColor={"#000000"}
              variant={name.variant}
              _hover={{
                border: "1px solid #ffffff",
                backgroundColor: "transparent",
              }}
              flexDirection={"row"}
              fontSize={16}
              fontWeight={600}
            />
          </Flex>
        ))}
      </Flex>
      <ImageMain />
      <HeaderNew />
      <FlexLogoSmall />
      <FlexSelect />
    </Flex>
  );
};
