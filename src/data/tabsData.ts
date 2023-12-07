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
  tabSlug: string;
  tabItems: {
    id: string;
    type: "material" | "techniks" | "uslugi";
    name: string;
    img: string;
    slug: string;
  }[];
}

export const tabsData: ITabData[] = [
  {
    tabTitle: "нерудные материалы",
    tabSlug: "/nerudnie_materiali",
    tabItems: [
      {
        id: "sheben_izvestnyakoviy",
        type: "material",
        name: "Щебень известняковый",
        img: crushedLimestone,
        slug: "/nerudnie_materiali/sheben_izvestnyakoviy",
      },
      {
        id: "sheben_granitniy",
        type: "material",
        name: "Щебень гранитный",
        img: crushedGranitestone,
        slug: "/nerudnie_materiali/sheben_granitniy",
      },
      {
        id: "sheben_shlakoviy",
        type: "material",
        name: "Щебень шлаковый",
        img: crushedSlagstone,
        slug: "/nerudnie_materiali/sheben_shlakoviy",
      },
      {
        id: "sheben_dolomitoviy",
        type: "material",
        name: "Щебень доломитовый",
        img: dolomiteCrushedStone,
        slug: "/nerudnie_materiali/sheben_dolomitoviy",
      },
      {
        id: "pesok",
        type: "material",
        name: "Песок",
        img: sand,
        slug: "/nerudnie_materiali/pesok",
      },
      {
        id: "pgs",
        type: "material",
        name: "Песчано-гравийная смесь",
        img: sandAndGravel,
        slug: "/nerudnie_materiali/pgs",
      },
      {
        id: "shps",
        type: "material",
        name: "Щебеночно-песчаная смесь",
        img: crushedStoneSAndMixture,
        slug: "/nerudnie_materiali/shps",
      },
    ],
  },
  {
    tabTitle: "Аренда техники",
    tabSlug: "/technika",
    tabItems: [
      {
        id: "arenda_avtokran",
        type: "techniks",
        name: "Автокран",
        img: truckСrane,
        slug: "/technika/arenda_avtokran",
      },
      {
        id: "arenda_avtovishka",
        type: "techniks",
        name: "Автовышка",
        img: aerialPlatform,
        slug: "/technika/arenda_avtovishka",
      },
      {
        id: "arenda_manipulator",
        type: "techniks",
        name: "Манипулятор",
        img: manipulator,
        slug: "/technika/arenda_manipulator",
      },
      {
        id: "arenda_ekskavator",
        type: "techniks",
        name: "Эскаватор",
        img: excavator,
        slug: "/technika/arenda_ekskavator",
      },
      {
        id: "arenda_buldozer",
        type: "techniks",
        name: "Бульдозер",
        img: bulldozer,
        slug: "/technika/arenda_buldozer",
      },
      {
        id: "arenda_pogruzchik",
        type: "techniks",
        name: "Фронтальный погрузчик",
        img: frontloader,
        slug: "/technika/arenda_pogruzchik",
      },
      {
        id: "arenda_trala",
        type: "techniks",
        name: "Трал",
        img: trawl,
        slug: "/technika/arenda_trala",
      },
      {
        id: "arenda_samosval",
        type: "techniks",
        name: "Самосвал",
        img: dumptruck,
        slug: "/technika/arenda_samosval",
      },
    ],
  },
  {
    tabTitle: "Услуги",
    tabSlug: "/uslugi",
    tabItems: [
      {
        id: "vyivoz_musora",
        type: "uslugi",
        name: "Вывоз мусора",
        img: garbageRemoval,
        slug: "/uslugi/vyivoz_musora",
      },
      {
        id: "vyivoz_grunta",
        type: "uslugi",
        name: "Вывоз грунта",
        img: soilRemoval,
        slug: "/uslugi/vyivoz_grunta",
      },
      {
        id: "sipuchie_materiali",
        type: "uslugi",
        name: "Перевозка сыпучих материалов",
        img: ransportationOfBulkMaterials,
        slug: "/uslugi/sipuchie_materiali",
      },
      {
        id: "uborka_snega",
        type: "uslugi",
        name: "Уборка снега",
        img: snowRemoval,
        slug: "/uslugi/uborka_snega",
      },
    ],
  },
];
