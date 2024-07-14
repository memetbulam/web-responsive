"use client";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import CampaignsSide from "@/components/CampaignsSide";
import SearchInput from "@/components/form-elements/SearchInput";
import Menu from "@/components/Menu";
import StationsSide from "@/components/StationsSide";
import StoriesSide from "@/components/StoriesSide";
import { Flex } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { response } from "@/utils/constants";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const containerRef = useRef(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const recognition = useMemo(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      return new SpeechRecognition();
    }
  }, []) as SpeechRecognition;

  const handleMicrophoneOpenClick = useCallback(
    (setIsMicrophoneActive: Dispatch<SetStateAction<boolean>>) => {
      if (
        "SpeechRecognition" in window ||
        "webkitSpeechRecognition" in window
      ) {
        if (recognitionRef.current) {
          recognitionRef.current = recognition;
        }
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "tr-TR";

        recognition.onstart = () => {
          setIsMicrophoneActive(true);
        };

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setIsMicrophoneActive(false);
          setSearchValue(transcript);
        };

        recognition.onerror = () => {
          setIsMicrophoneActive(false);
        };

        recognition.start();
      } else {
        setIsMicrophoneActive(false);
      }
    },
    [recognition]
  );

  const handleMicrophoneCloseClick = useCallback(
    (setIsMicrophoneActive: Dispatch<SetStateAction<boolean>>) => {
      recognition.stop();
      setIsMicrophoneActive(false);
    },
    [recognition]
  );

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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          handleMicrophoneOpenClick={handleMicrophoneOpenClick}
          handleMicrophoneCloseClick={handleMicrophoneCloseClick}
        />
        <Menu menuData={response?.data?.menu} searchValue={searchValue} />
        <CampaignsSide sliderData={response?.data?.slider} />
        <StationsSide stationsData={response?.data?.stations} />
      </Flex>
    </Layout>
  );
}
