import { Flex, Text } from "@chakra-ui/react";
import { typeBebidas } from "../types/image.type";
import { CardMain } from "../geral/cardMain/CardMain";
// a API deve retornar uma lista de bebidas contendo para cada uma
// nome, preço, descrição e imagem
export const ListBebidas: React.FC = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={2}
        pos={"relative"}
        top={{ xl: 80, lg: 60, md: 60, sm: 20, base: 20 }}
        mt={{ xl: 80, lg: 80, md: 80, sm: "none", base: "none" }}
        left={{
          xl: "-100px",
          lg: "-15px",
          md: "-10px",
          sm: "0px",
          base: "0px",
        }}
        p={4}
      >
        {/* os tipos devem vir da API*/}
        <Text fontWeight={600} fontSize={"24px"}>
          Bebidas
        </Text>
        <Flex
          flexDirection={"row"}
          align={"center"}
          justify={"center"}
          gap={1}
          display={"grid"}
          gridTemplateColumns={{
            xl: "1fr 1fr",
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr 1fr",
            xs: "1fr",
            base: "1fr",
          }}
        >
          {typeBebidas.map((name, index) => (
            <CardMain
              key={index}
              text={name.label}
              textHeading={name.label}
              cust={12.0}
              src={name.value}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};
