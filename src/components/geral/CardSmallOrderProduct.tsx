import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardProps,
  Stack,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
interface ICardSmallProps extends CardProps {
  quantity: number;
  nameProduct: string;
  costProduct: number;
  imageProduct: React.ReactNode;
}
export const CardSmallOrderProduct: React.FC<ICardSmallProps> = ({
  quantity,
  nameProduct,
  costProduct,
  imageProduct,
}: ICardSmallProps) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      size={""}
      w={300}
      h={100}
      fontSize={"12px"}
      borderRadius={7}
      _hover={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <Stack w={"100%"} p={2}>
        <CardBody>
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Flex gap={1}>
              <Text fontWeight={"bold"} flexDirection={"row"}>
                {quantity}x
              </Text>
              <Text>{nameProduct.toLocaleUpperCase()}</Text>
            </Flex>
            <Flex>
              <Text fontWeight={"bold"}>R$ {costProduct}</Text>
            </Flex>
          </Flex>
        </CardBody>

        <CardFooter alignItems={"flex-end"} justifyContent={"space-between"}>
          <Flex gap={1}>
            <Button
              borderBlock={"none"}
              variant="outline"
              color={"#000"}
              border={"none"}
              fontSize={"12px"}
              fontWeight={400}
              >
              Editar
            </Button>
            <Button
              borderBlock={"none"}
              variant="outline"
              color={"#000"}
              border={"none"}
              fontSize={"12px"}
              fontWeight={400}
              boxSize={'content'}
            >
              Remover
            </Button>
          </Flex>
          <Image
            objectFit="cover"
            //maxW={{ base: "100%", sm: "200px" }}
            boxSize={"50px"}
            src={`${imageProduct}`}
            alt="Caffe Latte"
          />
        </CardFooter>
      </Stack>
    </Card>
  );
};
