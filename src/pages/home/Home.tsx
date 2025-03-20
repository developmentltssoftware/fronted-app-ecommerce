import { Flex } from "@chakra-ui/react";
import { HeaderNew } from "../../components/geral/header/headerNew/HeaderNew";

export const Home: React.FC = () => {
  return (
    <Flex h={"100vh"} w={"100vw"} bgColor={"#f55"}>
      <HeaderNew />
    </Flex>
  );
};
