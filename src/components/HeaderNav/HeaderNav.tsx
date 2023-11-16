import React, { useState } from "react";
import "./headernav.scss";
import { tabsData } from "../../data/tabsData";
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
