"use client";

import StoriesSide from "@/components/StoriesSide";
import { Flex } from "@chakra-ui/react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  const response = {
    code: 100,
    data: {
      stories: [
        {
          id: "sdfsdf",
          thumb: "asdasd",
          type: "image",
          url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
        },
        {
          id: "fdsdsfg",
          thumb: "asdasdas",
          type: "image",
          url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },
        {
          id: "as",
          thumb: "ss",
          type: "image",
          url: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        },
        {
          id: "sss",
          thumb: "asdasdasdasd",
          type: "image",
          url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
        },
        {
          id: "tgfg",
          thumb: "dfgdf",
          type: "image",
          url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },
        {
          id: "cvbcv",
          thumb: "cvbcvb",
          type: "image",
          url: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        },
        {
          id: "ssss",
          thumb: "sdfg",
          type: "image",
          url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
        },
      ],
    },
  };

  return (
    <main>
      <Flex
        ref={containerRef}
        width={{
          base: "300px",
          sm: "480px",
          md: "620px",
          lg: "950px",
          xl: "950px",
          "2xl": "1200px",
        }}
        marginLeft={"auto"}
        marginRight={"auto"}
        overflowX={"hidden"}
        overflowY={"auto"}
      >
        <StoriesSide response={response} />
      </Flex>
    </main>
  );
}
