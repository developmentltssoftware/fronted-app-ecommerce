import { Button, ButtonProps } from "@chakra-ui/react";
import React, { ButtonHTMLAttributes } from "react";

//uma forma de extender um component puro html
type IInputProps = React.ComponentProps<"input"> & {
  label: string;
};

export const Input = ({ type, ...rest }: IInputProps) => {
  return <input type={type} {...rest} />;
};

// outra forma de extender um component puro html

export const MyButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return <button {...props}></button>;
};

// forma de extender um component do chakra
interface IButtonProps extends ButtonProps {
}
export const ButtonChakra: React.FC<IButtonProps> = ({children, ...props}:IButtonProps) => {
    return (
      <Button {...props}>
        {children}
      </Button>
    );
};