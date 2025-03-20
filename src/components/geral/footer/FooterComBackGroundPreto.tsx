import { Flex, FlexProps } from "@chakra-ui/react";
interface IFooterMainHomeProps extends FlexProps {
  textFooter?: string;
}
export const FooterComBackGroundPreto: React.FC<IFooterMainHomeProps> = () => {
  return (
    <>
      <Flex
        bgColor={"#000"}
        h={"60px"}
        width={"100%"}
        pos={"relative"}
        bottom={"0px"}
        color={"#fff"}
        fontSize={"12px"}
        align={"center"} //y
        justify={"center"} //x
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
      >
        LTS software - Lead Tech Software
      </Flex>
    </>
  );
};
