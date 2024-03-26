import { Flex, FlexProps, HStack, useDisclosure } from "@chakra-ui/react";
import { InputSearch } from "../InputSearch";
import { SelectHeader } from "./SelectHeader";
import { optionslabels } from "../../types/constants";
import { CardSmallOrderProduct } from "../CardSmallOrderProduct";
import { OrderOfProductClient } from "../OrderOfProductClient";
import coca from "../../../assets/img/coca.jpg";
import fanta_laranja from "../../../assets/img/fanta_laranja.jpg";
import sprit from "../../../assets/img/SPRITE_LATA.jpg";
import { FlexBag } from "../comanda/FlexBag";
interface IFlexSelect extends FlexProps {}
export const FlexSelect: React.FC<IFlexSelect> = () => {
  return (
    <HStack
      flexDirection={"row"}
      align={"center"}
      pos={"relative"}
      top={{ base: 20, sm: 20, md: -20, lg: -20, xl: -20 }}
      marginRight={{ xl: "auto", lg: "auto", md: "auto" }}
      marginLeft={{ xl: "auto", lg: "auto", md: "auto" }}
      w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "1200px" }}
      border={"1px solid black"}
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
