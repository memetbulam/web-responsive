"use client";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    userName: "",
    passowrd: "",
  });
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
        <Box>
          <Input
            placeholder="Kullanıcı adınızı yazınız"
            value={inputValues.userName}
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
            value={inputValues.passowrd}
            type="password"
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                passowrd: e.target.value,
              }))
            }
          />
          <Button
            type="button"
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
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
