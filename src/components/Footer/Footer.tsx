import React from "react";
import logo from "../../assets/images/logo/footer-logo.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.scss";
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
                <Link to={"/nerudnie_materiali"}>НЕРУДНЫЕ МАТЕРИАЛЫ</Link>
              </li>
              <li className="footer__item">
                <Link to={"/nerudnie_materiali/sheben_izvestnyakoviy"}>
                  Щебень известняковый
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/nerudnie_materiali/sheben_granitniy"}>
                  Щебень гранитный
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/nerudnie_materiali/sheben_shlakoviy"}>
                  Щебень шлаковый
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/nerudnie_materiali/sheben_dolomitoviy"}>
                  Щебень доломитовый
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/nerudnie_materiali/pesok"}>Песок</Link>
              </li>
              <li className="footer__item">
                <Link to={"/nerudnie_materiali/pgs"}>
                  Песчано-гравийная смесь
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/nerudnie_materiali/shps"}>
                  Щебеночно-песчаная смесь
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <ul className="footer__list">
              <li className="footer__item_title">
                <Link to={"/technika"}>СТРОИТЕЛЬНАЯ ТЕХНИКА</Link>
              </li>
              <li className="footer__item">
                <Link to={"/technika/arenda_avtokran"}>Автокран</Link>
              </li>
              <li className="footer__item">
                <Link to={"/technika/arenda_avtovishka"}>Автовышка</Link>
              </li>
              <li className="footer__item">
                <Link to={"/technika/arenda_manipulator"}>Манипулятор</Link>
              </li>
              <li className="footer__item">
                <Link to={"/technika/arenda_ekskavator"}>Экскаватор</Link>
              </li>
              <li className="footer__item">
                <Link to={"/technika/arenda_buldozer"}>Бульдозер</Link>
              </li>
              <li className="footer__item">
                <Link to={"/technika/arenda_pogruzchik"}>
                  Фронтальный погрузчик
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/technika/arenda_trala"}>Трал</Link>
              </li>
              <li className="footer__item">
                <Link to={"/technika/arenda_samosval"}>Самосвал</Link>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <ul className="footer__list">
              <li className="footer__item_title">
                <Link to={"/uslugi"}>УСЛУГИ</Link>
              </li>
              <li className="footer__item">
                <Link to={"/uslugi/vyivoz_musora"}>Вывоз мусора</Link>
              </li>
              <li className="footer__item">
                <Link to={"/uslugi/vyivoz_grunta"}>Вывоз грунта</Link>
              </li>
              <li className="footer__item">
                <Link to={"/uslugi/sipuchie_materiali"}>
                  Перевозка сыпучих материалов
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/uslugi/uborka_snega"}>Уборка снега</Link>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <ul className="footer__list">
              <li className="footer__item_title">
                <Link to={"/"}>КОНТАКТ-СТРОЙ</Link>
              </li>
              <li className="footer__item">
                <Link to={"/about"}>О компании</Link>
              </li>
              <li className="footer__item">
                <Link to={"/"}>Обратная связь</Link>
              </li>
              <li className="footer__item">
                <Link to={"/contacts"}>Контакты</Link>
              </li>
              <li className="footer__item">
                <Link to={"/"}>Новости</Link>
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
