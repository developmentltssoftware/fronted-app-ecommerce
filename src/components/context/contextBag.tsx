import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { BagContext, BagType } from "../types/bag.type";
import api from "../services/api";

// create the context
const ContextBag = createContext<BagContext | undefined>(undefined);
// begin the context
export const useContextBag = () => {
  const context = useContext(ContextBag);
  if (context === undefined) {
    throw new Error(
      "deve ser usado dentro de um GrandeOperacaoProvider"
    );
  }
  return context;
};

export const ContextBagProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [idBag, setIdBag] = useState<string | number>("");
  const [dataBag, setDataBag] = useState<BagType>({} as BagType);

  useEffect(() => {
    if (idBag) {
      // Buscar os dados da API e definir usando setGrandeOperacaoData
      api
        .get(`/orders/${idBag}`)
        .then((response) => {
          setIdBag(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar por product", error);
        });
    }
  }, [idBag, dataBag]);

  const addOneProductInBag = useCallback(async (data: BagType) => {
    try {
      await api.post(`/orders/`, data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const updateOneProductInBag = useCallback(
    async (id: string | number, data: BagType) => {
      try {
        await api.put(`/orders/${id}`, data);
        console.log("Operação atualizada com sucesso");
        // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
      } catch (error) {
        console.error("Erro ao atualizar a grande operação", error);
        // Tratamento de erro
      }
    },
    []
  );
  const listOneProductOfBag = useCallback(async (id: string | number) => {
    try {
      const bag = await api.get(`/orders/${id}`);
      setDataBag(bag.data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const listProductsOfBag = useCallback(async () => {
    try {
      const bag = await api.get(`/orders/`);
      setDataBag(bag.data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const deleteOneProductOfBag = useCallback(async (id: string | number) => {
    try {
      await api.delete(`/orders/${id}`);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);

  return (
    <ContextBag.Provider
      value={{
        idBag,
        addOneProductInBag,
        deleteOneProductOfBag,
        updateOneProductInBag,
        listOneProductOfBag,
        listProductsOfBag,
      }}
    >
      {children}
    </ContextBag.Provider>
  );
};
