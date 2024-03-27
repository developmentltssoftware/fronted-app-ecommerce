import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { ProductType } from "../types/product.type";
import { UserType, UserTypeContext } from "../types/user.type";
import api from "../services/api";

// create the context
const ContextUser = createContext<UserTypeContext | undefined>(undefined);
// begin the context
export const useContextProducts = () => {
  const context = useContext(ContextUser);
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
 
  const [dataUser, setdataUser] = useState<ProductType>(
    {} as ProductType
  );
    useEffect (() =>{

    },[dataUser])
  const createOneUser = useCallback(async (data: UserType) => {
    try {
      await api.post(`/users/`, data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const updateOneUser = useCallback(
    async (id: string | number, data: UserType) => {
      try {
        await api.put(`/users/${id}`, data);
        console.log("Operação atualizada com sucesso");
        // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
      } catch (error) {
        console.error("Erro ao atualizar a grande operação", error);
        // Tratamento de erro
      }
    },
    []
  );
  const listOneUser = useCallback(async (id: string | number) => {
    try {
      const user = await api.get(`/users/${id}`);
      setdataUser(user.data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const listUsers = useCallback(async () => {
    try {
      const users = await api.get(`/users/`);
      setdataUser(users.data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);
  const deleteOneUser = useCallback(async (id: string | number) => {
    try {
      await api.put(`/users/${id}`);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);

  return (
    <ContextUser.Provider
      value={{
        createOneUser,
        listUsers,
        updateOneUser,
        deleteOneUser,
        listOneUser,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
};
