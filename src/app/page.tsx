"use client";

import CampaignsSide from "@/components/CampaignsSide";
import SearchInput from "@/components/form-elements/SearchInput";
import Menu from "@/components/Menu";
import StationsSide from "@/components/StationsSide";
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
      stations: [
        {
          title: "Yakınımdakiler",
          order: 1,
          station: [
            {
              name: "aa",
              image:
                "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
              point: 4,
            },
            {
              name: "bb",
              image:
                "https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg",
              point: 2,
            },
            {
              name: "cc",
              image:
                "https://media.product.which.co.uk/prod/images/original/222f4a4449ce-best-cars-inline2.jpg",
              point: 1,
            },
            {
              name: "dd",
              image:
                "https://hips.hearstapps.com/hmg-prod/images/2024-10best-cadillac-ct5-v-blackwing-656e54ae7ba4a.jpg?crop=1xw:0.8888333333333334xh;center,top&resize=2048:*",
              point: 0,
            },
          ],
        },
        {
          title: "Son Alınan Hizmetler",
          order: 2,
          station: [
            {
              name: "yy",
              image:
                "https://media.product.which.co.uk/prod/images/original/222f4a4449ce-best-cars-inline2.jpg",
              point: 1,
            },
            {
              name: "gg",
              image:
                "https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp",
              point: 4,
            },
            {
              name: "ff",
              image:
                "https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg",
              point: 5,
            },
            {
              name: "qq",
              image:
                "https://cfx-wp-images.imgix.net/2022/05/2022-Dodge-Challenger-Copy-scaled.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&s=4c7ab559e27d6425ba449ffe8a0c62b5",
              point: 2,
            },
            {
              name: "ss",
              image:
                "https://hips.hearstapps.com/hmg-prod/images/2024-10best-cadillac-ct5-v-blackwing-656e54ae7ba4a.jpg?crop=1xw:0.8888333333333334xh;center,top&resize=2048:*",
              point: 3,
            },
            {
              name: "dd",
              image:
                "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
              point: 0,
            },
            {
              name: "eeeeeeeeee",
              image:
                "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
              point: 5,
            },
          ],
        },
        {
          title: "Haftanın En'leri",
          order: 3,
          station: [
            {
              name: "uu",
              image:
                "https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg",
              point: 5,
            },
            {
              name: "kk",
              image:
                "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
              point: 5,
            },
            {
              name: "jj",
              image:
                "https://hips.hearstapps.com/hmg-prod/images/2024-10best-cadillac-ct5-v-blackwing-656e54ae7ba4a.jpg?crop=1xw:0.8888333333333334xh;center,top&resize=2048:*",
              point: 3,
            },
            {
              name: "hh",
              image:
                "https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp",
              point: 3,
            },
            {
              name: "nn",
              image:
                "https://cfx-wp-images.imgix.net/2022/05/2022-Dodge-Challenger-Copy-scaled.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&s=4c7ab559e27d6425ba449ffe8a0c62b5",
              point: 2,
            },
          ],
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
        <Text fontSize={{ base: "16px", lg: "18px" }} fontWeight={"bold"}>
          Kampanyalar
        </Text>
        <CampaignsSide response={response} />
        <StationsSide response={response} />
      </Flex>
    </main>
  );
}
