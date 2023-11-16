import crushedLimestone from "../assets/images/tabImages/materials/crushed-limestone.png";
import crushedGranitestone from "../assets/images/tabImages/materials/crushed-granitestone.png";
import crushedSlagstone from "../assets/images/tabImages/materials/crushed-slagstone.png";
import dolomiteCrushedStone from "../assets/images/tabImages/materials/dolomite-crushed-stone.png";
import sand from "../assets/images/tabImages/materials/sand.png";
import sandAndGravel from "../assets/images/tabImages/materials/sand-and-gravel.png";
import crushedStoneSAndMixture from "../assets/images/tabImages/materials/crushed-stone-sand-mixture.png";

import truckСrane from "../assets/images/tabImages/equipment-rental/truckcrane.png";
import aerialPlatform from "../assets/images/tabImages/equipment-rental/aerial-platform.png";
import manipulator from "../assets/images/tabImages/equipment-rental/manipulator.png";
import excavator from "../assets/images/tabImages/equipment-rental/excavator.png";
import bulldozer from "../assets/images/tabImages/equipment-rental/bulldozer.png";
import trawl from "../assets/images/tabImages/equipment-rental/trawl.png";
import frontloader from "../assets/images/tabImages/equipment-rental/frontloader.png";
import dumptruck from "../assets/images/tabImages/equipment-rental/dumptruck.png";

import garbageRemoval from "../assets/images/tabImages/services/garbage-removal.png";
import soilRemoval from "../assets/images/tabImages/services/soil-removal.png";
import ransportationOfBulkMaterials from "../assets/images/tabImages/services/transportation-of-bulk-materials.png";
import snowRemoval from "../assets/images/tabImages/services/snow-removal.png";

interface ITabData {
  tabTitle: string;
  tabItems: {
    name: string;
    img: string;
  }[];
}

export const tabsData: ITabData[] = [
  {
    tabTitle: "нерудные материалы",
    tabItems: [
      {
        name: "Щебень известняковый",
        img: crushedLimestone,
      },
      {
        name: "Щебень гранитный",
        img: crushedGranitestone,
      },
      {
        name: "Щебень шлаковый",
        img: crushedSlagstone,
      },
      {
        name: "Щебень доломитовый",
        img: dolomiteCrushedStone,
      },
      {
        name: "Песок",
        img: sand,
      },
      {
        name: "Песчано-гравийная смесь",
        img: sandAndGravel,
      },
      {
        name: "Щебеночно-песчаная смесь",
        img: crushedStoneSAndMixture,
      },
    ],
  },
  {
    tabTitle: "Аренда техники",
    tabItems: [
      {
        name: "Автокран",
        img: truckСrane,
      },
      {
        name: "Автовышка",
        img: aerialPlatform,
      },
      {
        name: "Манипулятор",
        img: manipulator,
      },
      {
        name: "Эскаватор",
        img: excavator,
      },
      {
        name: "Бульдозер",
        img: bulldozer,
      },
      {
        name: "Фронтальный погрузчик",
        img: frontloader,
      },
      {
        name: "Трал",
        img: trawl,
      },
      {
        name: "Самосвал",
        img: dumptruck,
      },
    ],
  },
  {
    tabTitle: "Услуги",
    tabItems: [
      {
        name: "Вывоз мусора",
        img: garbageRemoval,
      },
      {
        name: "Вывоз грунта",
        img: soilRemoval,
      },
      {
        name: "Перевозка сыпучих материалов",
        img: ransportationOfBulkMaterials,
      },
      {
        name: "Уборка снега",
        img: snowRemoval,
      },
    ],
  },
];
