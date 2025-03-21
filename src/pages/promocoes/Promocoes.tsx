import { Flex } from "@chakra-ui/react";
import { FooterParaTelasPequenas } from "../../components/geral/header/headerSuspense/FooterParaTelasPequenas";
import { HeaderPretoComListaDeBotoes } from "../../components/geral/header/headerButtonBlack/HeaderPretoComListaDeBotoes";

export const Promocoes: React.FC = () => {
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
    >
      <HeaderPretoComListaDeBotoes />
      <FooterParaTelasPequenas />
    </Flex>
  );
};
