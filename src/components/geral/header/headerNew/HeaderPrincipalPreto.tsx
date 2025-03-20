import { Flex } from "@chakra-ui/react";
import React from "react";
import { ButtonHeader } from "../ButtonHeader";
import pizzaria from "../../../../assets/img/pizza-nice.jpg";
import { HeaderNew } from "./HeaderNew";
import { FlexLogoSmall } from "./FlexLogoSmall";
import { names } from "../../../types/constants";
import { ImagemDoHeaderPrincipal } from "./ImagemDoHeaderPrincipal";

export const HeaderPrincipalPreto: React.FC = () => {
  return (
    <Flex
      // father of everybody element
      flexDirection={"column"}
      gap={2}
      justifyContent={"space-between"}
      align={"center"}
      h={40}
      width={"100vw"}
      p={2}
      m={0}
      bg={"#000000"}
      pos={"relative"}
      backgroundImage={{
        base: `url(${pizzaria})`,
        sm: `url(${pizzaria})`,
        md: `url(${undefined})`,
        lg: `url(${undefined}`,
      }}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Flex align={"center"} gap={14} justify={"center"}>
        {/* flex of header */}
        {names.map((name, index) => (
          <Flex
            key={index}
            align={"center"}
            justify={"center"}
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          >
            <ButtonHeader
              leftIcon={name.icon}
              nameButton={name.nameButton}
              color={name.color}
              backgroundColor={"#000000"}
              variant={name.variant}
              border={"none"}
              _hover={{
                border: "1px solid #ffffff",
                backgroundColor: "transparent",
              }}
              route={name.route}
              flexDirection={"row"}
              fontSize={16}
              fontWeight={600}
            />
          </Flex>
        ))}
      </Flex>
      <ImagemDoHeaderPrincipal />
      <HeaderNew />
      <FlexLogoSmall />
    </Flex>
  );
};
