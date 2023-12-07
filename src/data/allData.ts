import sand from "../assets/images/materials/sand.png";
import crushedGranitestone from "../assets/images/materials/crushed-granitestone.png";
import crushedSlagstone from "../assets/images/materials/crushed-slagstone.png";
import dolomiteCrushedStone from "../assets/images/materials/dolomite-crushed-stone.png";
import crushedLimestone from "../assets/images/materials/crushed-limestone.png";
import sandAndGravel from "../assets/images/materials/sand-and-gravel.png";
import crushedStoneSAndMixture from "../assets/images/materials/crushed-stone-sand-mixture.png";

import truckСranePreview from "../assets/images/special-equipment/truckcrane/light/1.jpg";
import truckСraneLight from "../assets/images/special-equipment/truckcrane/light/1.jpg";
import truckСraneMedium from "../assets/images/special-equipment/truckcrane/medium/1.jpeg";
import truckСraneHeavy from "../assets/images/special-equipment/truckcrane/heavy/1.jpeg";

import aerialPlatformPreview from "../assets/images/special-equipment/aerial-platform/cranked/1.jpeg";
import aerialPlatformTelescopic from "../assets/images/special-equipment/aerial-platform/telescopic/1.jpg";
import aerialPlatformCranked from "../assets/images/special-equipment/aerial-platform/cranked/1.jpeg";

import bulldozerPreview from "../assets/images/special-equipment/bulldozer/1.jpeg";
import bulldozer from "../assets/images/special-equipment/bulldozer/1.jpeg";

import dumptruckPreview from "../assets/images/special-equipment/dumptruck/1.png";
import dumptruck from "../assets/images/special-equipment/dumptruck/1.png";

import manipulatorPreview from "../assets/images/special-equipment/manipulator/1.jpg";
import manipulator from "../assets/images/special-equipment/manipulator/1.jpg";

import frontloaderPreview from "../assets/images/special-equipment/frontloader/1.jpg";
import frontloader from "../assets/images/special-equipment/frontloader/1.jpg";

import excavatorPreview from "../assets/images/special-equipment/excavator/crawler/1.jpeg";
import excavatorCrawler from "../assets/images/special-equipment/excavator/crawler/1.jpeg";
import excavatorWheeled from "../assets/images/special-equipment/excavator/wheeled/1.jpeg";

import trawlPreview from "../assets/images/special-equipment/trawl/1.jpg";
import trawl from "../assets/images/special-equipment/trawl/1.jpg";

import trashIMG from "../assets/images/uslugi/musor.png";
import gruntIMG from "../assets/images/uslugi/grunt.jpg";
import bulkIMG from "../assets/images/uslugi/bulk_materials.png";
import snowIMG from "../assets/images/uslugi/sneg_1.jpg";

export interface IAllData {
  title: string;
  name: string;
  previewImg: string;
  id: string;
  type: "techniks" | "material" | "uslugi";
  slug: string;
  types?: IType[];
  characteristics?: ICharacteristics[];
}
interface IType {
  typeName: string;
  typeIMG: string;
  characteristics: ICharacteristic[];
}
interface ICharacteristic {
  characteristicTitle: string;
  characteristicInfo: ICharacteristicInfo[];
}
interface ICharacteristicInfo {
  characteristic: string;
  value: string;
}
interface ICharacteristics {
  characteristic: string;
  value: string;
}
export const allData: IAllData[] = [
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
  {
    title: "Аренда автокрана",
    name: "АВТОКРАН",
    previewImg: truckСranePreview,
    id: "arenda_avtokran",
    type: "techniks",
    slug: "/technika/arenda_avtokran",
    types: [
      {
        typeName: "лёгкие",
        typeIMG: truckСraneLight,
        characteristics: [
          {
            characteristicTitle:
              "Грузоподъемность 25 ТОНН Вылет стрелы 22, 28, 31, 40 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1800 до 3000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 14500 до 24000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 32 ТОННЫ Вылет стрелы 33, 40 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 до 3500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 до 28000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 40 ТОНН Вылет стрелы 33, 40 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 3500 до 5000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 28000 до 32000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 50 ТОНН Вылет стрелы 34, 44 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 4000 до 5000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 32000 до 40000 руб.",
              },
            ],
          },
        ],
      },
      {
        typeName: "средние",
        typeIMG: truckСraneMedium,
        characteristics: [
          {
            characteristicTitle:
              "Грузоподъемность 70 ТОНН Вылет стрелы 44 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 6000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 48000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 80 ТОНН Вылет стрелы 52 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 8000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 64000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 100 ТОНН Вылет стрелы 52 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 10000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 80000 руб.",
              },
            ],
          },
        ],
      },
      {
        typeName: "тяжёлые",
        typeIMG: truckСraneHeavy,
        characteristics: [
          {
            characteristicTitle:
              "Грузоподъемность 160 ТОНН Вылет стрелы 64 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 200 ТОНН Вылет стрелы 68 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 300 ТОНН Вылет стрелы 80 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
          {
            characteristicTitle:
              "Грузоподъемность 350 ТОНН Вылет стрелы 80 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Аренда автовышки",
    name: "АВТОВЫШКА",
    previewImg: aerialPlatformPreview,
    id: "arenda_avtovishka",
    type: "techniks",
    slug: "/technika/arenda_avtovishka",
    types: [
      {
        typeName: "телескопические",
        typeIMG: aerialPlatformTelescopic,
        characteristics: [
          {
            characteristicTitle: "Высота подъема 18 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 12000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 22 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1700 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 13600 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 28 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 36 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 45 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2800 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 22400 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 60 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 70 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
        ],
      },
      {
        typeName: "коленчатые",
        typeIMG: aerialPlatformCranked,
        characteristics: [
          {
            characteristicTitle: "Высота подъема 22 метра",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1700 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 13600 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Высота подъема 28 метров",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Аренда бульдозера",
    name: "БУЛЬДОЗЕР",
    previewImg: bulldozerPreview,
    id: "arenda_buldozer",
    type: "techniks",
    slug: "/technika/arenda_buldozer",
    types: [
      {
        typeName: "бульдозер",
        typeIMG: bulldozer,
        characteristics: [
          {
            characteristicTitle: "Рабочий вес 16 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Рабочий вес 24 тонны",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 3000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 24000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Рабочий вес 36 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 3500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 28000 руб.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Аренда самосвала",
    name: "САМОСВАЛ",
    previewImg: dumptruckPreview,
    id: "arenda_samosval",
    type: "techniks",
    slug: "/technika/arenda_samosval",
    types: [
      {
        typeName: "самосвал",
        typeIMG: dumptruck,
        characteristics: [
          {
            characteristicTitle: "Объем кузова 10 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1400 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 11200 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем кузова 20 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем кузова 30 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Аренда манипулятора",
    name: "МАНИПУЛЯТОР",
    previewImg: manipulatorPreview,
    id: "arenda_manipulator",
    type: "techniks",
    slug: "/technika/arenda_manipulator",
    types: [
      {
        typeName: "манипулятор",
        typeIMG: manipulator,
        characteristics: [
          {
            characteristicTitle:
              "Вылет стрелы 11 метров, грузоподъемность 3 тонны",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 12000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Вылет стрелы 14 метров, грузоподъемность 5 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1800 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 14400 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Вылет стрелы 21 метр, грузоподъемность 7 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
          {
            characteristicTitle:
              "Вездеход Вылет стрелы 21 метр, грузоподъемность 7 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Аренда погрузчика",
    name: "ПОГРУЗЧИК",
    previewImg: frontloaderPreview,
    id: "arenda_pogruzchik",
    type: "techniks",
    slug: "/technika/arenda_pogruzchik",
    types: [
      {
        typeName: "фронтальный погрузчик",
        typeIMG: frontloader,
        characteristics: [
          {
            characteristicTitle: "Объем ковша 2 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 16000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем ковша 3 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2300 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 18400 руб.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Аренда экскаватора",
    name: "ЭКСКАВАТОР",
    previewImg: excavatorPreview,
    id: "arenda_ekskavator",
    type: "techniks",
    slug: "/technika/arenda_ekskavator",
    types: [
      {
        typeName: "гусеничные",
        typeIMG: excavatorCrawler,
        characteristics: [
          {
            characteristicTitle: "Объем ковша 1 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем ковша 1,2 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2800 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 22400 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Объем ковша 1,5 м3",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 3000 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 24000 руб.",
              },
            ],
          },
        ],
      },
      {
        typeName: "колёсные",
        typeIMG: excavatorWheeled,
        characteristics: [
          {
            characteristicTitle: "Экскаватор-погрузчик",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 1800 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 14400 руб.",
              },
            ],
          },
          {
            characteristicTitle: "Полноповоротный колесный экскаватор",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "от 2500 руб.",
              },
              {
                characteristic: "1 смена:",
                value: "от 20000 руб.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Аренда трала",
    name: "ТРАЛ",
    previewImg: trawlPreview,
    id: "arenda_trala",
    type: "techniks",
    slug: "/technika/arenda_trala",
    types: [
      {
        typeName: "трал",
        typeIMG: trawl,
        characteristics: [
          {
            characteristicTitle: "Низкорамный раздвижной, г/п от 45 до 75 тонн",
            characteristicInfo: [
              {
                characteristic: "1 час:",
                value: "по согласованию",
              },
              {
                characteristic: "1 смена:",
                value: "по согласованию",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "vyivoz_musora",
    type: "uslugi",
    title: "Вывоз строительного мусора",
    name: "Вывоз строительного мусора",
    previewImg: trashIMG,
    slug: "/uslugi/vyivoz_musora",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "по согласованию",
      },
    ],
  },
  {
    id: "vyivoz_grunta",
    type: "uslugi",
    title: "Вывоз грунта",
    name: "Вывоз грунта",
    previewImg: gruntIMG,
    slug: "/uslugi/vyivoz_grunta",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "по согласованию",
      },
    ],
  },
  {
    id: "sipuchie_materiali",
    type: "uslugi",
    title: "Перевозка сыпучих материалов",
    name: "Перевозка сыпучих материалов",
    previewImg: bulkIMG,
    slug: "/uslugi/sipuchie_materiali",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "по согласованию",
      },
    ],
  },
  {
    id: "uborka_snega",
    type: "uslugi",
    title: "Уборка снега",
    name: "Уборка снега",
    previewImg: snowIMG,
    slug: "/uslugi/uborka_snega",
    characteristics: [
      {
        characteristic: "Стоимость",
        value: "по согласованию",
      },
    ],
  },
];

export const itemDescriptionData = [
  {
    id: "pesok",
    title: "ПЕСКА",
    description: [
      "Мы предлагаем услугу доставки горного и речного песка по Туле и Тульской области.",
      "Горный и речной песок - это универсальный строительный материал, который используется для создания фундаментов, бетонных работ, стяжек, отделки и многих других проектов. Мы предоставляем только высококачественный песок из проверенных источников, который соответствует всем стандартам качества и безопасности. Наша услуга доставки горного и речного песка позволит вам получить нужное количество материала в любое время и в любом месте",
    ],
  },
  {
    id: "sheben_granitniy",
    title: "ГРАНИТНОГО ЩЕБНЯ",
    description: [
      "Мы рады предложить вам услугу доставки гранитного щебня по Туле и Тульской области.",
      "Гранитный щебень — это высококачественный строительный материал, который используется для создания дорог, зданий, мостов и многих других проектов. Мы предоставляем только высококачественный гранитный щебень из проверенных карьеров, который соответствует всем стандартам качества. Мы предлагаем быструю и надежную доставку гранитного щебня по Туле и Тульской области, чтобы удовлетворить нужды наших клиентов.",
    ],
  },
  {
    id: "sheben_shlakoviy",
    title: "ШЛАКОВОГО ЩЕБНЯ",
    description: [
      "Мы предлагаем услугу доставки шлакового щебня по Туле и Тульской области.",
      "Шлаковый щебень - это экономически выгодный и универсальный строительный материал, который широко используется для создания оснований для дорог, зданий, парковок, террас и многих других объектов. Наш шлаковый щебень соответствует всем необходимым стандартам и обладает высокой прочностью и долговечностью. Мы предоставляем доставку в любых объемах и точно в срок.",
    ],
  },
  {
    id: "sheben_dolomitoviy",
    title: "ДОЛОМИТОВОГО ЩЕБНЯ",
    description: [
      "Мы рады предложить вам услугу доставки доломитового щебня по Туле и Тульской области.",
      "Доломитовый щебень - это высококачественный и уникальный строительный материал, который обладает высокой прочностью и долговечностью. Он широко используется для строительства основания дорог, парковок, зданий и многих других объектов.",
      "Наш доломитовый щебень имеет высокую прочность и соответствует всем необходимым стандартам качества. Мы предоставляем услугу доставки доломитового щебня на вашу строительную площадку в Туле и Тульской области, чтобы помочь вам выполнить все ваши строительные задачи.",
    ],
  },
  {
    id: "sheben_izvestnyakoviy",
    title: "ИЗВЕСТНЯКОВОГО ЩЕБНЯ",
    description: [
      "Мы предлагаем услугу доставки известнякового щебня по Туле и Тульской области.",
      "Известняковый щебень используется для строительства дорог, зданий, мостов и многих других проектов, которые требуют высококачественных строительных материалов. Мы предоставляем только высококачественный известняковый щебень из проверенных карьеров, который соответствует всем стандартам качества.",
      "Мы обеспечиваем быструю доставку известнякового щебня в любую точку Тулы и Тульской области, и имеем широкий выбор транспортных средств для доставки нашей продукции. Наши специалисты всегда готовы помочь в выборе оптимального варианта для доставки ваших материалов.",
    ],
  },
  {
    id: "pgs",
    title: "ПЕСЧАНО-ГРАВИЙНОЙ СМЕСИ",
    description: [
      "Мы рады предложить вам услугу доставки песчано-гравийной смеси по Туле и Тульской области.",
      "Песчано-гравийная смесь - это универсальный строительный материал, который широко используется для создания фундаментов, бетонных работ, стяжек, отделки и многих других проектов. Наша песчано-гравийная смесь состоит из высококачественных составляющих, которые соответствуют всем необходимым стандартам и требованиям безопасности. Мы гарантируем быструю и надежную доставку песчано-гравийной смеси в любую точку Тулы и Тульской области.",
    ],
  },
  {
    id: "shps",
    title: "ЩЕБЕНОЧНО-ПЕСЧАНОЙ СМЕСИ",
    description: [
      "Мы предлагаем услугу доставки щебеночно-песчаной смеси по Туле и Тульской области.",
      "Щебеночно-песчаная смесь - это универсальный строительный материал, который состоит из щебня и песка и широко используется для создания фундаментов, бетонных работ, стяжек, отделки и многих других проектов. Наша щебеночно-песчаная смесь соответствует всем необходимым стандартам и обладает высокой прочностью и долговечностью.",
    ],
  },
  {
    id: "arenda_avtokran",
    title: "АВТОКРАНА",
    description: [
      "Наша компания предлагает широкий выбор автокранов различной грузоподъемности для решения любых задач, связанных с подъемными работами. Наши специалисты обладают большим опытом работы с автокранами и всегда готовы помочь в выборе оптимального варианта для вашего проекта.",
      "Мы гарантируем высокое качество обслуживания и безопасность при выполнении подъемных работ. Наша техника всегда проходит своевременное техническое обслуживание, что позволяет избежать возможных поломок в процессе работы.",
      "Сотрудничество с нами - это уверенность в том, что задача будет выполнена качественно и в срок. Мы всегда готовы ответить на все ваши вопросы и разработать индивидуальное предложение для вашего проекта.",
      "Свяжитесь с нами, что бы арендовать автокран и решить ваши подъемные задачи быстро и эффективно.",
    ],
  },
  {
    id: "arenda_avtovishka",
    title: "АВТОВЫШКИ",
    description: [
      "Мы рады предложить вам услугу аренды автовышки для выполнения различных задач, связанных с подъемными работами.",
      "У нас есть опытные специалисты и большой выбор автовышек различного типа и высоты подъема, чтобы удовлетворить любые требования и потребности наших клиентов. Будь то ремонт зданий или уборка деревьев, наши автовышки гарантированно помогут вам достичь нужной высоты и выполнить задание быстро и эффективно.",
      "Мы также предлагаем отличный сервис и гибкую ценовую политику, чтобы удовлетворить все ваши требования в области аренды автовышек. Свяжитесь с нами сегодня, что бы узнать больше о нашей услуге и получить квалифицированную помощь в выборе автовышки для вашего проекта.",
    ],
  },
  {
    id: "arenda_buldozer",
    title: "БУЛЬДОЗЕРА",
    description: [
      "Мы можем предложить вам широкий выбор бульдозеров различной грузоподъемности, чтобы помочь в выполнении самых сложных задач. Бульдозеры предназначены для транспортировки и перемещения больших объемов грунта или других материалов, и могут использоваться для строительства дорог, каналов, площадей и многого другого.",
      "Наши специалисты обладают большим опытом работы с бульдозерами и всегда готовы к помощи в выборе оптимального варианта для вашего проекта. Мы гарантируем вам высокое качество обслуживания и своевременную доставку нашей техники.",
    ],
  },
  {
    id: "arenda_samosval",
    title: "САМОСВАЛА",
    description: [
      "Мы рады предложить вам услугу аренды самосвала для решения различных задач по перевозке грузов.",
      "Наши самосвалы обладают высокой грузоподъемностью и проходимостью, что позволяет выполнить задачи быстро и эффективно. Они могут использоваться для перевозки грузов на строительных площадках, в карьерах, на утилизационных площадках и многих других местах. Мы предлагаем различные варианты самосвалов с учетом потребностей наших клиентов.",
    ],
  },
  {
    id: "arenda_manipulator",
    title: "МАНИПУЛЯТОРА",
    description: [
      "Мы предлагаем услугу аренды манипулятора, и мы рады помочь вам решить задачи по подъему и перемещению грузов.",
      "Наши манипуляторы обладают большой грузоподъемностью и могут быстро и легко перемещать грузы с одного места на другое. Они могут использоваться для подъема и перемещения различных грузов, включая контейнеры, строительные материалы и тяжелые предметы.",
    ],
  },
  {
    id: "arenda_pogruzchik",
    title: "ФРОНТАЛЬНОГО ПОГРУЗЧИКА",
    description: [
      "Мы рады предложить вам услугу аренды фронтального погрузчика для решения различных задач погрузки и разгрузки товаров.",
      "Наши фронтальные погрузчики обладают высокой грузоподъемностью и производительностью, что позволяет выполнить задачи быстро и эффективно. Объем ковша наших погрузчиков различается, чтобы удовлетворить любые требования и потребности наших клиентов. Они могут использоваться для погрузки и выгрузки грузов на складах, в портах, на строительных площадках и многих других местах. Если вам нужна помощь в подборе оптимального погрузчика для вашего проекта, наши специалисты всегда рады помочь вам с выбором.",
    ],
  },
  {
    id: "arenda_ekskavator",
    title: "ЭКСКАВАТОРА",
    description: [
      "Мы рады предложить вам услугу аренды экскаватора для выполнения различных задач, таких как земляные работы, дорожные работы, строительство и многих других.",
      "У нас есть широкий выбор экскаваторов гусеничных и колесных, чтобы удовлетворить любые требования и потребности наших клиентов. Наши экскаваторы подходят для работ любой сложности и обладают высокой производительностью. Наши опытные специалисты всегда готовы помочь вам выбрать оптимальный вариант экскаватора для вашего проекта и предоставить вам подробную консультацию по его использованию. С нами вы можете быть уверены в качестве оказываемых услуг и надежности оборудования.",
    ],
  },
  {
    id: "arenda_trala",
    title: "ТРАЛА",
    description: [
      "Мы рады предложить вам услугу аренды трала для перевозки различных грузов.",
      "Тралы — это транспортные средства, которые разработаны специально для перевозки грузов больших размеров и веса, которые не могут быть перевезены на обычных грузовых автомобилях. Наши тралы оснащены всем необходимым оборудованием, таким как страховочные приспособления и системы фиксации груза, чтобы груз был перевезен безопасно и надежно.",
      "Мы предлагаем аренду тралов различной грузоподъемности, чтобы удовлетворить потребности наших клиентов. Обратитесь к нам, и мы поможем вам подобрать оптимальный вариант для выполнения ваших задач.",
    ],
  },
  {
    id: "vyivoz_musora",
    title: "ВЫВОЗ СТРОИТЕЛЬНОГО МУСОРА",
    description: [
      "Мы рады предложить вам услугу вывоза строительного мусора по Туле и Тульской области.",
      "Строительные работы обычно сопровождаются большим количеством мусора и отходов. Наша команда профессионалов готова взять на себя задачу по вывозу и утилизации строительного мусора с вашей стройплощадки. Мы оснащены специализированной техникой и контейнерами различного размера, чтобы обеспечить эффективный и безопасный вывоз строительного мусора. Мы гарантируем, что мусор будет утилизирован в соответствии с экологическими нормами и требованиями.",
    ],
  },
  {
    id: "vyivoz_grunta",
    title: "ВЫВОЗ ГРУНТА",
    description: [
      "Мы предлагаем услугу вывоза грунта по Туле и Тульской области.",
      "Вы не знаете куда деть землю после земляных работ на вашем участке? Наша компания готова провести вывоз грунта круглосуточно! Мы обладаем большим опытом работы с различными видами грунта, и предлагаем профессиональный вывоз грунта с использованием специализированной техники.",
    ],
  },
  {
    id: "sipuchie_materiali",
    title: "ПЕРЕВОЗКА СЫПУЧИХ МАТЕРИАЛОВ",
    description: [
      "Мы предлагаем услугу по перевозке сыпучих материалов по Туле и Тульской области.",
      "Независимо от того, нужно вам доставить песок, щебень, грунт или другие сыпучие материалы, наша команда готова вам помочь. Мы осуществляем перевозку сыпучих материалов с использованием специальных грузовых машин, обеспечивающих безопасность и сохранность груза во время транспортировки. Наш профессиональный персонал гарантирует своевременную и надежную доставку сыпучих материалов в указанные вами места.",
    ],
  },
  {
    id: "uborka_snega",
    title: "УБОРКА СНЕГА",
    description: [
      "Мы предлагаем услугу уборки снега в Туле и Тульской области.",
      "Наша команда специалистов готова взять на себя тяжелую задачу по очистке вашей территории от снега. Мы оснащены специализированной техникой и инструментами, чтобы обеспечить эффективную и безопасную уборку снега на дорогах, тротуарах, парковках и других общественных или частных территориях.",
    ],
  },
];
