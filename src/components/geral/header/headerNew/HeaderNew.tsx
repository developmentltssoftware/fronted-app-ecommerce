import { Flex, FlexProps } from "@chakra-ui/react";
import { FlexLogo } from "./FlexLogo";

interface IHeaderNew extends FlexProps {}
export const HeaderNew: React.FC<IHeaderNew> = () => {
  return (
    <Flex
      pos={"relative"}
      top={-20}
      left={10}
      display={{
        base: "none",
        sm: "none",
        md: "flex",
        lg: "flex",
        xl: "flex",
      }}
      //border={'1px solid red'}
    >
      <FlexLogo />
    </Flex>
  );
};
