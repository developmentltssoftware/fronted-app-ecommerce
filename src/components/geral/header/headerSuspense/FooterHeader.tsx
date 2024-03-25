import { ButtonProps, Flex } from "@chakra-ui/react";
import { ButtonHeader } from "../ButtonHeader";
import { CiDiscount1 } from "react-icons/ci";
import { IoHome, IoBagHandle } from "react-icons/io5";
import { BsPersonFillCheck } from "react-icons/bs";
interface IButtons extends ButtonProps {
  flagNameButton?: boolean;
}
export const names = [
  {
    color: "#000000",
    nameButton: "Início",
    icon: <IoHome size={20} />,
    variant: "outline",
    flagNameButton: true,
  },
  {
    color: "#000000",
    nameButton: "Promoções",
    icon: <CiDiscount1 size={20} />,
    variant: "outline",
    flagNameButton: true,
  },
  {
    color: "#000000",
    nameButton: "Pedidos",
    icon: <IoBagHandle size={20} />,
    variant: "outline",
    flagNameButton: true,
  },
  {
    color: "#000000",
    nameButton: "Perfil",
    icon: <BsPersonFillCheck size={20} />,
    variant: "outline",
    flagNameButton: true,
  },
];
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
        {names.map((name, index) => (
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
