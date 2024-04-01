import { Flex, useDisclosure } from "@chakra-ui/react";
import { HeaderButtonBlack } from "../components/geral/header/headerButtonBlack/HeaderButtonBlack";
import { Confirme } from "../components/auth/Confirme";
import { ModalProduct } from "../components/geral/modalProduct/ModalProduct";

export const Pedidos: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
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
      <HeaderButtonBlack />
      <Confirme />
      <ModalProduct isOpen={isOpen} onOpen={onOpen} onClose={onClose} 
      descriptionProduct={""} 
      children={undefined} 
      valueProduct={12.5} nameProduct={"Pizza"} />
    </Flex>
  );
};
