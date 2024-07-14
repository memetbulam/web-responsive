import {
  ApiStatusCode,
  ChakraUiAlertStatus,
  StationHoveredIconKeys,
} from "./enums";

export type StationHoveredIcon = {
  key: StationHoveredIconKeys | undefined;
  value: boolean;
};

export type StoriesData = {
  id: string;
  thumb: string;
  type: string;
  url: string;
};

export type MenuData = {
  id: string;
  title: string;
};

export type SliderData = {
  id: string;
  url: string;
};

export type StationsData = {
  title: string;
  order: number;
  station: {
    name: string;
    image: string;
    point: number;
  }[];
};

export type ApiResponse = {
  code: ApiStatusCode;
  message: string;
  data: {
    stories: StoriesData[];
    menu: MenuData[];
    slider: SliderData[];
    stations: StationsData[];
  };
};

export type LoginApiResponse = {
  code: ApiStatusCode;
  token: string;
  message: string;
};

export type ChakraUiAlertState = {
  isShowAlert: boolean;
  message: string;
  status: ChakraUiAlertStatus | undefined;
};
