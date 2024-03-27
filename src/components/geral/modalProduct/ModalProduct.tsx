import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  Stack,
  Flex,
  ModalHeader,
} from "@chakra-ui/react";
import React from "react";

import { ImageModal } from "./ImageModal";

import { ListOptionsOfProduct } from "./ListOptionsOfProduct";
import { CardTitleOfProduct } from "./CardTitleOfProduct";
import { ButtonIncrement } from "../ButtonIncrement";
import { TypeOfProduct, typeButton } from "../../types/constants";
interface IModalProductProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  buttonLabel?: string;
  descriptionProduct: string;
  children: React.ReactNode;
  valueProduct: number;
  nameProduct: string;
}
export const ModalProduct: React.FC<IModalProductProps> = ({
  isOpen,
  onClose,
  onOpen,
  buttonLabel,
}: IModalProductProps) => {
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ xl: "xl", lg: "xl", md: "xl", sm: "md", base: "100%" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody
            w={{ xl: "xl", lg: "xl", md: "xl", sm: "100%", base: "100%" }}
          >
            <Flex
              gap={2}
              align={"center"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <ImageModal />
              <Flex
                flexDirection={"column"}
                maxH="550px"
                overflowY="auto"
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "270px",
                  lg: "270px",
                  xl: "270px",
                }}
              >
                <Stack
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "270px",
                    lg: "270px",
                    xl: "270px",
                  }}
                >
                  <CardTitleOfProduct
                    title={"Pizza"}
                    valueProduct={12.5}
                    children={
                      <ListOptionsOfProduct
                        types={TypeOfProduct.PIZZAS}
                        nameProduct={"Pizza"}
                        valueProduct={0}
                      />
                    }
                    nameProduct={"Pizza"}
                  />
                </Stack>
                <ModalFooter
                  pos={"sticky"}
                  bottom={0}
                  justifyContent={"space-between"}
                  bgColor={"#ffffff"}
                  border={"1px solid #f4f5f7"}
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "270px",
                    lg: "270px",
                    xl: "270px",
                  }}
                >
                  <ButtonIncrement
                    backgroundColor={"#f4f5f7"}
                    types={typeButton.primary}
                    value={1}
                    limit={1}
                  />

                  <Button variant="solid" colorScheme="twitter">
                    {buttonLabel ? buttonLabel : "Confirmar"}
                  </Button>
                </ModalFooter>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
