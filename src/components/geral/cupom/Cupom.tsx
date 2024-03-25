import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  ModalProps,
  Flex,
  Divider,
  Text
} from "@chakra-ui/react";
import React from "react";

interface IModalCupomProps extends ModalProps {
  labelOne?: string;
  labelTwo?: string;
  title?: string;
  nameButton?: string;
  input?: React.ReactNode;
  children: React.ReactNode;
}
export const Cupom: React.FC<IModalCupomProps> = ({children}: IModalCupomProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} w={'fit-content'}>Open Modal</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cupons</ModalHeader>
          <ModalCloseButton />
          <Divider orientation="horizontal" pt={4} />
          <ModalBody pb={6} h={"100vh"}>
            <FormControl>
              <FormLabel></FormLabel>
              <Flex flexDirection={"row"} gap={1}>
                <Input ref={initialRef} placeholder="Código do Cupom" />
                <Button colorScheme="teal" variant={"outline"}>
                  Adicionar
                </Button>
              </Flex>
            </FormControl>
            <Text>Insira o seu código de desconto no campo acima.</Text>

            {children}
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3}>
              {nameButton}
            </Button>
            <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
