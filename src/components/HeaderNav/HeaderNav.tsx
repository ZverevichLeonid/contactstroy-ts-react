import React, { useEffect, useState } from "react";
import "./headernav.scss";
export const HeaderNav: React.FC = () => {
  const [isTabActive, setIsTabActive] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  function handleTabShow(tabIndex: number) {
    setIsTabActive(true);
    setActiveTab(tabIndex);
  }

  function handleTabClose() {
    setIsTabActive(false);
  }

  console.log(activeTab);
  interface ITabData {
    tabTitle: string;
    tabItems: {
      name: string;
      img: string;
    }[];
  }

  const tabsData: ITabData[] = [
    {
      tabTitle: "нерудные материалы",
      tabItems: [
        {
          name: "Щебень известняковый",
          img: "/images/tabImages/non-metallic-materials/crushed-limestone.png",
        },
        {
          name: "Щебень гранитный",
          img: "/images/tabImages/non-metallic-materials/crushed-granitestone.png",
        },
        {
          name: "Щебень шлаковый",
          img: "/images/tabImages/non-metallic-materials/crushed-slagstone.png",
        },
        {
          name: "Щебень доломитовый",
          img: "/images/tabImages/non-metallic-materials/dolomite-crushed-stone.png",
        },
        {
          name: "Песок",
          img: "/images/tabImages/non-metallic-materials/sand.png",
        },
        {
          name: "Песчано-гравийная смесь",
          img: "/images/tabImages/non-metallic-materials/sand-and-gravel.png",
        },
        {
          name: "Щебеночно-песчаная смесь",
          img: "/images/tabImages/non-metallic-materials/crushed-stone-sand-mixture.png",
        },
      ],
    },
    {
      tabTitle: "Аренда техники",
      tabItems: [
        {
          name: "Автокран",
          img: "/images/tabImages/equipmentrental/truckcrane.png",
        },
        {
          name: "Автовышка",
          img: "/images/tabImages/equipmentrental/aerial-platform.png",
        },
        {
          name: "Манипулятор",
          img: "/images/tabImages/equipmentrental/manipulator.png",
        },
        {
          name: "Эскаватор",
          img: "/images/tabImages/equipmentrental/excavator.png",
        },
        {
          name: "Бульдозер",
          img: "/images/tabImages/equipmentrental/bulldozer.png",
        },
        {
          name: "Фронтальный погрузчик",
          img: "/images/tabImages/equipmentrental/frontloader.png",
        },
        {
          name: "Трал",
          img: "/images/tabImages/equipmentrental/trawl.png",
        },
        {
          name: "Самосвал",
          img: "/images/tabImages/equipmentrental/dumptruck.png",
        },
      ],
    },
    {
      tabTitle: "Услуги",
      tabItems: [
        {
          name: "Вывоз мусора",
          img: "/images/tabImages/services/garbage-removal.png",
        },
        {
          name: "Вывоз грунта",
          img: "/images/tabImages/services/soil-removal.png",
        },
        {
          name: "Перевозка сыпучих материалов",
          img: "/images/tabImages/services/transportation-of-bulk-materials.png",
        },
        {
          name: "Уборка снега",
          img: "/images/tabImages/services/snow-removal.png",
        },
      ],
    },
  ];

  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav__list" onMouseLeave={() => handleTabClose()}>
          {tabsData.map((data, tabIndex) => {
            return (
              <li
                key={tabIndex}
                onMouseEnter={() => handleTabShow(tabIndex)}
                className="nav__item"
              >
                <a className="nav__item-link">{data.tabTitle}</a>
              </li>
            );
          })}
          <li className="nav__item">
            <a className="nav__item-link" href="">
              О Компании
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item-link" href="">
              Контакты
            </a>
          </li>
          <div className={isTabActive ? "tab-menu active" : "tab-menu"}>
            <div className="container">
              <div className="tab-menu__grid">
                {tabsData[activeTab].tabItems.map((tab) => {
                  return (
                    <div className="tab-menu__grid-item">
                      <img
                        className="tab-menu__img"
                        src={tab.img}
                        alt={tab.name}
                      />
                      {tab.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};
