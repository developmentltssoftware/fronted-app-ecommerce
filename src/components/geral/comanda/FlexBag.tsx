import { Flex, Button, Text, Icon, FlexProps } from "@chakra-ui/react";
import { MdNotListedLocation, MdKeyboardArrowRight } from "react-icons/md";
import { BsBagX } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi";
import { FaRegHandPointRight } from "react-icons/fa";
import { ReactNode } from "react";
interface IFlexBag extends FlexProps {
  children: ReactNode;
  bagEmpty: boolean;
}
export const FlexBag: React.FC<IFlexBag> = ({
  children,
  bagEmpty,
}: IFlexBag) => {
  return (

      <Flex
        pos={"relative"}
        flexDirection="column"
        w="350px"
        minH="fit-content"
        maxH="100vh"
        bgColor="#f4f5f2"
        borderRadius="md"
        boxShadow="md"
        
      >
        <Flex w="100%" h="50px">
          <Button
            leftIcon={<MdNotListedLocation />}
            rightIcon={<MdKeyboardArrowRight />}
            border="none"
            borderBottom="1px dashed #f4f5f7"
            borderBottomRadius="none"
            w="100%"
            h="100%"
            justifyContent="space-between"
            backgroundColor="white"
            _hover={{ backgroundColor: "#f4f5f7" }}
          >
            <Flex flexDirection="column" fontSize="12px">
              <Text>Calcular taxa e tempo de entrega</Text>
            </Flex>
          </Button>
        </Flex>
        <Flex align="center" justifyContent="space-between" px={4} py={2}>
          <Text fontSize="14px">Sua Sacola</Text>
          <Button
            fontSize="14px"
            bg="transparent"
            border="none"
            _hover={{ background: "transparent", cursor: "pointer" }}
          >
            Limpar
          </Button>
        </Flex>
        <Flex
          align="center"
          overflowY="auto"
          maxH="200px"
          flexDirection="column"
        >
          {!bagEmpty ? (
            <Flex
              w="full"
              align="center"
              justify="center"
              gap={1}
              flexDirection={"column"}
            >
              {children}
            </Flex>
          ) : (
            <>
              <Icon as={BsBagX} w={100} h={100} />
              <Text>Sacola Vazia</Text>
            </>
          )}
        </Flex>
        <Flex flexDirection="column" align="center" p={4}>
          <Flex
            w="100%"
            h="70px"
            display={bagEmpty ? "none" : "flex"}
            bgColor="white"
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              fontSize="12px"
              w="full"
              p={2}
            >
              <Flex gap={1} flexDirection="row" justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text>R$ 142</Text>
              </Flex>
              <Flex gap={1} flexDirection="row" justifyContent="space-between">
                <Text>Taxa de entrega</Text>
                <Text>a definir</Text>
              </Flex>
              <Flex gap={1} flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold">Total</Text>
                <Text fontWeight="bold">R$</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" h="50px" mt={2}>
            <Button
              leftIcon={<HiOutlineTicket />}
              rightIcon={<MdKeyboardArrowRight />}
              border="none"
              borderTop="1px dashed #f4f5f7"
              w="100%"
              h="100%"
              justifyContent="space-between"
              bgColor="white"
              _hover={{ backgroundColor: "#f4f5f7", cursor: "pointer" }}
            >
              <Flex flexDirection="column" fontSize="12px">
                <Text fontWeight="bold">Tem um cupom ?</Text>
                <Text>
                  Insira-o aqui <Icon as={FaRegHandPointRight} />
                </Text>
              </Flex>
            </Button>
          </Flex>
          <Flex w="100%" mt={2}>
            <Button
              bgColor="#000"
              color="#fff"
              w="full"
              _hover={{ backgroundColor: "#00f" }}
            >
              Fechar Pedido
            </Button>
          </Flex>
        </Flex>
      </Flex>
  );
};
