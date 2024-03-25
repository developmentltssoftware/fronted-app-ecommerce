import { Flex, FlexProps, Text, Image, Icon } from "@chakra-ui/react";
import React from "react";
import metanoia_logo from "../../../../assets/img/metanoia.jpg";
import { GoDotFill } from "react-icons/go";
import { BsGeoAltFill } from "react-icons/bs";
interface IFlexLogo extends FlexProps {}

export const FlexLogoSmall: React.FC<IFlexLogo> = () => {
  return (
    <>
      <Flex
        borderTopRadius={20}
        position={"relative"}
        top={20}
        flexDirection={"column"}
        bgColor={"#fff"}
        align={"center"}
        justify={"center"}
        h={"120px"}
        w={"100vw"}
        //border={"1px solid green"}
        display={{
          xl: "none",
          lg: "none",
          md: "none",
          sm: "flex",
          base: "flex",
        }}
      >
        <Image
          src={`${metanoia_logo}`}
          borderRadius={50}
          p={0}
          boxSize={"70px"}
          border={"1px solid black"}
          pos={"absolute"}
          bottom={79}
        />
        <Text fontSize={30} fontWeight={800} w={"fit-content"} color={'green'}>
          Metanóia Pizzaria
        </Text>
        <Flex>
          <Text fontSize={12} fontWeight={500}>
            Horário de funcionamento
            <Icon as={GoDotFill} /> <Icon as={BsGeoAltFill} /> Fortaleza - CE{" "}
            <Icon as={GoDotFill} />
          </Text>
          <Text fontSize={12} fontWeight={500}>
            Mais Informações
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
