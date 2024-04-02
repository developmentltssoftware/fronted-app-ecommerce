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
        pos={"static"}
        mt={{ xl: -350, lg: -350, md: -180, sm: -350, base: -350 }}
        marginRight={{ xl: "auto", lg: "auto", md: "auto" }}
        marginLeft={{ xl: "auto", lg: "auto", md: "auto" }}
        p={1}
        //border={'1px solid red'}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "1200px" }}
      >
        {/* os tipos devem vir da API*/}
        <Text fontWeight={600} fontSize={"24px"}>
          Bebidas
        </Text>
        <Flex
          flexDirection={"row"}
          align={"center"}
          //justify={"left"}
          gap={2}
          display={"grid"}
          gridTemplateColumns={{
            xl: "1fr 1fr",
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr 1fr",
            xs: "1fr",
            base: "1fr",
          }}
          //border={'1px solid green'}
          w={{ xl: "fit-content", lg: "fit-content" }}
        >
          {typeBebidas.map((name, index) => (
            <CardMain
              key={index}
              descriptionProduct={name.label}
              nameProduct={name.label}
              valueProduct={name.price}
              src={name.value}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};
