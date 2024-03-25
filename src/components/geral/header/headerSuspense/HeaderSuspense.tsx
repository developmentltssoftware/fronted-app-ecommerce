import { Flex, FlexProps } from "@chakra-ui/react";
import { ImageHeader } from "../ImageHeader";
import { SelectHeader } from "../SelectHeader";
import { Buttons } from "./Buttons";
import { optionslabels } from "../../../types/constants";
interface IHeaderProps extends FlexProps {}

export const HeaderSuspense: React.FC<FlexProps> = (props: IHeaderProps) => {
  return (
    <Flex
      flexDirection={"row"}
      gap={2}
      justifyContent={"space-around"}
      align={"center"}
      h={20}
      width={"100%"}
      p={2}
      m={0}
      pos={props.position ? props.position : undefined}
      bottom={props.bottom}
      display={props.display}
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
