import {
  Card,
  CardBody,
  Heading,
  Text,
  CardProps,
  Image,
  Flex,
} from "@chakra-ui/react";
interface ICardProps extends CardProps {
  text: string;
  textHeading: string;
  src?: string;
  cust: number;
}
import bebida from "../../../assets/img/Agua_comgas.jpeg";
import pizza from "../../../assets/img/pizza.jpg";
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
      maxW={{xl:'430px',lg:'430px', md:'350px'}}
      //border={'1px solid red'}
    >
      <CardBody w={{ base: "400px" }}>
        <Heading size="xs">{props.textHeading}</Heading>
        <Text py="2" fontSize={{base:"xs", sm: 'sm', md: 'md'}}>
          {props.text}
        </Text>
        <Flex gap={1} fontWeight={600} fontSize={"xs"} color={"#000"}>
          <Text>R$</Text>
          <Text>{props.cust}</Text>
        </Flex>
      </CardBody>
      <Flex align={"center"} h={"100px"}>
        <Image
          objectFit="cover"
          maxW={{ base: "100px", sm: "80px", md: 100 }}
          maxH={{ base: "100px", sm: 60, md: 100 }}
          src={props.textHeading?.includes("Pizza") ? `${pizza}` : `${bebida}`}
          alt="image-product"
          borderRadius={7}
          h={"100px"}
        />
      </Flex>
    </Card>
  );
};
