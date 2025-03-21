import { Flex, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardSmallOrderProduct } from "../../components/geral/CardSmallOrderProduct";
import { FlexBag } from "../../components/geral/comanda/FlexBag";
import { FlexSelect } from "../../components/geral/header/FlexSelect";
import {
  typeBebidas,
  typePastel,
  typeHamburguer,
  typePizza,
} from "../../components/types/image.type";
import coca from "../../assets/img/coca.jpg";
import fanta_laranja from "../../assets/img/FANTA_LARANJA_250ML.jpg";
import sprit from "../../assets/img/SPRITE_LATA.jpg";
import { ListaPrincipalDeProdutos } from "./components/ListaPrincipalDeProdutos";
import { FooterComBackGroundPreto } from "../../components/geral/footer/FooterComBackGroundPreto";
import { FooterParaTelasPequenas } from "../../components/geral/header/headerSuspense/FooterParaTelasPequenas";
import { HeaderSuspenso } from "../../components/geral/header/headerSuspense/HeaderSuspenso";
import { HeaderPrincipalPreto } from "../../components/geral/header/headerNew/HeaderPrincipalPreto";
import { ModalDoProduto } from "../../components/geral/modalProduct/ModalDoProduto";

export const Home: React.FC = () => {
  const [dataDrinks, setDataDrinks] = useState();
  const [dataHumburguer, setDataHumbuguer] = useState();
  const [dataPizza, setDataPizza] = useState();
  const [dataPasteis, setDataPasteis] = useState();
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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      //border={"1px solid red"}
    >
      {/* <Cupom
        title={""}
        nameButton={"Cupom"}
        input={undefined}
        isOpen={isOpen}
        onClose={onClose}
        children={undefined}
      /> */}

      <HeaderPrincipalPreto />
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
        <HeaderSuspenso opacity={showHeaderSuspense ? "1" : "0"} />
      )}
      <Flex
        w={"100%"}
        //border={"1px solid red"}
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
        justify={"flex-end"}
        pr={"200px"}
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
      <ListaPrincipalDeProdutos
        tituloDaListaDeProdutos={"Bebidas"}
        listaDeProdutos={typeBebidas}
      />
      <ListaPrincipalDeProdutos
        tituloDaListaDeProdutos={"Pastéis"}
        listaDeProdutos={typePastel}
      />
      <ListaPrincipalDeProdutos
        tituloDaListaDeProdutos={"Humbúrgueres"}
        listaDeProdutos={typeHamburguer}
      />
      <ListaPrincipalDeProdutos
        tituloDaListaDeProdutos={"Pizzas"}
        listaDeProdutos={typePizza}
      />
      <Flex w={"100%"} mt={10} flexDir={"column"}>
        <FooterParaTelasPequenas />
      </Flex>
      <Flex w={"100%"} mt={10} flexDir={"column"}>
        <FooterComBackGroundPreto />
      </Flex>
      <ModalDoProduto
        isOpen={false}
        onClose={onClose}
        descriptionProduct={""}
        children={undefined}
        valueProduct={0}
        nameProduct={"Pizza"}
      />
    </Flex>
  );
};
