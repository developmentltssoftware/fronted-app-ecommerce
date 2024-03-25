import { Flex } from "@chakra-ui/react";
import { Singin } from "../components/auth/Singin";

export const Login: React.FC = () => {

  return (
    <Flex
      align={"center"}
      justify={"center"}
      w={"100vw"}
      h={"100vh"}
      bgColor={"#f4f5f7"}
    >
      <Singin phone={""} fullname={""} />
    </Flex>
  );
};
