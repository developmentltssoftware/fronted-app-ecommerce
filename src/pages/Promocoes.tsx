import { Flex } from "@chakra-ui/react";
import { HeaderButtonBlack } from "../components/geral/header/headerButtonBlack/HeaderButtonBlack";

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
        <HeaderButtonBlack />
      </Flex>
    );
};