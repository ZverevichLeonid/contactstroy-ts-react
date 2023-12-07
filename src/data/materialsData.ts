import sand from "../assets/images/materials/sand.png";
import crushedGranitestone from "../assets/images/materials/crushed-granitestone.png";
import crushedSlagstone from "../assets/images/materials/crushed-slagstone.png";
import dolomiteCrushedStone from "../assets/images/materials/dolomite-crushed-stone.png";
import crushedLimestone from "../assets/images/materials/crushed-limestone.png";
import sandAndGravel from "../assets/images/materials/sand-and-gravel.png";
import crushedStoneSAndMixture from "../assets/images/materials/crushed-stone-sand-mixture.png";

export interface IMaterialData {
  id: string;
  type: "material";
  title: string;
  name: string;
  previewImg: string;
  slug: string;
  characteristics: ICharacteristics[];
}
interface ICharacteristics {
  characteristic: string;
  value: string;
}
export const materialsData: IMaterialData[] = [
  {
    id: "pesok",
    type: "material",
    title: "Доставка песка",
    name: "ПЕСОК",
    previewImg: sand,
    slug: "/nerudnie_materiali/pesok",
    characteristics: [
      {
        characteristic: "Горный",
        value: "от 400 руб./м3",
      },
      {
        characteristic: "Речной",
        value: "от 900 руб./м3",
      },
    ],
  },
  {
    id: "sheben_granitniy",
    type: "material",
    title: "Доставка гранитного щебня",
    name: "ЩЕБЕНЬ ГРАНИТНЫЙ",
    previewImg: crushedGranitestone,
    slug: "/nerudnie_materiali/sheben_granitniy",
    characteristics: [
      {
        characteristic: "фр. 5-10",
        value: "от 2300 руб./т",
      },
      {
        characteristic: "фр. 5-20",
        value: "от 3000 руб./т",
      },
      {
        characteristic: "фр. 20-40",
        value: "от 3000 руб./т",
      },
      {
        characteristic: "фр. 40-70",
        value: "от 3000 руб./т",
      },
      {
        characteristic: "фр. 70-150",
        value: "от 2900 руб./т",
      },
      {
        characteristic: "фр. 3-10",
        value: "от 2500 руб./т",
      },
    ],
  },
  {
    id: "sheben_shlakoviy",
    type: "material",
    title: "Доставка шлакового щебня",
    name: "ЩЕБЕНЬ ШЛАКОВЫЙ",
    previewImg: crushedSlagstone,
    slug: "/nerudnie_materiali/sheben_shlakoviy",
    characteristics: [
      {
        characteristic: "фр. 5-20",
        value: "от 1550 руб./м3",
      },
      {
        characteristic: "фр. 20-40",
        value: "от 1600 руб./м3",
      },
      {
        characteristic: "фр. 40-70",
        value: "от 1600 руб./м3",
      },
    ],
  },
  {
    id: "sheben_dolomitoviy",
    type: "material",
    title: "Доставка доломитового щебня",
    name: "ЩЕБЕНЬ ДОЛОМИТОВЫЙ",
    previewImg: dolomiteCrushedStone,
    slug: "/nerudnie_materiali/sheben_dolomitoviy",
    characteristics: [
      {
        characteristic: "фр. 5-20",
        value: "от 900 руб./м3",
      },
      {
        characteristic: "фр. 20-40",
        value: "от 900 руб./м3",
      },
      {
        characteristic: "фр. 40-70",
        value: "от 900 руб./м3",
      },
    ],
  },
  {
    id: "sheben_izvestnyakoviy",
    type: "material",
    title: "Доставка известнякового щебня",
    name: "ЩЕБЕНЬ ИЗВЕСТНЯКОВЫЙ",
    previewImg: crushedLimestone,
    slug: "/nerudnie_materiali/sheben_izvestnyakoviy",
    characteristics: [
      {
        characteristic: "фр. 5-20",
        value: "от 900 руб./м3",
      },
      {
        characteristic: "фр. 20-40",
        value: "от 950 руб./м3",
      },
      {
        characteristic: "фр. 40-70",
        value: "от 950 руб./м3",
      },
      {
        characteristic: "фр. 70-120",
        value: "от 950 руб./м3",
      },
    ],
  },
  {
    id: "pgs",
    type: "material",
    title: "Доставка песчано-гравийной смеси",
    name: "ПЕСЧАНО-ГРАВИЙНАЯ СМЕСЬ",
    previewImg: sandAndGravel,
    slug: "/nerudnie_materiali/pgs",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "от 700 руб./м3",
      },
    ],
  },
  {
    id: "shps",
    type: "material",
    title: "Доставка щебеночно-песчаной смеси",
    name: "ЩЕБЕНОЧНО-ПЕСЧАНАЯ СМЕСЬ",
    previewImg: crushedStoneSAndMixture,
    slug: "/nerudnie_materiali/shps",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "от 900 руб./м3",
      },
    ],
  },
];
