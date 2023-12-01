import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PreviewCard } from "../../PreviewCard/PreviewCard";
import { specialEquipmentData } from "../../../data/specialEquimpentData";
import { materialsData } from "../../../data/materialsData";
import { uslugiData } from "../../../data/uslugiData";
import { ISpecialEquipmentData } from "../../../data/specialEquimpentData";
import { IMaterialData } from "../../../data/materialsData";
import { IUslugiData } from "../../../data/uslugiData";
import "./allitemslist.scss";
export const AllItemsList: React.FC = () => {
  let location = useLocation();
  const [cardData, setCardData] = useState<
    ISpecialEquipmentData[] | IMaterialData[] | IUslugiData[]
  >();
  useEffect(() => {
    if (location.pathname === "/technika") {
      return setCardData(specialEquipmentData);
    }
    if (location.pathname === "/nerudnie_materiali") {
      return setCardData(materialsData);
    }
    if (location.pathname === "/uslugi") {
      return setCardData(uslugiData);
    }
  }, [location]);
  const SetTitle: React.FC = () => {
    if (location.pathname === "/technika") {
      return <h1>Спецтехника</h1>;
    }
    if (location.pathname === "/nerudnie_materiali") {
      return <h1>Нерудные материалы</h1>;
    }
    if (location.pathname === "/uslugi") {
      return <h1>Услуги</h1>;
    }
  };
  return (
    <section className="items">
      <div className="container">
        <div className="items__title">
          <SetTitle />
        </div>
        {location.pathname === "/nerudnie_materiali" ? (
          <div className="items__desc">
            <p>
              ДОСТАВКА НЕРУДНЫХ МАТЕРИАЛОВ ОСУЩЕСТВЛЯЕТСЯ ПРИ ЗАКАЗЕ ОТ 25 М3
            </p>
          </div>
        ) : null}
        <div className="items__list">
          {cardData &&
            cardData.map((item) => {
              return (
                <PreviewCard
                  key={item.name}
                  img={item.previewImg}
                  name={item.name}
                  id={item.id}
                  slug={item.slug}
                  type={item.type}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
