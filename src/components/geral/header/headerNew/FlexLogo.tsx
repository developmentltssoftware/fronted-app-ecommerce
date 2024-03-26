import { Flex, FlexProps, Text, Image, Icon } from "@chakra-ui/react";
import React from "react";
import metanoia_logo from "../../../../assets/img/metanoia.jpg";
import { GoDotFill } from "react-icons/go";
import { BsGeoAltFill } from "react-icons/bs";
interface IFlexLogo extends FlexProps {}
export const FlexLogo: React.FC<IFlexLogo> = () => {
  return (
    <>
      <Flex
        align={"center"}
        justifyContent={"space-between"}
        pos={"relative"}
        w={650}
        h={"25vh"}
        flexDirection={"column"}
        //border={"1px solid green"}
        bgColor={"#fff"}
        bg={"transparent"}
        display={{
          xl: "flex",
          lg: "flex",
          md: "flex",
          sm: "none",
          base: "none",
        }}
        marginRight={{ xl: "auto", lg: "auto", md: "auto" }}
        marginLeft={{ xl: "auto", lg: "auto", md: "auto" }}
      >
        <Flex
          pos={"absolute"}
          left={{
            xl: "-40px",
            lg: "-40px",
            md: "-40px",
            sm: "-10px",
            base: "-10px",
          }}
          top={"10px"}
          //align={"center"}
        >
          <Image
            src={`${metanoia_logo}`}
            borderRadius={20}
            bgColor={"#fff"}
            p={2}
            boxSize={"140px"}
            border={"1px solid black"}
          />
        </Flex>
        <Flex
          flexDirection={"column"}
          pos={"absolute"}
          left={{
            xl: "110px",
            lg: "110px",
            md: "110px",
            sm: "110px",
            base: "110px",
          }}
          
          bottom={{
            xl: "20px",
            lg: "20px",
            md: "20px",
            sm: "20px",
            base: "20px",
          }}
          gap={2}
          //border={"1px solid black"}
        >
          <Text
            fontSize={"40px"}
            fontWeight={800}
            w={"fit-content"}
            color={"green"}
          >
            Pizzaria Metanóia
          </Text>
          <Flex>
            <Text fontSize={"14px"} fontWeight={500}>
              Horário de funcionamento
              <Icon as={GoDotFill} /> <Icon as={BsGeoAltFill} /> Fortaleza - CE{" "}
              <Icon as={GoDotFill} />
            </Text>
            <Text fontSize={"14px"} fontWeight={500}>
              Mais Informações
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
