"use client";
import React from "react";
import Layout from "@/components/Layout";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <Layout>
      <Flex
        width={"100dvw"}
        height={"100dvh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          width={"300px"}
          height={"250px"}
          backgroundColor={"gray.100"}
          _hover={{ backgroundColor: "activeGreen", color: "white" }}
          transition={"all 0.3s"}
          fontSize={{ base: "12px", sm: "14px", md: "16px" }}
          padding={{ base: "0px 4px", sm: "0px 6px", md: "0px 16px" }}
          onClick={() => {
            router.push("/");
          }}
        >
          Ana Sayfaya Git
        </Button>
      </Flex>
    </Layout>
  );
};

export default Page;
