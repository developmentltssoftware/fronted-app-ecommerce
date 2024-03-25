import { Flex } from "@chakra-ui/react";
import { optionslabels } from "../../../types/constants";
import { InputSearch } from "../../InputSearch";
import { SelectHeader } from "../SelectHeader";

export const FlexMain: React.FC = () => {
    return (
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          lg: "row",
          md: "row",
          xl: "row",
        }}
        pos={"absolute"}
        top={{ xl: 600, lg: 600, md: 600, sm: 450, base: 300 }}
        //w={"100vw"}
        gap={{ base: 5, sm: 5, md: 20, lg: 20, xl: 20 }}
      >
        <SelectHeader
          options={optionslabels}
          w={80}
          placeholder="Nossos Produtos"
        />
        <InputSearch />
      </Flex>
    );
}