import HomeIcon from "@/components/icons/HomeIcon";
import { ApiResponse } from "./types";
import CartShoppingIcon from "@/components/icons/CartShoppingIcon";
import CarIcon from "@/components/icons/CarIcon";
import UserIcon from "@/components/icons/UserIcon";
import { ApiStatusCode } from "./enums";

export const response: ApiResponse = {
  code: ApiStatusCode.Success,
  message: "ok",
  data: {
    stories: [
      {
        id: "9D1A5F47-52F3-EE11-A29C-005056010275",
        thumb:
          "https://api.otovinn.com/OTOVINN/Attachments/Thumb/9D1A5F47-52F3-EE11-A29C-005056010275.jpeg",
        type: "image",
        url: "https://api.otovinn.com/OTOVINN/Attachments/Snap/9D1A5F47-52F3-EE11-A29C-005056010275.jpg",
      },
      {
        id: "98812DAD-B51D-EF11-A29D-005056010275",
        thumb:
          "https://api.otovinn.com/OTOVINN/Attachments/Thumb/98812DAD-B51D-EF11-A29D-005056010275.jpeg",
        type: "image",
        url: "https://api.otovinn.com/OTOVINN/Attachments/Snap/98812DAD-B51D-EF11-A29D-005056010275.png",
      },
      {
        id: "DE546064-8562-EE11-A29C-005056010275",
        thumb:
          "https://api.otovinn.com/OTOVINN/Attachments/Thumb/DE546064-8562-EE11-A29C-005056010275.jpeg",
        type: "image",
        url: "https://api.otovinn.com/OTOVINN/Attachments/Snap/DE546064-8562-EE11-A29C-005056010275.jpg",
      },
      {
        id: "C690791F-AE0E-EF11-A29D-005056010275",
        thumb:
          "https://api.otovinn.com/OTOVINN/Attachments/Thumb/C690791F-AE0E-EF11-A29D-005056010275.png",
        type: "image",
        url: "https://api.otovinn.com/OTOVINN/Attachments/Snap/C690791F-AE0E-EF11-A29D-005056010275.jpg",
      },
      {
        id: "505BA5BB-47D1-EE11-A29C-005056010275",
        thumb:
          "https://api.otovinn.com/OTOVINN/Attachments/Thumb/505BA5BB-47D1-EE11-A29C-005056010275.png",
        type: "image",
        url: "https://api.otovinn.com/OTOVINN/Attachments/Snap/505BA5BB-47D1-EE11-A29C-005056010275.jpg",
      },
    ],
    menu: [
      {
        id: "8",
        title: "Şarj",
      },
      {
        id: "5",
        title: "Lastik",
      },
      {
        id: "7",
        title: "Ekspertiz",
      },
      {
        id: "6",
        title: "Servis",
      },
      {
        id: "4",
        title: "Oto Kuaför",
      },
      {
        id: "2",
        title: "Oto Yıkama",
      },
      {
        id: "1",
        title: "Otopark",
      },
      {
        id: "3",
        title: "Vale",
      },
    ],
    slider: [
      {
        id: "8BCF281D-7738-EF11-A29D-005056010275",
        url: "https://api.otovinn.com/OTOVINN/Attachments/SliderMobil/8BCF281D-7738-EF11-A29D-005056010275.jpg",
      },
      {
        id: "428B21A2-AD0E-EF11-A29D-005056010275",
        url: "https://api.otovinn.com/OTOVINN/Attachments/SliderMobil/428B21A2-AD0E-EF11-A29D-005056010275.jpg",
      },
      {
        id: "603151CB-BD0E-EF11-A29D-005056010275",
        url: "https://api.otovinn.com/OTOVINN/Attachments/SliderMobil/603151CB-BD0E-EF11-A29D-005056010275.jpg",
      },
      {
        id: "07F06FAD-B31D-EF11-A29D-005056010275",
        url: "https://api.otovinn.com/OTOVINN/Attachments/SliderMobil/07F06FAD-B31D-EF11-A29D-005056010275.jpg",
      },
    ],
    stations: [
      {
        title: "Son Alınan Hizmetler",
        order: 2,
        station: [
          {
            name: "Mb Oto Yıkama",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/5DC5A7D9-86DC-EE11-A29C-005056010275.jpeg",
            point: 3,
          },
          {
            name: "Aşkın Oto Yıkama",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/078D682B-337A-EE11-A29C-005056010275.jpeg",
            point: 2,
          },
          {
            name: "The North Florya - Otopark ve Otoyıkama",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/EB68384E-78E3-ED11-A29B-005056010275.jpeg",
            point: 4,
          },
        ],
      },
      {
        title: "Haftanın Enleri",
        order: 3,
        station: [
          {
            name: "The North Florya - Otopark ve Otoyıkama",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/EB68384E-78E3-ED11-A29B-005056010275.jpeg",
            point: 4,
          },
          {
            name: "Barış Otopark ve Otoyıkama",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/078D682B-337A-EE11-A29C-005056010275.jpeg",
            point: 2,
          },
          {
            name: "Mb Oto Yıkama",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/5DC5A7D9-86DC-EE11-A29C-005056010275.jpeg",
            point: 3,
          },
        ],
      },
      {
        title: "Yakınımdakiler",
        order: 1,
        station: [
          {
            name: "Premier Auto Spa",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/D9BF179F-41AA-EE11-A29C-005056010275.jpeg",
            point: 5,
          },
          {
            name: "Atlas Oto Yıkama Oto Kuaför",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/ABA03CE9-B8AF-EE11-A29C-005056010275.jpeg",
            point: 4,
          },
          {
            name: "ERC Garage",
            image:
              "https://api.otovinn.com/OTOVINN//Attachments/IstasyonFotografi/245DC5DE-D576-ED11-BED5-005056010E56.jpeg",
            point: 3,
          },
        ],
      },
    ],
  },
};

export const topbarMenu = [
  {
    key: "home",
    title: "Ana Sayfa",
    icon: HomeIcon,
    path: "/",
  },
  {
    key: "myCart",
    title: "Sepetim",
    icon: CartShoppingIcon,
    path: "/sepetim",
  },
  {
    key: "myCars",
    title: "Araçlarım",
    icon: CarIcon,
    path: "/araclarim",
  },
  {
    key: "profile",
    title: "Profil",
    icon: UserIcon,
    path: "",
  },
];
