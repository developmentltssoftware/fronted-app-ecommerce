import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { IoHome, IoBagHandle } from "react-icons/io5";
import { BsPersonFillCheck } from "react-icons/bs";
import maranata_logo from '../../../../assets/img/Maranata_logo.jpg'
import maranata from "../../../../assets/img/maranata.jpg";
import { InputSearch } from "../../InputSearch";
import { ButtonHeader } from "../ButtonHeader";
import { SelectHeader } from "../SelectHeader";
import { optionslabels } from "../../../types/constants";

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
export const HeaderFixed: React.FC = () => {
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
              fontSize={16}
              fontWeight={600}
            />
          </Flex>
        ))}
      </Flex>
      <Flex>
        <Flex
          align={"center"}
          justify={"center"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <Image
            src={`${maranata}`}
            borderRadius={20}
            p={1}
            border={"1px solid gray"}
            top={40}
            backgroundColor="#ffffff"
          />
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          flexDirection={{
            base: "column",
            sm: "row",
            lg: "row",
            md: "row",
            xl: "row",
          }}
          mt={{ base: 36, xl: 80, lg: 80, md: 80, sm: 60 }}
          //top={{base: 10, sm: 10, md: 100, lg: 100, xl: 100}}
          pos={"absolute"}
          gap={4}
          ml={4}
        >
          <Image
            src={`${maranata_logo}`}
            borderRadius={20}
            p={2}
            boxSize={40}
            //border={'1px solid black'}
          />
          <Flex flexDirection={"column"} gap={4}>
            <Text fontSize={40} fontWeight={600}>
              Maranata Pastéis e Pizzas
            </Text>
            <Text fontSize={14} fontWeight={500}>
              Horário de funcionameto: 18h às 23h, End: rua H, 1203A
            </Text>
            <Text fontSize={14} fontWeight={500}></Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection={{
            base: "column",
            sm: "column",
            lg: "row",
            md: "row",
            xl: "row",
          }}
          pos={"absolute"}
          top={{ xl: 600, lg: 600, md: 600, sm: 450, base: 300 }}
          //w={"100vw"}
          gap={{ base: 5, sm: 5, md: 20, lg: 20, xl: 20 }}
        >
          <SelectHeader
            options={optionslabels}
            w={80}
            placeholder="Nossos Produtos"
          />
          <InputSearch />
        </Flex>
      </Flex>
    </Flex>
  );
};
