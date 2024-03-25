/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import api from "../services/api";

type GrandeOperacaoContextType = {
  grandeOperacaoId: string;
  grandeOperacaoData: any;
  setGrandeOperacaoData: (data: any) => void;
  setGrandeOperacaoId: (id: string) => void;
  updateGrandeOperacao: (id: string, data: any) => Promise<void>;
};

// create the context 
const GrandeOperacaoContext = createContext<
  GrandeOperacaoContextType | undefined
>(undefined);
// begin the context
export const useGrandeOperacao = () => {
  const context = useContext(GrandeOperacaoContext);
  if (context === undefined) {
    throw new Error(
      "useGrandeOperacao deve ser usado dentro de um GrandeOperacaoProvider"
    );
  }
  return context;
};

export const GrandeOperacaoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [grandeOperacaoId, setGrandeOperacaoId] = useState("");
  const [grandeOperacaoData, setGrandeOperacaoData] = useState(null);

  useEffect(() => {
    if (grandeOperacaoId) {
      // Buscar os dados da API e definir usando setGrandeOperacaoData
      api
        .get(`/grande_operacao/${grandeOperacaoId}`)
        .then((response) => {
          setGrandeOperacaoData(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar grande operação", error);
        });
    }
  }, [grandeOperacaoId]);

  const updateGrandeOperacao = useCallback(async (id: string, data: any) => {
    try {
      await api.put(`/grande_operacao/${id}`, data);
      console.log("Operação atualizada com sucesso");
      // Você pode adicionar mais lógica aqui, como atualizar o estado local após a atualização
    } catch (error) {
      console.error("Erro ao atualizar a grande operação", error);
      // Tratamento de erro
    }
  }, []);

  return (
    <GrandeOperacaoContext.Provider
      value={{
        grandeOperacaoId,
        grandeOperacaoData,
        setGrandeOperacaoData,
        setGrandeOperacaoId,
        updateGrandeOperacao,
      }}
    >
      {children}
    </GrandeOperacaoContext.Provider>
  );
};
