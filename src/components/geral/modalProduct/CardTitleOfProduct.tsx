import {
  Card,
  CardBody,
  Stack,
  Heading,
  Box,
  CardProps,
  Text,
} from "@chakra-ui/react";
import { HeaderProduct } from "./HeaderProduct";
import { CardOfList } from "../CardOfList";
interface ICardListProps extends CardProps {
  title: string;
  valueProduct: number;
  children: React.ReactNode;
  nameProduct: string;
}

export const CardTitleOfProduct: React.FC<ICardListProps> = ({
  title,
  valueProduct,
  children,
}: ICardListProps) => {
  return (
    <>
      <Card>
        <HeaderProduct />
        <CardBody
          pos={"sticky"}
          top={"0px"}
          backgroundColor={"#ffffff"}
          border={"1px solid #f4f5f6"}
        >
          <Stack h={"30px"}>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {title}
              </Heading>
              <Text fontSize="sm">{title}</Text>
            </Box>
          </Stack>
        </CardBody>
        <CardBody border={"1px solid #f4f5f6"}>
          <Stack h={"30px"}>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Valor:
              </Heading>
              <Text fontSize="sm">R$ {valueProduct}</Text>
            </Box>
          </Stack>
        </CardBody>
        <CardOfList title={title} pos={"sticky"} top={"70px"} />
        {children}
      </Card>
    </>
  );
};
