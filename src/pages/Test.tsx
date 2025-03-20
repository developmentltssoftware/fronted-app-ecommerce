import { Flex, Grid } from "@chakra-ui/react";
import { CardSmallOrderProduct } from "../components/geral/CardSmallOrderProduct";
import coca from "../assets/img/coca.jpg";
import fanta_laranja from "../assets/img/FANTA_LARANJA_250ML.jpg";
import sprit from "../assets/img/SPRITE_LATA.jpg";
import { FooterMainHome } from "../components/geral/footer/FooterMainHome";
import { ListBebidas } from "../components/listBebidas/ListBebidas";
import { ListPizza } from "../components/listPizza/ListPizza";
import { FooterHeader } from "../components/geral/header/headerSuspense/FooterHeader";
import { HeaderBlack } from "../components/geral/header/headerNew/HeaderBlack";
import { FlexBag } from "../components/geral/comanda/FlexBag";
import { useState, useEffect } from "react";
import { HeaderSuspense } from "../components/geral/header/headerSuspense/HeaderSuspense";
import { FlexSelect } from "../components/geral/header/FlexSelect";
import { ListPastel } from "../components/listPastel/ListPastel";
import { ListHumburger } from "../components/listHumburger/ListHumburger";
import { GridHome } from "../components/gridPattern/GridHome";
export const Test: React.FC = () => {
  const [showHeaderSuspense, setShowHeaderSuspense] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollPositionX = window.innerWidth;
      //console.log(scrollPositionX);
      if (scrollPosition > 580 && scrollPositionX > 981) {
        // Exiba o cabeçalho após rolar 100 pixels
        setShowHeaderSuspense(true);
      } else if (
        scrollPosition > 440 &&
        scrollPositionX > 760 &&
        scrollPositionX < 931
      ) {
        console.log(scrollPositionX);
        // Exiba o cabeçalho após rolar 220 pixels e scrollPositionX está entre 760 e 931
        setShowHeaderSuspense(true);
      } else if (scrollPosition > 220 && scrollPositionX <= 760) {
        // Exiba o cabeçalho após rolar 100 pixels
        setShowHeaderSuspense(true);
      } else {
        setShowHeaderSuspense(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpe o evento de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      flexDirection={"column"}
      w={"100vw"}
      minH={"auto"}
      h={"content"}
      alignContent={"center"}
      align={"center"}
      justifyContent={"space-between"}
      bgColor={"#f4f5f7"}
      border={"1px solid red"}
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
      <Flex
        h={"500px"}
        //border={'1px solid red'}
      ></Flex>
      <Flex
        //border={'1px solid red'}
        w={"100%"}
        pl={1}
        pr={1}
      >
        <FlexSelect />
      </Flex>
      {showHeaderSuspense && (
        <HeaderSuspense opacity={showHeaderSuspense ? "1" : "0"} />
      )}
      <Flex
        border={"1px solid red"}
        pos={"sticky"}
        top={"85px"}
        left={"1000px"}
        display={{
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
          base: "none",
        }}
        mr={"200px"}
      >
        <FlexBag
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
          bagEmpty={false}
        />
      </Flex>
      <GridHome />
      <ListBebidas />
      <ListPastel />
      <ListHumburger />
      <ListPizza />
      <FooterHeader />
      <FooterMainHome />
    </Flex>
  );
};
