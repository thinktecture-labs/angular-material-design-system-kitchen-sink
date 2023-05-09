import {Talk} from './talk.model';


export const TALK_MOCK_DATA_NG_DAYS: Talk[] = [
  {
    id: crypto.randomUUID(),
    title: "Angular Kickstart: von 0 auf 100",
    conference: "Angular Days 2023",
    startDate: '20.03.2023',
    endDate: '23.03.2023',
    location: "München",
    country: "DE",
    bannerImageSrc: "https://javascript-days.de/wp-content/uploads/2019/04/JSD19_Website_Subheader_2200x480_v1.jpg",
    tags: ["angular"],
    speakers: ["Chris", "Sascha"],
  },
  {
    id: crypto.randomUUID(),
    title: "3D im Web mit Babylon.js – Ihre Web-App in Szene gesetzt",
    conference: "Angular Days 2023",
    startDate: '20.03.2023',
    endDate: '23.03.2023',
    location: "München",
    country: "DE",
    bannerImageSrc: "https://javascript-days.de/wp-content/uploads/2019/04/JSD19_Website_Subheader_2200x480_v1.jpg",
    tags: ["angular"],
    speakers: ["Max"],
  },
  {
    id: crypto.randomUUID(),
    title: "@ngrx/component-store: Reaktives State-Management auf Komponenten-Ebene",
    conference: "Angular Days 2023",
    startDate: '20.03.2023',
    endDate: '23.03.2023',
    location: "München",
    country: "DE",
    bannerImageSrc: "https://javascript-days.de/wp-content/uploads/2019/04/JSD19_Website_Subheader_2200x480_v1.jpg",
    tags: ["angular"],
    speakers: ["Yannick"],
  },
  {
    id: crypto.randomUUID(),
    title: "Web Animations: Welcome to the jungle",
    conference: "Angular Days 2023",
    startDate: '20.03.2023',
    endDate: '23.03.2023',
    location: "München",
    country: "DE",
    bannerImageSrc: "https://javascript-days.de/wp-content/uploads/2019/04/JSD19_Website_Subheader_2200x480_v1.jpg",
    tags: ["angular"],
    speakers: ["Sascha"],
  },
]
export const TALK_MOCK_DATA_MD_DEV_DAYS: Talk[] = [
  {
    id: crypto.randomUUID(),
    title: "Cross-Plattform-Workshop: Progressive Web Apps mit Angular – in Action",
    conference: "MD-Dev-Days 2023",
    startDate: '08.05.2023',
    endDate: '10.05.2023',
    location: "Magdeburg",
    country: "DE",
    bannerImageSrc: "https://md-devdays.de/assets/Banner_LandingPage.jpg",
    tags: ["typescript", "crossplatform", "app-development"],
    speakers: ["Chris"],
  },
  {
    id: crypto.randomUUID(),
    title: "WebAssembly auf dem Server und in der Cloud mit Fermyon Spin",
    conference: "MD-Dev-Days 2023",
    startDate: '08.05.2023',
    endDate: '10.05.2023',
    location: "Magdeburg",
    country: "DE",
    bannerImageSrc: "https://md-devdays.de/assets/Banner_LandingPage.jpg",
    tags: ["cloud-development", "backend"],
    speakers: ["Thorsten"],
  },
  {
    id: crypto.randomUUID(),
    title: "Web Animations: so verleihen Sie Ihrer Web-App den letzten Schliff",
    conference: "MD-Dev-Days 2023",
    startDate: '08.05.2023',
    endDate: '10.05.2023',
    location: "Magdeburg",
    country: "DE",
    bannerImageSrc: "https://md-devdays.de/assets/Banner_LandingPage.jpg",
    tags: ["ui-ux", "css", "java-script"],
    speakers: ["Sascha"],
  },
  {
    id: crypto.randomUUID(),
    title: "Application Architecture – Angular Components richtig nutzen",
    conference: "MD-Dev-Days 2023",
    startDate: '08.05.2023',
    endDate: '10.05.2023',
    location: "Magdeburg",
    country: "DE",
    bannerImageSrc: "https://md-devdays.de/assets/Banner_LandingPage.jpg",
    tags: ["angular", "app-development", "frontend"],
    speakers: ["Sascha"],
  },
  {
    id: crypto.randomUUID(),
    title: "Progressive Web Apps: Cross-Plattform-Apps auf Desktopniveau",
    conference: "MD-Dev-Days 2023",
    startDate: '08.05.2023',
    endDate: '10.05.2023',
    location: "Magdeburg",
    country: "DE",
    bannerImageSrc: "https://md-devdays.de/assets/Banner_LandingPage.jpg",
    tags: ["typescript", "cross-platform", "app-development"],
    speakers: ["Sascha"],
  },
]
export const TALK_MOCK_DATA = TALK_MOCK_DATA_MD_DEV_DAYS;
