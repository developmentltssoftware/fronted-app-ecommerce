import { Flex } from "@chakra-ui/react";
import { names } from "../../components/types/constants";
import { ButtonHeader } from "../../components/geral/header/ButtonHeader";
import { Singin } from "../../components/auth/Singin";

export const Login: React.FC = () => {
  return (
    <Flex
      bgColor={"#f4f5f7"}
      flexDirection={"column"}
      h={"100vh"}
      justifyContent={"space-between"}
      align={"center"}
    >
      <Flex
        // father of everybody element
        flexDirection={"column"}
        gap={10}
        justifyContent={"space-between"}
        align={"center"}
        h={20}
        width={"100vw"}
        p={2}
        m={0}
        bg={"#000000"}
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
      <Singin phone={""} fullname={""} />
    </Flex>
  );
};
