import {
  Card,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Flex,
  Box,
  CardProps,
  Text,
} from "@chakra-ui/react";
interface ICardListProps extends CardProps {
  title: string;
}

export const CardOfList: React.FC<ICardListProps> = (props: ICardListProps) => {
  return (
    <Card bgColor={"#f4f5f7"} pos={props.pos} top={props.top}>
      <CardBody>
        <Stack
          divider={<StackDivider />}
          flexDirection={"row"}
          align={"center"}
          h={'30px'}
        >
          <Box w={"100%"}>
            <Heading fontSize={12} fontWeight={"400"} textTransform="uppercase">
              <Text> ADICIONAIS P/</Text>
              {props.title}
            </Heading>
            <Flex align={"center"} justify={"space-between"}>
              <Text fontSize="10px">
                Escolha até 5 opções
              </Text>
            </Flex>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
