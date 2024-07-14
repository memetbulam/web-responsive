import React, { Dispatch, FC, SetStateAction } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import OutSideWrapper from "../OutSideWrapper";
import UserIcon from "../icons/UserIcon";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface Props {
  isProfileButtonClicked: boolean;
  setIsProfileButtonClicked: Dispatch<SetStateAction<boolean>>;
}

const ProfileDetail: FC<Props> = ({
  isProfileButtonClicked,
  setIsProfileButtonClicked,
}) => {
  const router = useRouter();
  const userInfo: { userName: string } = JSON.parse(
    Cookies.get("userInfo") as string
  );
  return (
    <OutSideWrapper
      handleOutSideClick={() => {
        setIsProfileButtonClicked(false);
      }}
    >
      <Flex
        position={"absolute"}
        bottom={"-160px"}
        right={"0px"}
        flexDirection={"column"}
        opacity={isProfileButtonClicked ? 1 : 0}
        visibility={isProfileButtonClicked ? "visible" : "hidden"}
        pointerEvents={isProfileButtonClicked ? "all" : "none"}
        width={"230px"}
        height={"150px"}
        zIndex={50}
        backgroundColor={"gray.100"}
        borderRadius={"10px"}
        overflow={"hidden"}
        padding={"10px"}
        gap={"20px"}
        transition={"opacity 0.3s, visibility 0.3s"}
      >
        <Flex alignItems={"center"} gap={"10px"}>
          <UserIcon
            width={"36px"}
            height={"36px"}
            style={{
              border: "2px solid black",
              padding: "4px",
              borderRadius: "6px",
            }}
          />
          <Text fontSize={"14px"}>{userInfo?.userName}</Text>
        </Flex>
        <Box
          width={"100%"}
          height={"4px"}
          backgroundColor={"gray.500"}
          borderRadius={"50%"}
        />
        <Button
          backgroundColor={"gray.100"}
          _hover={{ backgroundColor: "activeGreen", color: "white" }}
          transition={"all 0.3s"}
          fontSize={{ base: "12px", sm: "14px", md: "16px" }}
          padding={{ base: "0px 4px", sm: "0px 6px", md: "0px 16px" }}
          onClick={() => {
            Cookies.remove("token");
            Cookies.remove("userName");
            router.push("/login");
          }}
        >
          Çıkış yap
        </Button>
      </Flex>
    </OutSideWrapper>
  );
};

export default ProfileDetail;
