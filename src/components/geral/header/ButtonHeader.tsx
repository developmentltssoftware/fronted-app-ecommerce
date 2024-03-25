import { Button, ButtonProps } from "@chakra-ui/react";

interface IButtonProps extends ButtonProps {
  nameButton?: string;
}
export const ButtonHeader: React.FC<IButtonProps> = (props: IButtonProps) => {
  return (
    <Button
      flexDirection={props.flexDirection ? props.flexDirection : 'column'}
      justifyContent={'center'}
      iconSpacing={'initial'}
      textAlign={'center'}
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
      border={"1px solid white"}
    >
      {props.nameButton ? props.nameButton : ""}
    </Button>
  );
};
