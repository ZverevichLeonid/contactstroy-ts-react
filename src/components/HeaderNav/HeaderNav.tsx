import React, { useState } from "react";
import { tabsData } from "../../data/tabsData";
import { Link } from "react-router-dom";
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
                <Link to={data.tabSlug} className="nav__item-link">
                  {data.tabTitle}
                </Link>
              </li>
            );
          })}
          <li className="nav__item">
            <Link to={"/about"} className="nav__item-link">
              О Компании
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/contacts"} className="nav__item-link">
              Контакты
            </Link>
          </li>
          <div className={isTabActive ? "tab-menu active" : "tab-menu"}>
            <div className="container">
              <div className="tab-menu__grid">
                {tabsData[activeTab].tabItems.map((tab) => {
                  return (
                    <Link
                      onClick={handleTabClose}
                      to={tab.slug}
                      state={{ id: tab.id, type: tab.type }}
                      key={tab.name}
                      className="tab-menu__grid-item"
                    >
                      <img
                        className="tab-menu__img"
                        src={tab.img}
                        alt={tab.name}
                      />
                      {tab.name}
                    </Link>
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
