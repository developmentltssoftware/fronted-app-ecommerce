import { Select, SelectProps } from "@chakra-ui/react";

interface ISelectProps extends SelectProps {
  options: { value: string; label: string }[];
}
export const SelectHeader: React.FC<ISelectProps> = (props: ISelectProps) => {
  return (
    <Select fontSize={14} ml={props.ml ? props.ml : "none"} 
    w={props.w ? props.w : "none"}
    bgColor={'#fff'}
    {...props}>
      <option value="" disabled hidden>
        {props.placeholder}
      </option>
      {props.options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};
