import { Flex, Text } from "@chakra-ui/react";
import { typePizza } from "../types/image.type";
import { CardMain } from "../geral/cardMain/CardMain";
// a API deve retornar uma lista de bebidas contendo para cada uma
// nome, preço, descrição e imagem
export const ListPizza: React.FC = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={2}
        pos={"relative"}
        top={{ xl: 0, lg: 0, md: 0, sm: 0, base: 0 }}
        mt={{ xl: 80, lg: 80, md: 80, sm: 12, base: 12 }}
        p={4}
        mb={20}
        left={{
          xl: "-100px",
          lg: "-15px",
          md: "-10px",
          sm: "0px",
          base: "0px",
        }}
        //left={{ xl: -40, lg: -40 }}
      >
        {/* os tipos devem vir da API*/}
        <Text fontWeight={600} fontSize={"24px"}>
          Pizzas
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
          {typePizza.map((name, index) => (
            <>
              <CardMain
                key={index}
                text={name.label}
                textHeading={name.label}
                cust={name.price}
                src={name.value}
              />
              {/*  {index % 2 === 0 ? <br /> : ""} */}
            </>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
