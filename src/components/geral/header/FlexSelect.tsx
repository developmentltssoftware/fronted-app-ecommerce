import { Flex, FlexProps, HStack } from "@chakra-ui/react";
import { InputSearch } from "../InputSearch";
import { SelectHeader } from "./SelectHeader";
import { optionslabels } from "../../types/constants";
interface IFlexSelect extends FlexProps {}
export const FlexSelect: React.FC<IFlexSelect> = () => {
  return (
    <HStack
      flexDirection={"row"}
      align={"center"}
      pos={"static"}
      mt={{ xl: -20, lg: -20, md: -80, sm: -800, base: -800 }}
      marginRight={{ xl: "auto", lg: "auto", md: "auto" }}
      marginLeft={{ xl: "auto", lg: "auto", md: "auto" }}
      w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "1200px" }}
      h={'content'}
      //border={"1px solid black"}
      justifyContent={"space-between"}
    >
      <Flex>
        <SelectHeader
          placeholder="Selecione um categoria"
          options={optionslabels}
          w={{ base: "200px", sm: "200px" }}
        />
      </Flex>
      <Flex>
        <InputSearch
          w={{
            base: "10px",
            sm: "10px",
            md: "300px",
            lg: "300px",
            xl: "300px",
          }}
        />
      </Flex>
    </HStack>
  );
};
