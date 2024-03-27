import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
interface IIpuntProps extends InputProps {}
export const InputSearch: React.FC<IIpuntProps> = (props: IIpuntProps) => {
  return (
    <InputGroup ml={props.marginLeft ? props.marginLeft : "none"}>
      <InputLeftElement pointerEvents="none">
        <IoSearchOutline color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={"Buscar um produto"}
        w={props.w}
        bgColor={"#fff"}
      />
    </InputGroup>
  );
};
