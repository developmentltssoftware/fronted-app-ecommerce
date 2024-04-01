import { Button, ButtonProps } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IButtonProps extends ButtonProps {
  nameButton?: string;
  //onClick?: MouseEventHandler<HTMLButtonElement>;
  route?: string;
}
export const ButtonHeader: React.FC<IButtonProps> = (props: IButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${props.route}`);
  };
  return (
    <Button
      flexDirection={props.flexDirection ? props.flexDirection : "column"}
      justifyContent={"center"}
      iconSpacing={"initial"}
      textAlign={"center"}
      gap={1}
      leftIcon={props.leftIcon ? props.leftIcon : undefined}
      fontSize={props.fontSize ? props.fontSize : "10px"}
      fontWeight={props.fontWeight ? props.fontWeight : 600}
      width={props.width ? props.width : "fit-content"}
      height={12}
      color={props.color}
      variant={props.variant}
      colorScheme={props.colorScheme}
      backgroundColor={props.backgroundColor}
      _hover={props._hover}
      border={props.border ? props.border : "1px solid white"}
      onClick={handleClick}
    >
      {props.nameButton ? props.nameButton : ""}
    </Button>
  );
};
