import { Flex, useDisclosure } from "@chakra-ui/react";
import { CardSmallOrderProduct } from "../components/geral/CardSmallOrderProduct";
import { Cupom } from "../components/geral/Cupom";
import { OrderOfProductClient } from "../components/geral/OrderOfProductClient";
import coca from "../assets/img/coca.jpg";
import fanta_laranja from "../assets/img/fanta_laranja.jpg";
import sprit from "../assets/img/SPRITE_LATA.jpg";
import { FooterMainHome } from "../components/geral/footer/FooterMainHome";
import { ModalProduct } from "../components/geral/modalProduct/ModalProduct";
import { ListBebidas } from "../components/listBebidas/ListBebidas";
import { ListPizza } from "../components/listPizza/ListPizza";
import { HeaderSuspense } from "../components/geral/header/headerSuspense/HeaderSuspense";
import { Buttons } from "../components/geral/header/headerSuspense/Buttons";
import { FooterHeader } from "../components/geral/header/headerSuspense/FooterHeader";
import { FlexLogo } from "../components/geral/header/headerNew/FlexLogo";
import { HeaderNew } from "../components/geral/header/headerNew/HeaderNew";
import { HeaderBlack } from "../components/geral/header/headerNew/HeaderBlack";
import { useState } from "react";
export const Test: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      flexDirection={"column"}
      w={"100vw"}
      minH={"auto"}
      h={"350vh"}
      alignContent={"center"}
      align={"center"}
      justifyContent={"space-between"}
      bgColor={"#f4f5f7"}
    >
      {/* <Cupom
        title={""}
        nameButton={"Cupom"}
        input={undefined}
        isOpen={isOpen}
        onClose={onClose}
        children={undefined}
      /> */}
      {/* <ModalProduct isOpen={isOpen} onOpen={onOpen} onClose={onClose} 
      descriptionProduct={""} 
      children={undefined} 
      valueProduct={0} nameProduct={"Pizza"} /> */}

      <HeaderBlack />
      <OrderOfProductClient
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        children={[
          <CardSmallOrderProduct
            quantity={3}
            nameProduct={"Coca cola"}
            costProduct={8.99}
            imageProduct={coca}
          />,
          <CardSmallOrderProduct
            quantity={3}
            nameProduct={"Coca cola"}
            costProduct={8.99}
            imageProduct={coca}
          />,
          <CardSmallOrderProduct
            quantity={3}
            nameProduct={"Coca cola"}
            costProduct={8.99}
            imageProduct={coca}
          />,
          <CardSmallOrderProduct
            quantity={3}
            nameProduct={"Fanta Laranja Lata"}
            costProduct={8.99}
            imageProduct={fanta_laranja}
          />,
          <CardSmallOrderProduct
            quantity={3}
            nameProduct={"Sprit Lata"}
            costProduct={5.3}
            imageProduct={sprit}
          />,
          <CardSmallOrderProduct
            quantity={3}
            nameProduct={"Coca cola"}
            costProduct={8.99}
            imageProduct={coca}
          />,
          <CardSmallOrderProduct
            quantity={3}
            nameProduct={"Fanta Laranja Lata"}
            costProduct={8.99}
            imageProduct={fanta_laranja}
          />,
          <CardSmallOrderProduct
            quantity={3}
            nameProduct={"Sprit Lata"}
            costProduct={5.3}
            imageProduct={sprit}
          />,
        ]}
      />
      <ListBebidas />
      <ListPizza />
      <FooterHeader />
      <FooterMainHome />
    </Flex>
  );
};
