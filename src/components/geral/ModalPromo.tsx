import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Text } from "@chakra-ui/react";
import React from "react";
interface IModalProps extends ModalProps{
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    text: string;
    modaltitle: string;
}
export const ModalPromo: React.FC<IModalProps> = (props: IModalProps) => {
    return (
      <>
        <Button onClick={props.onOpen}>Open Modal</Button>

        <Modal blockScrollOnMount={false} isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.modaltitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                {props.text}
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={props.onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
};
