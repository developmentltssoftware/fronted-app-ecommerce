import {
  Button,
  Flex,
  FlexProps,
  Icon,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsBagX } from "react-icons/bs";
import { FaRegHandPointRight } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { MdKeyboardArrowRight, MdNotListedLocation } from "react-icons/md";

interface IBagProps extends FlexProps {
  labelButtonOpenModal?: string;
  titleModal?: string;
}
export const BagFlex: React.FC<IBagProps> = ({ children }: IBagProps) => {
  const bagEmpty = true;
  return (
    <>
      <Flex pos={"relative"} top={-20} right={-10}>
        <Flex flexDirection={"column"}>
          {/* <ModalOverlay /> */}
          <Flex w={"350px"} minH={"400px"} maxH={"100vh"} bgColor={"#f4f5f2"}>
            <Flex p={0}>
              <Flex w={"100%"} h={"50px"}>
                <Button
                  leftIcon={<MdNotListedLocation />}
                  rightIcon={<MdKeyboardArrowRight />}
                  border={"none"}
                  borderBottom={"1px dashed #f4f5f7"}
                  borderBottomRadius={"none"}
                  w={"100%"}
                  h={"100%"}
                  justifyContent={"space-between"}
                  backgroundColor={"white"}
                  _hover={{ backgroundColor: "#f4f5f7" }}
                >
                  <Flex flexDirection={"column"} fontSize={"12px"}>
                    <Text>Calcular taxa e tempo de entrega</Text>
                  </Flex>
                </Button>
              </Flex>
              <Flex align={"center"} justifyContent={"space-evenly"}>
                <Text fontSize={"14px"} pl={4}>
                  Sua Sacola
                </Text>
                <Button
                  fontSize={"14px"}
                  bg={"transparent"}
                  border={"none"}
                  _hover={{ background: "transparent", cursor: "pointer" }}
                >
                  Limpar
                </Button>
              </Flex>
            </Flex>
            <Flex>
              <Flex
                align={"center"}
                overflowY="auto"
                maxH="350px"
                flexDirection={"column"}
              >
                {!bagEmpty ? (
                  <Stack w={"full"} align={"center"} justify={"center"} gap={1}>
                    {children}
                  </Stack>
                ) : (
                  <>
                    <Icon as={BsBagX} w={100} h={100} />
                    <Text>Sacola Vazia</Text>
                  </>
                )}
              </Flex>
            </Flex>
            <Flex p={0}>
              <Flex
                flexDirection={"column"}
                align={"center"}
                justify={"center"}
                w={"100%"}
                //border={"1px solid black"}
              >
                <Flex
                  w={"100%"}
                  h={"70px"}
                  display={bagEmpty ? "none" : "flex"}
                  bgColor={"white"}
                >
                  <Flex
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    fontSize={"12px"}
                    w={"full"}
                    p={2}
                  >
                    <Flex
                      gap={1}
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                    >
                      <Text>Subtotal</Text>
                      <Text>R$ 142</Text>
                    </Flex>
                    <Flex
                      gap={1}
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                    >
                      <Text>Taxa de entrega</Text>
                      <Text>a definir</Text>
                    </Flex>
                    <Flex
                      gap={1}
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                    >
                      <Text fontWeight={"bold"}>Total</Text>
                      <Text fontWeight={"bold"}>R$</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex w={"100%"} h={"50px"}>
                  <Button
                    leftIcon={<HiOutlineTicket />}
                    rightIcon={<MdKeyboardArrowRight />}
                    border={"none"}
                    borderTop={"1px dashed #f4f5f7"}
                    w={"100%"}
                    h={"100%"}
                    justifyContent={"space-between"}
                    bgColor={"white"}
                    borderRadius={"none"}
                    _hover={{ backgroundColor: "#f4f5f7", cursor: "pointer" }}
                  >
                    <Flex flexDirection={"column"} fontSize={"12px"}>
                      <Text fontWeight={"bold"}>Tem um cupom ?</Text>
                      <Text>
                        Insira-o aqui <Icon as={FaRegHandPointRight} />
                      </Text>
                    </Flex>
                  </Button>
                </Flex>
                <Flex w={"100%"}>
                  <Button
                    bgColor={"#000"}
                    color={"#fff"}
                    w={"full"}
                    m={1}
                    _hover={{ backgroundColor: "#00f" }}
                  >
                    Fechar Pedido
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
