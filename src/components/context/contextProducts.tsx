import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { ProductType, ProductTypeContext } from "../types/product.type";
import { api } from "../services/api";

// create the context
const ContextProducts = createContext<ProductTypeContext | undefined>(
  undefined
);
// begin the context
export const useContextProducts = () => {
  const context = useContext(ContextProducts);
  if (context === undefined) {
    throw new Error(
      "useGrandeOperacao deve ser usado dentro de um GrandeOperacaoProvider"
    );
  }
  return context;
};

export const ContextProductsProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [idProduct, setIdProduct] = useState("");
  const [dataProduct, setDataProduct] = useState<ProductType>({} as ProductType);
  
  useEffect(() => {
    if (idProduct) {
      // Buscar os dados da API e definir usando setGrandeOperacaoData
      api
        .get(`/product/${idProduct}`)
        .then((response) => {
          setIdProduct(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar por product", error);
        });
    }
  }, [idProduct]);
  

  const createOneProduct = useCallback(async (data: ProductType) => {
    try {
      await api.post(`/products/`, data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const updateOneProduct = useCallback(async (id: string | number, data: ProductType) => {
    try {
      await api.put(`/products/${id}`, data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const listOneProduct = useCallback(async (id: string | number) => {
    try {
      const product = await api.get(`/products/${id}`);
      setDataProduct(product.data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const listProducts = useCallback(async () => {
    try {
      const product = await api.get(`/products/`);
      setDataProduct(product.data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const deleteOneProduct = useCallback(async (id: string | number) => {
    try {
      await api.put(`/products/${id}`);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);

  return (
    <ContextProducts.Provider
      value={{
        idProduct,
        createOneProduct,
        listProducts,
        updateOneProduct,
        deleteOneProduct,
        listOneProduct,
      }}
    >
      {children}
    </ContextProducts.Provider>
  );
};
