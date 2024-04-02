import {
  Card,
  CardBody,
  Heading,
  Text,
  CardProps,
  Image,
  Flex,
} from "@chakra-ui/react";

import pizza from "../../../assets/img/pizza.jpg";
import cocaLata from "../../../assets/img/coca-cola-lata.png";
import coca2l from "../../../assets/img/coca-cola-2l.jpg";
import kuat2l from "../../../assets/img/kuat-2l.jpg";
import sprit2l from "../../../assets/img/sprit-2l.jpg";
import fantaLaranjaLata from "../../../assets/img/fanta_laranja_lata.jpg";
import fantaUvaLata from "../../../assets/img/fanta-uva-lata.png";
import guaranaLata from "../../../assets/img/guarana_lata.jpg";
import guaranaLitro from "../../../assets/img/guarana_1l.jpeg";
import cajuina2Litro from "../../../assets/img/CAJUINA_2LT.jpg";
import fantauva2Litro from "../../../assets/img/fanta-uva-2l.png";
import fantalaranjaLitro from "../../../assets/img/fanta-laranja-2l.webp";
import aguaGas from "../../../assets/img/Agua_comgas.jpeg";
import aguaSemGas from "../../../assets/img/agua_sem_gas.jpeg";
import spritLata from "../../../assets/img/SPRITE_LATA.jpg";
import pastel from "../../../assets/img/pastel.jpg";
import humburger from "../../../assets/img/humburguer.jpg";
interface ICardProps extends CardProps {
  descriptionProduct: string;
  nameProduct: string;
  src?: string;
  valueProduct: number;
}
export const CardMain: React.FC<ICardProps> = (props: ICardProps) => {
  return (
    <Card
      direction={{ base: "row", sm: "row" }}
      overflow="hidden"
      variant="outline"
      fontFamily={"Roboto"}
      justifyContent={"space-between"}
      align={"center"}
      p={1}
      _hover={{
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      maxW={{ xl: "430px", lg: "430px", md: "350px" }}
      //minW={"350px"}
      //border={'1px solid red'}
    >
      <CardBody w={{ base: "400px" }}>
        <Heading size="xs">{props.nameProduct}</Heading>
        <Text py="2" fontSize={{ base: "xs", sm: "sm", md: "md" }}>
          {props.descriptionProduct}
        </Text>
        <Flex gap={1} fontWeight={600} fontSize={"xs"} color={"#000"}>
          <Text>R$</Text>
          <Text>{props.valueProduct}</Text>
        </Flex>
      </CardBody>
      <Flex align={"center"} h={"100px"}>
        <Image
          objectFit="cover"
          maxW={{ base: "100px", sm: "80px", md: 100 }}
          maxH={{ base: "100px", sm: 60, md: 100 }}
          src={
            props.nameProduct?.includes("Pizza")
              ? `${pizza}`
              : props.nameProduct?.includes("Pastel")
              ? `${pastel}`
              : props.nameProduct?.includes("Hambúrguer")
              ? `${humburger}`
              : props.nameProduct?.includes("Coca Cola lata")
              ? `${cocaLata}`
              : props.nameProduct?.includes("Fanta uva lata")
              ? `${fantaUvaLata}`
              : props.nameProduct?.includes("Fanta laranja lata")
              ? `${fantaLaranjaLata}`
              : props.nameProduct?.includes("Guaraná lata")
              ? `${guaranaLata}`
              : props.nameProduct?.includes("Sprit lata")
              ? `${spritLata}`
              : props.nameProduct?.includes("Agua sem Gás")
              ? `${aguaSemGas}`
              : props.nameProduct?.includes("Agua com Gás")
              ? `${aguaGas}`
              : props.nameProduct?.includes("Cajuina 2L")
              ? `${cajuina2Litro}`
              : props.nameProduct?.includes("Fanta Laranja 2")
              ? `${fantalaranjaLitro}`
              : props.nameProduct?.includes("Fanta Uva 2l")
              ? `${fantauva2Litro}`
              : props.nameProduct?.includes("Guaraná 2L")
              ? `${guaranaLitro}`
              : props.nameProduct?.includes("Coca Cola 2l")
              ? `${coca2l}`
              : props.nameProduct?.includes("Kuat 2l")
              ? `${kuat2l}`
              : props.nameProduct?.includes("Sprit 2l")
              ? `${sprit2l}`
              : ""
          }
          alt="image-product"
          borderRadius={7}
          h={"100px"}
        />
      </Flex>
    </Card>
  );
};
