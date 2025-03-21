import { Flex, useBreakpointValue, Center } from "@chakra-ui/react";
import { ButtonHeader } from "../ButtonHeader";
import { names } from "../../../types/constants";

export const HeaderPretoComListaDeBotoes: React.FC = () => {
  // Use the breakpoint value to check the current screen size
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Flex
      flexDirection={"column"}
      gap={2}
      justifyContent={"space-between"}
      align={"center"}
      h={20}
      width={"100vw"}
      p={2}
      m={0}
      bg={"#000000"}
    >
      <Flex align={"center"} justify={"center"} gap={14}>
        {/* Conditionally render the ButtonHeader for larger screens */}
        {!isMobile &&
          names.map((name, index) => (
            <Flex key={index} align={"center"} justify={"center"}>
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
        {/* Display this text on small screens */}
        {isMobile && (
          <Center justifyContent={"center"} color={"#fff"}>
            LTS - SOFTWARE
          </Center>
        )}
      </Flex>
    </Flex>
  );
};
