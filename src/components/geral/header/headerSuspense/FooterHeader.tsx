import { ButtonProps, Flex } from "@chakra-ui/react";
import { ButtonHeader } from "../ButtonHeader";
import { namesFooter } from "../../../types/constants";

interface IButtons extends ButtonProps {
  flagNameButton?: boolean;
}

export const FooterHeader: React.FC<IButtons> = () => {
  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        gap={4}
        justifyContent={"space-evenly"}
        w={"100%"}
        bgColor={"#fff"}
        pos={"fixed"}
        bottom={0}
      >
        {namesFooter.map((name, index) => (
          <Flex
            key={index}
            align={"center"}
            justify={"center"}
            //display={props.display}
            display={{
              base: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
            <ButtonHeader
              leftIcon={name.icon}
              color={name.color}
              variant={name.variant}
              _hover={{ borderColor: "#000" }}
            />
          </Flex>
        ))}
      </Flex>
    </>
  );
};
