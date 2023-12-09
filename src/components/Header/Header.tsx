import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { Button } from "../Button/Button";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { FormMini } from "../FormMini/FormMini";
import { GiConfirmed } from "react-icons/gi";
import "./header.scss";
import "./responsive.scss";
export const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const [activeConfirmModal, setActiveConfirmModal] = useState(false);
  const [nav, setNav] = useState(false);
  useEffect(() => {
    if (activeConfirmModal) {
      setActive(false);
      setActiveConfirmModal(true);
    }
  }, [activeConfirmModal]);
  useEffect(() => {
    let root = document.getElementById("body");
    const inlineStyles = root!.style;
    if (nav) {
      inlineStyles.overflowY = "hidden";
    } else {
      inlineStyles.overflowY = "visible";
    }
  }, [nav]);
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <button
            className="mobile__btn"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? (
              <AiOutlineClose size={25} color="black" />
            ) : (
              <AiOutlineMenu size={25} color="black" />
            )}
          </button>
          <Link to={"/"} className="header__img">
            <img src={logo} alt="лого контакт-строй" />
          </Link>
          <div className="header__block">
            <div className="header__contacts">
              <div className="header__contacts-item">
                <AiOutlineMail color={"#4d4d4d"} size={35} />
                <a href="mailto:info@контакт-строй.рф" target="_blank">
                  info@контакт-строй.рф
                </a>
              </div>
              <div className="header__contacts-item">
                <FiMapPin color={"#4d4d4d"} size={35} />
                <span>г.Тула, пр-т Ленина, д. 157, оф 219</span>
              </div>
            </div>
            <div className="header__contacts">
              <div className="header__contacts-item">
                <a
                  href="tel:+79290720389"
                  target="_blank"
                  style={{ fontWeight: 700, marginRight: 15 }}
                >
                  +7 (929) 072-03-89
                </a>
                <a
                  className="header__contacts-item__link"
                  target="_blank"
                  href="https://www.whatsapp.com/?lang=ru_RU"
                >
                  <BsWhatsapp
                    size={35}
                    style={{ marginRight: 15 }}
                    color={"black"}
                  />
                </a>
                <a
                  className="header__contacts-item__link"
                  href="https://web.telegram.org/k/"
                  target="_blank"
                >
                  <BsTelegram size={35} color={"black"} />
                </a>
              </div>
              <div className="header__contacts-item--big">
                <a onClick={() => setActive(true)}>
                  <Button>Обратный звонок</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className={nav ? "header__nav-burger active" : "header__nav-burger"}>
        <ul className="header__list-burger">
          <li className="header__nav-burger__item">
            <Link to={"/nerudnie_materiali"}>Нерудные материалы</Link>
          </li>
          <li className="header__nav-burger__item">
            <Link to={"/technika"}>Строительная техника</Link>
          </li>
          <li className="header__nav-burger__item">
            <Link to={"/uslugi"}>Услуги</Link>
          </li>
          <li className="header__nav-burger__item">
            <Link to={"/about"}>О Компании</Link>
          </li>
          <li className="header__nav-burger__item">
            <Link to={"/contacts"}>Контакты</Link>
          </li>
        </ul>
      </nav>
      <HeaderNav />
      <Modal active={active} setActive={setActive}>
        <FormMini setActiveConfirmModal={setActiveConfirmModal} />
      </Modal>
      <Modal active={activeConfirmModal} setActive={setActiveConfirmModal}>
        <GiConfirmed color={"green"} size={40} />
        <span>Спасибо! Данные успешно отправлены.</span>
      </Modal>
    </header>
  );
};
