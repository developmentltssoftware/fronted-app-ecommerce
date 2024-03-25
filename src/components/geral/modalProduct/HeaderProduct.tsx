import { Box, Card, CardBody, Heading, Stack,Text } from "@chakra-ui/react"


export const HeaderProduct = () => {
    return (
      <Card bgColor={"#f4f5f7"}>
        <CardBody>
          <Stack flexDirection={"row"} align={"center"} h={"30px"}>
            <Box w={"100%"}>
              <Heading
                fontSize={12}
                fontWeight={600}
                textTransform="uppercase"
                textAlign={"center"}
              >
                <Text> Destalhes do Produto</Text>
              </Heading>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    );
}