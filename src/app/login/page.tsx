"use client";
import React, { FormEventHandler, useCallback, useState } from "react";
import useDataFetch from "@/hooks/useDataFetch";
import { urls } from "@/utils/urls";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    userName: "",
    password: "",
  });

  const router = useRouter();

  const { action, errorMessage, isLoading } = useDataFetch({
    url: urls.login,
    method: "post",
    payload: inputValues,
  });

  const handleLoginClick: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      const response = {
        code: 100,
        token: "AhYmPkQvugWUSKyyODcAJLlsPzNLMJutAehWWoTdiTfGUydQQi",
        message: "İşlem başarılı",
      };

      // const errorResponse: {
      //   code: 101;
      //   token: "";
      //   message: "userName yada password hatalı";
      // };

      if (response.code === 100) {
        Cookies.set("token", response.token);
        Cookies.set(
          "userInfo",
          JSON.stringify({ userName: inputValues.userName })
        );
        router.push("/");
      } else if (response.code === 101) {
        Cookies.remove("token");
        Cookies.remove("userInfo");
      }
      // return await action();
    },
    [inputValues.userName, router]
  );

  return (
    <Flex
      width={"100dvw"}
      height={"100dvh"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"gray.100"}
      overflow={"auto"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"50px"}
        width={{
          base: "90%",
          sm: "70%",
          md: "50%",
          lg: "50%",
          xl: "40%",
          "2xl": "30%",
        }}
        height={"400px"}
        padding={{
          base: "16px",
          sm: "30px",
          md: "30px",
          lg: "50px",
          xl: "50px",
          "2xl": "50px",
        }}
        backgroundColor={"white"}
        borderRadius={"10px"}
        transition={"width 0.3s"}
      >
        <Text
          textAlign={"center"}
          fontSize={{
            base: "24px",
            sm: "28px",
            md: "32px",
            lg: "36px",
            xl: "36px",
            "2xl": "40px",
          }}
          fontWeight={500}
        >
          Giriş Yap
        </Text>
        <form onSubmit={handleLoginClick}>
          <Input
            placeholder="Kullanıcı adınızı yazınız"
            required
            value={inputValues.userName}
            type="email"
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                userName: e.target.value,
              }))
            }
            marginBottom={"16px"}
          />
          <Input
            placeholder="Şifrenizi yazınız"
            required
            value={inputValues.password}
            type="password"
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          <Button
            type="submit"
            marginTop={"24px"}
            width={"100%"}
            backgroundColor={"green.500"}
            color={"white"}
            borderRadius={"20px"}
            _hover={{
              backgroundColor: "green.600",
            }}
            transition={"background-color 0.3s"}
            disabled={isLoading}
          >
            Giriş Yap
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Login;
