"use client";

import CampaignsSide from "@/components/CampaignsSide";
import SearchInput from "@/components/form-elements/SearchInput";
import Menu from "@/components/Menu";
import StoriesSide from "@/components/StoriesSide";
import { Flex, Text } from "@chakra-ui/react";
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
      menu: [
        { id: "aa", title: "Otopark" },
        { id: "ss", title: "Vale Noktaları" },
        { id: "dd", title: "Oto Yıkama" },
        { id: "ww", title: "Oto Kuaför" },
        { id: "ff", title: "Lastik" },
        { id: "tt", title: "Servis" },
        { id: "gg", title: "Ekspertiz" },
        { id: "hh", title: "Şarj" },
      ],
      slider: [
        {
          id: "ffee",
          url: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        },
        {
          id: "deee",
          url: "https://tinypng.com/images/social/website.jpg",
        },
        {
          id: "gererfsdf",
          url: "https://wallpapers.com/images/featured/image-pictures-79gc4p3mqu7an848.jpg",
        },
        {
          id: "asds",
          url: "https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg",
        },
        {
          id: "eee",
          url: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        },
        {
          id: "ddd",
          url: "https://tinypng.com/images/social/website.jpg",
        },
        {
          id: "fff",
          url: "https://wallpapers.com/images/featured/image-pictures-79gc4p3mqu7an848.jpg",
        },
        {
          id: "vvv",
          url: "https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg",
        },
      ],
    },
  };

  return (
    <main>
      <Flex
        ref={containerRef}
        flexDirection={"column"}
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
        <SearchInput placeholder="Arama yap" />
        <Menu response={response} />
        <Text fontSize={"24px"} fontWeight={500} marginLeft={"20px"}>
          Kampanyalar
        </Text>
        <CampaignsSide response={response} />
      </Flex>
    </main>
  );
}
