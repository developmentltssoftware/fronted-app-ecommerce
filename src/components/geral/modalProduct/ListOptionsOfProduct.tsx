import {
  Box,
  Card,
  CardBody,
  CardProps,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { ButtonIncrement } from "../ButtonIncrement";
import {
  TypeOfProduct,
  opcionaisPasteis,
  opcionaisHamburgueres,
  opcionaisPizzas,
  typeButton,
} from "../../types/constants";

interface IListProps extends CardProps {
  heading?: string;
  value?: number;
  types: TypeOfProduct;
  nameProduct: string;
  valueProduct: number;
}
export const ListOptionsOfProduct: React.FC<IListProps> = (
  props: IListProps
) => {
  let typeProduct: { name: string; value: number }[] = [];
  //const [stateButton, setStateButton] = useState<number>(0);

  switch (props.types) {
    case TypeOfProduct.PASTEIS:
      typeProduct = opcionaisPasteis;
      break;
    case TypeOfProduct.HAMBURGUER:
      typeProduct = opcionaisHamburgueres;
      break;
    case TypeOfProduct.PIZZAS:
      typeProduct = opcionaisPizzas;
      break;
    default:
      break;
  }
  return (
    <Flex
      flexDirection={"column"}
      border={"1px solid #f4f5f6"}
      borderRadius={15}
    >
      {typeProduct.map((name, index) => (
        <Card
          key={index}
          _hover={{ cursor: "pointer", backgroundColor: "#f4f5f7" }}
          _focus={{ backgroundColor: "#f4f5f7" }}
          _active={{
            backgroundColor: "#f4f5f7",
          }}
          pos={"sticky"}
          top={"135px"}
        >
          <CardBody>
            <Stack
              divider={<StackDivider />}
              flexDirection={"row"}
              align={"center"}
              h={"30px"}
            >
              <Box w={"100%"}>
                <Heading
                  fontSize={12}
                  fontWeight={"400"}
                  textTransform="uppercase"
                >
                  ADICIONAL {name.name.toUpperCase()}
                </Heading>
                <Flex align={"center"} justify={"space-between"}>
                  <Text fontSize="sm">+R$ {name.value}</Text>
                  <ButtonIncrement
                    types={typeButton.secondary}
                    value={0}
                    limit={0}
                  />
                </Flex>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};
