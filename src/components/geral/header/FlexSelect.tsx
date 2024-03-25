import { Flex, FlexProps, HStack, useDisclosure } from "@chakra-ui/react";
import { InputSearch } from "../InputSearch";
import { SelectHeader } from "./SelectHeader";
import { optionslabels } from "../../types/constants";
import { CardSmallOrderProduct } from "../CardSmallOrderProduct";
import { OrderOfProductClient } from "../OrderOfProductClient";
import coca from "../../../assets/img/coca.jpg";
import fanta_laranja from "../../../assets/img/fanta_laranja.jpg";
import sprit from "../../../assets/img/SPRITE_LATA.jpg";
interface IFlexSelect extends FlexProps {}
export const FlexSelect: React.FC<IFlexSelect> = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <HStack
      flexDirection={"row"}
      align={"center"}
      pos={"relative"}
      top={{ base: 20, sm: 20, md: -20, lg: -20, xl: -20 }}
      left={{
        xl: "-200px",
        lg: "-200px",
        md: "-200px",
        sm: "0px",
        base: "0px",
      }}
      w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}
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
      <Flex>
        <OrderOfProductClient
          //isOpen={true}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          children={[
            <CardSmallOrderProduct
              quantity={3}
              nameProduct={"Coca cola"}
              costProduct={8.99}
              imageProduct={coca}
            />,
            <CardSmallOrderProduct
              quantity={3}
              nameProduct={"Coca cola"}
              costProduct={8.99}
              imageProduct={coca}
            />,
            <CardSmallOrderProduct
              quantity={3}
              nameProduct={"Coca cola"}
              costProduct={8.99}
              imageProduct={coca}
            />,
            <CardSmallOrderProduct
              quantity={3}
              nameProduct={"Fanta Laranja Lata"}
              costProduct={8.99}
              imageProduct={fanta_laranja}
            />,
            <CardSmallOrderProduct
              quantity={3}
              nameProduct={"Sprit Lata"}
              costProduct={5.3}
              imageProduct={sprit}
            />,
            <CardSmallOrderProduct
              quantity={3}
              nameProduct={"Coca cola"}
              costProduct={8.99}
              imageProduct={coca}
            />,
            <CardSmallOrderProduct
              quantity={3}
              nameProduct={"Fanta Laranja Lata"}
              costProduct={8.99}
              imageProduct={fanta_laranja}
            />,
            <CardSmallOrderProduct
              quantity={3}
              nameProduct={"Sprit Lata"}
              costProduct={5.3}
              imageProduct={sprit}
            />,
          ]}
        />
      </Flex>
    </HStack>
  );
};
