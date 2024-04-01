import {
  Button,
  Text,
  Flex,
  FormControl,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IFormInputs {
  phone?: string;
  fullname?: string;
}

export const Confirme: React.FC<IFormInputs> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }; 
  return (
    <FormControl w={"400px"} h={"500px"}>
      <Flex
        w={"300px"}
        h={"200px"}
        border={"1px solid #f4f5f7"}
        borderRadius={20}
        p={4}
        justifyContent={"space-evenly"}
        flexDirection={"column"}
        ml={"auto"}
        mr={"auto"}
        align={"center"}
        bgColor={"#fff"}
      >
        <Text textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize={"14px"}>
            Identifique-se
          </Text>
          <Text fontSize={"12px"}>
            Entre na sua conta para ter acesso aos seus pedidos
          </Text>
        </Text>
        <Flex flexDirection={"column"} w={"full"}>
          <Flex w={"100%"} align={"center"} justify={"center"}>
            <Button
              type="submit"
              bgColor={"#000"}
              color={"#fff"}
              onClick={handleClick}
              w={"200px"}
            >
              Entrar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </FormControl>
  );
};
