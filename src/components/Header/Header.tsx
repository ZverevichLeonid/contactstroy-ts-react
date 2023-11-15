import React from "react";
import logo from "../../assets/images/logo.png";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { Button } from "../Button/Button";
import "./header.scss";
import { HeaderNav } from "../HeaderNav/HeaderNav";
export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__block">
            <a href="#" className="header__img">
              <img src={logo} alt="" />
            </a>
            <div className="header__contacts">
              <div className="header__contacts-item">
                <AiOutlineMail size={35} />
                <span>info@контакт-строй.рф</span>
              </div>
              <div className="header__contacts-item">
                <FiMapPin size={35} />
                <span>г.Тула, пр-т Ленина, д. 157, оф 219</span>
              </div>
            </div>
          </div>

          <div className="header__contacts">
            <div className="header__contacts-item">
              <span style={{ fontWeight: 700, marginRight: 15 }}>
                +7 (929) 072-03-89
              </span>
              <a href="#">
                <BsWhatsapp
                  size={35}
                  style={{ marginRight: 15 }}
                  color={"black"}
                />
              </a>
              <a href="#">
                <BsTelegram size={35} color={"black"} />
              </a>
            </div>
            <div className="header__contacts-item--big">
              <Button>Обратный звонок</Button>
            </div>
          </div>
        </div>
      </div>
      <HeaderNav />
    </header>
  );
};
