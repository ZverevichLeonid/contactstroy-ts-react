import React from "react";
import "./footer.scss";
import logo from "../../assets/images/logo/footer-logo.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__block">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={"/"}
              className="footer__logo"
            >
              <img src={logo} alt="logo" />
            </Link>
            <div className="footer__contacts">
              <a href="tel:+79290720389" className="footer__contact">
                <BsFillTelephoneFill color={"black"} size={25} />
              </a>{" "}
              <a
                href="mailto:info@контакт-строй.рф"
                className="footer__contact"
              >
                <IoMdMail color={"black"} size={25} />
              </a>{" "}
              <a
                target="_blank"
                href="https://www.whatsapp.com/?lang=ru_RU"
                className="footer__contact"
              >
                <IoLogoWhatsapp color={"black"} size={25} />
              </a>{" "}
              <a
                href="https://web.telegram.org/k/"
                target="_blank"
                className="footer__contact"
              >
                <FaTelegramPlane color={"black"} size={25} />
              </a>
            </div>
            <span>© 2023 ООО "Контакт-Строй"</span>
            <span>Политика конфиденциальности</span>
          </div>
          <div className="footer__block">
            <ul className="footer__list">
              <li className="footer__item_title">
                <a href="#!">НЕРУДНЫЕ МАТЕРИАЛЫ</a>
              </li>
              <li className="footer__item">
                <a href="#!">Щебень известняковый</a>
              </li>
              <li className="footer__item">
                <a href="#!">Щебень гранитный</a>
              </li>
              <li className="footer__item">
                <a href="#!">Щебень шлаковый</a>
              </li>
              <li className="footer__item">
                <a href="#!">Щебень доломитовый</a>
              </li>
              <li className="footer__item">
                <a href="#!">Песок</a>
              </li>
              <li className="footer__item">
                <a href="#!">Песчано-гравийная смесь</a>
              </li>
              <li className="footer__item">
                <a href="#!">Щебеночно-песчаная смесь</a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <ul className="footer__list">
              <li className="footer__item_title">
                <a href="#!">СТРОИТЕЛЬНАЯ ТЕХНИКА</a>
              </li>
              <li className="footer__item">
                <a href="#!">Автокран</a>
              </li>
              <li className="footer__item">
                <a href="#!">Автовышка</a>
              </li>
              <li className="footer__item">
                <a href="#!">Манипулятор</a>
              </li>
              <li className="footer__item">
                <a href="#!">Экскаватор</a>
              </li>
              <li className="footer__item">
                <a href="#!">Бульдозер</a>
              </li>
              <li className="footer__item">
                <a href="#!">Фронтальный погрузчик</a>
              </li>
              <li className="footer__item">
                <a href="#!">Трал</a>
              </li>
              <li className="footer__item">
                <a href="#!">Самосвал</a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <ul className="footer__list">
              <li className="footer__item_title">
                <a href="#!">УСЛУГИ</a>
              </li>
              <li className="footer__item">
                <a href="#!">Вывоз мусора</a>
              </li>
              <li className="footer__item">
                <a href="#!">Вывоз грунта</a>
              </li>
              <li className="footer__item">
                <a href="#!">Перевозка сыпучих материалов</a>
              </li>
              <li className="footer__item">
                <a href="#!">Уборка снега</a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <ul className="footer__list">
              <li className="footer__item_title">
                <a href="#!">КОНТАКТ-СТРОЙ</a>
              </li>
              <li className="footer__item">
                <a href="#!">О компании</a>
              </li>
              <li className="footer__item">
                <a href="#!">Обратна связь</a>
              </li>
              <li className="footer__item">
                <a href="#!">Контакты</a>
              </li>
              <li className="footer__item">
                <a href="#!">Новости</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__desc">
          <a href="https://github.com/Pylenya" target="_blank">
            <p>@ created by lenya.zverevich</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
