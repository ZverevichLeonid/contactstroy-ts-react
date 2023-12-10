import React, { useState } from "react";
import "./itemdescription.scss";
import { FormMini } from "../../../FormMini/FormMini";
import { Modal } from "../../../Modal/Modal";
import "./responsive.scss";
import { GiConfirmed } from "react-icons/gi";
interface ItemDescriptionProps {
  type: "techniks" | "material" | "uslugi";
  title: string;
  description: string[];
}
interface SetTitleProps {
  title: string;
}
export const ItemDescription: React.FC<ItemDescriptionProps> = ({
  type,
  title,
  description,
}) => {
  const [active, setActive] = useState(false);
  const SetTitle: React.FC<SetTitleProps> = ({ title }) => {
    if (type === "techniks") {
      return (
        <h2>АРЕНДА {<span>{title}</span>} ПО&nbsp;ЦФО* И ЮЖНОМУ ОКРУГУ</h2>
      );
    }
    if (type === "material") {
      return (
        <h2>ДОСТАВКА {<span>{title}</span>} ПО&nbsp;ТУЛЕ И ТУЛЬСКОЙ ОБЛАСТИ</h2>
      );
    }
    if (type === "uslugi") {
      return <h2>{<span>{title}</span>} ПО&nbsp;ТУЛЕ И ТУЛЬСКОЙ ОБЛАСТИ</h2>;
    }
  };
  return (
    <section className="item-description">
      <div className="container">
        <div className="item-description__flex">
          <div className="item-description__box">
            <div className="item-description__title">
              <SetTitle title={title} />
            </div>
            <div className="item-description__text">
              {description.map((desc) => {
                return <p key={desc}>{desc}</p>;
              })}
              {type === "techniks" ? (
                <p>*Центральный федеральный округ</p>
              ) : null}
            </div>
          </div>
          <div className="item-description__form">
            <FormMini setActiveConfirmModal={setActive} />
          </div>
        </div>
        <div className="item-description__bg"></div>
        <Modal active={active} setActive={setActive}>
          <GiConfirmed color={"green"} size={40} />
          <span>Спасибо! Данные успешно отправлены.</span>
        </Modal>
      </div>
    </section>
  );
};
