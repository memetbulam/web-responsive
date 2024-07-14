"use client";

import { useRef, useState } from "react";
import CampaignsSide from "@/components/CampaignsSide";
import SearchInput from "@/components/form-elements/SearchInput";
import Menu from "@/components/Menu";
import StationsSide from "@/components/StationsSide";
import StoriesSide from "@/components/StoriesSide";
import { Flex, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { response } from "@/utils/constants";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const containerRef = useRef(null);

  return (
    <Layout>
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
        <StoriesSide storiesData={response?.data?.stories} />
        <SearchInput
          placeholder="Arama yap"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Menu menuData={response?.data?.menu} searchValue={searchValue} />
        <CampaignsSide sliderData={response?.data?.slider} />
        <StationsSide stationsData={response?.data?.stations} />
      </Flex>
    </Layout>
  );
}
