import { Flex } from "@chakra-ui/react";
import { ButtonHeader } from "../ButtonHeader";
import { names } from "../../../types/constants";

export const HeaderButtonBlack: React.FC = () => {
    return (
      <Flex
        // father of everybody element
        flexDirection={"column"}
        gap={2}
        justifyContent={"space-between"}
        align={"center"}
        h={20}
        width={"100vw"}
        p={2}
        m={0}
        bg={"#000000"}
        //border={"5px solid white"}
      >
        <Flex align={"center"} justify={"center"} gap={14}>
          {/* flex of header */}
          {names.map((name, index) => (
            <Flex
              key={index}
              align={"center"}
              justify={"center"}
              display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
              //border={"5px solid white"}
            >
              <ButtonHeader
                leftIcon={name.icon}
                nameButton={name.nameButton}
                color={"#fff"}
                backgroundColor={"#000000"}
                variant={name.variant}
                border={"none"}
                _hover={{
                  border: "1px solid #ffffff",
                  color: "#fff",
                  backgroundColor: "transparent",
                }}
                flexDirection={"row"}
                fontSize={16}
                fontWeight={600}
                route={name.route}
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
};