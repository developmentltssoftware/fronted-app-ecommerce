import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { CardPrincipalDeProdutos } from "../../../components/geral/cardMain/CardPrincipalDeProdutos";
import { ModalDoProduto } from "../../../components/geral/modalProduct/ModalDoProduto";
interface IProps {
  tituloDaListaDeProdutos: string;
  listaDeProdutos: { label: string; value: string; price: number }[];
}
export const ListaPrincipalDeProdutos: React.FC<IProps> = ({
  tituloDaListaDeProdutos,
  listaDeProdutos,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={2}
        pos={"static"}
        //top={{ xl: 0, lg: 0, md: 0, sm: 0, base: 0 }}
        mt={{ xl: 0, lg: 0, md: 0, sm: 2, base: 2 }}
        p={1}
        mb={2}
        marginRight={{ xl: "auto", lg: "auto", md: "auto" }}
        marginLeft={{ xl: "auto", lg: "auto", md: "auto" }}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "1200px" }}
      >
        <Text fontWeight={600} fontSize={"24px"}>
          {tituloDaListaDeProdutos}
        </Text>
        <Flex
          flexDirection={"row"}
          align={"center"}
          justify={"center"}
          gap={2}
          display={"grid"}
          gridTemplateColumns={{
            xl: "1fr 1fr",
            lg: "1fr 1fr",
            md: "1fr 1fr",
            sm: "1fr 1fr",
            xs: "1fr",
            base: "1fr",
          }}
          w={{ xl: "fit-content", lg: "fit-content" }}
        >
          {listaDeProdutos.map((name, index) => (
            <>
              <CardPrincipalDeProdutos
                key={index}
                descriptionProduct={name.label}
                nameProduct={name.label}
                valueProduct={name.price}
                src={name.value}
              />
              <ModalDoProduto
                isOpen={false}
                onClose={onClose}
                descriptionProduct={""}
                children={undefined}
                valueProduct={0}
                nameProduct={"Pizza"}
              />
            </>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
