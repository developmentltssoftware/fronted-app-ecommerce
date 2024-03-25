import { Flex, Text } from "@chakra-ui/react";
import { typePizza } from "../types/image.type";
import { CardMain } from "../geral/cardMain/CardMain";
// a API deve retornar uma lista de bebidas contendo para cada uma
// nome, preço, descrição e imagem
export const ListPastel: React.FC = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={2}
        pos={"relative"}
        top={40}
        left={-40}
      >
        {/* os tipos devem vir da API*/}
        <Text fontWeight={600} fontSize={"24px"}>
          Pastéis
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
            sm: "1fr",
            base: "1fr",
          }}
        >
          {typePizza.map((name, index) => (
            <>
              <CardMain
                key={index}
                text={name.value}
                textHeading={name.label}
                cust={name.price}
                src={name.value}
              />
            </>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
