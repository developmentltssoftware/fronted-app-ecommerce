import { Flex, FlexProps } from "@chakra-ui/react";
import { ImageHeader } from "../ImageHeader";
import { SelectHeader } from "../SelectHeader";
import { Buttons } from "./Buttons";
import { optionslabels } from "../../../types/constants";
interface IHeaderProps extends FlexProps {}

export const HeaderSuspenso: React.FC<FlexProps> = (props: IHeaderProps) => {
  return (
    <Flex
      flexDirection={"row"}
      position={"fixed"}
      zIndex={1}
      gap={2}
      justifyContent={"space-around"}
      align={"center"}
      h={20}
      width={"100%"}
      p={2}
      m={0}
      bottom={props.bottom}
      display={props.display}
      opacity={props.opacity} // A opacidade será controlada por CSS
      //transition="top 1.5s linear"
      transition={"opacity 1s ease-out"}
      bgColor={"#fff"}
    >
      <Flex align={"center"} gap={2}>
        <ImageHeader label={"Image"} display={{ base: "none", sm: "none" }} />
        <SelectHeader
          options={optionslabels}
          placeholder={"Nossos Produtos"}
          w={60}
        />
      </Flex>
      <Buttons
        display={{
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
          base: "none",
        }}
      />
    </Flex>
  );
};
