"use client";
import React, { FormEventHandler, useCallback, useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import DefaultInput from "@/components/form-elements/DefaultInput";
import PasswordInput from "@/components/form-elements/PasswordInput";
import { ApiStatusCode, ChakraUiAlertStatus, InputTypes } from "@/utils/enums";
import { ChakraUiAlertState, LoginApiResponse } from "@/utils/types";
import CustomAlert from "@/components/CustomAlert";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    userName: "",
    password: "",
  });
  const [isShowAlert, setIsShowAlert] = useState<ChakraUiAlertState>({
    isShowAlert: false,
    message: "",
    status: undefined,
  });

  const router = useRouter();

  const handleLoginClick: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      let response: LoginApiResponse;
      if (
        inputValues?.userName === "ziyaretci@otovinn.com" &&
        inputValues?.password === "123456"
      ) {
        response = {
          code: ApiStatusCode.Success,
          token: "AhYmPkQvugWUSKyyODcAJLlsPzNLMJutAehWWoTdiTfGUydQQi",
          message: "İşlem başarılı",
        };
      } else {
        response = {
          code: ApiStatusCode.Error,
          token: "",
          message: "userName yada password hatalı",
        };
      }

      if (response.code === ApiStatusCode.Success) {
        Cookies.set("token", response.token);
        Cookies.set(
          "userInfo",
          JSON.stringify({ userName: inputValues.userName })
        );
        router.push("/");
      } else if (response.code === ApiStatusCode.Error) {
        setIsShowAlert({
          isShowAlert: true,
          message: response.message,
          status: ChakraUiAlertStatus.Error,
        });
        Cookies.remove("token");
        Cookies.remove("userInfo");
      }
    },
    [inputValues?.password, inputValues.userName, router]
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
          <DefaultInput
            placeholder="Kullanıcı adınızı yazınız"
            required
            value={inputValues.userName}
            type={InputTypes.Email}
            inputProps={{ marginBottom: "16px" }}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                userName: e.target.value,
              }))
            }
          />
          <PasswordInput
            required
            placeholder="Şifrenizi yazınız"
            value={inputValues.password}
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
          >
            Giriş Yap
          </Button>
        </form>
      </Flex>
      <CustomAlert isShowAlert={isShowAlert} setIsShowAlert={setIsShowAlert} />
    </Flex>
  );
};

export default Login;
