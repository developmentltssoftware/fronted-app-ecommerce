import { Input, MyButton, ButtonChakra } from "../components/geral/Input";

export const Main = () => {
  return (
    <>
      <Input
        label={"Button of Test"}
        style={{ border: "1px solid red" }}
        color="#f4f5f7"
        width={"100px"}
      />
      <MyButton  color="blue" style={{border: '1px solid green', width: '100px', height: '20px'}}/>
      <ButtonChakra w={'600px'} colorScheme="teal">Button Chakra</ButtonChakra>
    </>
  );
};
