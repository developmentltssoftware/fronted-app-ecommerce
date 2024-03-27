import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React, { useCallback, useState } from "react";
import { useToast } from "@chakra-ui/toast";
import {
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { isNumeric } from "validator";
import { useAuth } from "./context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

interface IFormInputs {
  phone: string;
  fullname: string;
}

export const Singin: React.FC<IFormInputs> = () => {
  const toast = useToast();
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      phone: "",
      fullname: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log(data);
    const { phone, fullname } = data;
    try {
      await authenticate(phone, fullname);
      if (!errors.fullname && !errors.phone)
        toast({
          title: "Sucesso!",
          description: "Cadastro realizado com sucesso.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      setLoading(!loading);
      navigate("/test");
      reset();
    } catch (err) {
      toast({
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };
  // mask passada para o input
  const maskInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 14;
    e.currentTarget.minLength = 14;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d{4})/, "$1-$2");
    e.currentTarget.value = value;
    console.log(value);
    return e;
  }, []);

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)} w={"400px"} h={"500px"}>
      <Flex
        w={"full"}
        h={"400px"}
        border={"1px solid #f4f5f7"}
        borderRadius={20}
        p={4}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDirection={"column"}
        bgColor={"white"}
      >
        <Text textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize={"14px"}>
            Informe seu número de telefone
          </Text>
          <Text fontSize={"12px"}>
            Ele é importante para falarmos com você caso necessário
          </Text>
        </Text>
        <Flex flexDirection={"column"} w={"full"}>
          <FormLabel>Telefone</FormLabel>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
              minLength: 14,
              maxLength: 14,
            }}
            render={({ field }) => (
              <Input
                placeholder="(XX) 9XXXX-XXXX"
                type="text"
                aria-invalid={errors.phone ? "true" : "false"}
                onKeyUp={maskInput}
                {...field}
              />
            )}
          />
          {errors.phone?.type === "required" && (
            <p role="alert" style={{ color: "red", fontSize: "12px" }}>
              Telefone é obrigatório.
            </p>
          )}
          {errors.phone?.type === "maxLength" && (
            <p role="alert" style={{ color: "red", fontSize: "12px" }}>
              Há dígitos em excesso.
            </p>
          )}
          {errors.phone?.type === "minLength" && (
            <p role="alert" style={{ color: "red", fontSize: "12px" }}>
              Há dígitos faltando.
            </p>
          )}
        </Flex>
        <Flex flexDirection={"column"} w={"full"}>
          <FormLabel>Nome completo</FormLabel>
          <Controller
            name="fullname"
            control={control}
            rules={{
              required: true,
              validate: () => {
                let name = "";
                name = getValues("fullname");
                if (!isNumeric(name)) return true;
                else return false;
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                aria-invalid={errors.fullname ? "true" : "false"}
                placeholder="Nome completo"
              />
            )}
          />
          {errors.fullname?.type === "required" && (
            <p role="alert" style={{ color: "red", fontSize: "12px" }}>
              Nome é obrigatório!
            </p>
          )}
          {errors.fullname?.type === "validate" && (
            <p role="alert" style={{ color: "red", fontSize: "12px" }}>
              Nome inválido!
            </p>
          )}
        </Flex>
        <Flex w={"100%"} align={"center"} justify={"center"}>
          <Button
            type="submit"
            bgColor={"#000"}
            color={"#fff"}
            onClick={handleSubmit(onSubmit)}
            w={"200px"}
          >
            Confirmar
          </Button>
        </Flex>
      </Flex>
    </FormControl>
  );
};
