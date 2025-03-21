import { Flex, useDisclosure } from "@chakra-ui/react";
import { Confirme } from "../../components/auth/Confirme";
import { ModalDoProduto } from "../../components/geral/modalProduct/ModalDoProduto";
import { FooterParaTelasPequenas } from "../../components/geral/header/headerSuspense/FooterParaTelasPequenas";
import { HeaderPretoComListaDeBotoes } from "../../components/geral/header/headerButtonBlack/HeaderPretoComListaDeBotoes";

export const Pedidos: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      flexDirection={"column"}
      w={"100vw"}
      minH={"100vh"}
      h={"content"}
      bgColor={"#f4f5f7"}
      align={"center"}
      justifyContent={"space-between"}
      //border={"1px solid red"}
    >
      <HeaderPretoComListaDeBotoes />
      <Confirme />
      <ModalDoProduto
        isOpen={isOpen}
        onClose={onClose}
        descriptionProduct={""}
        children={undefined}
        valueProduct={12.5}
        nameProduct={"Pizza"}
      />
      <FooterParaTelasPequenas />
    </Flex>
  );
};
