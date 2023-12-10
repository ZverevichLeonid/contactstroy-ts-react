import React from "react";
import "./contacts.scss";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import "./responsive.scss";
export const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <div className="contacts__title title">
          <h4>Контакты</h4>
        </div>
        <div className="contacts__grid">
          <div className="contacts__grid-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className="contacts__grid-img"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.8336 11.0398C23.8113 12.8753 22.3092 14.3474 20.4735 14.3326C18.6379 14.3178 17.1597 12.8217 17.167 10.986C17.1744 9.15038 18.6645 7.66615 20.5002 7.66602C21.3897 7.67105 22.2408 8.02942 22.866 8.6622C23.4912 9.29498 23.8393 10.1503 23.8336 11.0398V11.0398Z"
                stroke="#FFC100"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0721 19.8848C15.7625 19.8848 16.3221 19.3251 16.3221 18.6348C16.3221 17.9444 15.7625 17.3848 15.0721 17.3848V19.8848ZM7.64285 18.6348V17.3848C7.00468 17.3848 6.46899 17.8655 6.40014 18.4999L7.64285 18.6348ZM5.32872 28.3742C5.25424 29.0605 5.75025 29.6773 6.43658 29.7518C7.12291 29.8262 7.73966 29.3302 7.81413 28.6439L5.32872 28.3742ZM14.2698 19.6107C14.7992 20.0538 15.5875 19.9839 16.0306 19.4545C16.4738 18.9252 16.4038 18.1368 15.8745 17.6937L14.2698 19.6107ZM14.6907 18.3329L13.8739 19.2791C13.8787 19.2833 13.8835 19.2874 13.8884 19.2914L14.6907 18.3329ZM14.6907 4.3829L13.8968 3.41737C13.8891 3.42372 13.8815 3.43015 13.8739 3.43668L14.6907 4.3829ZM26.3071 4.3829L27.1239 3.43668C27.1125 3.42682 27.1009 3.41716 27.0891 3.40772L26.3071 4.3829ZM26.3071 18.3329L27.1095 19.2914C27.1143 19.2874 27.1191 19.2833 27.1239 19.2791L26.3071 18.3329ZM25.1234 17.6937C24.594 18.1368 24.5241 18.9252 24.9672 19.4545C25.4103 19.9839 26.1987 20.0538 26.7281 19.6107L25.1234 17.6937ZM15.8694 17.6894C15.3387 17.2479 14.5505 17.3203 14.109 17.851C13.6675 18.3817 13.7399 19.1698 14.2706 19.6114L15.8694 17.6894ZM16.9856 21.8699C17.5163 22.3114 18.3045 22.2391 18.746 21.7084C19.1875 21.1776 19.1151 20.3895 18.5844 19.948L16.9856 21.8699ZM25.9279 17.3809C25.2375 17.3809 24.6779 17.9405 24.6779 18.6309C24.6779 19.3212 25.2375 19.8809 25.9279 19.8809V17.3809ZM33.3571 18.6309L34.5998 18.4958C34.5309 17.8614 33.9952 17.3809 33.3571 17.3809V18.6309ZM33.1859 28.6231C33.2605 29.3094 33.8773 29.8053 34.5636 29.7307C35.25 29.6561 35.7459 29.0392 35.6713 28.3529L33.1859 28.6231ZM26.7315 19.5883C27.2603 19.1445 27.3292 18.356 26.8853 17.8273C26.4415 17.2985 25.6531 17.2296 25.1243 17.6734L26.7315 19.5883ZM20.5 23.1866L19.6966 24.1442C20.1614 24.5341 20.839 24.534 21.3036 24.144L20.5 23.1866ZM18.5885 19.9511C18.0596 19.5074 17.2711 19.5764 16.8274 20.1053C16.3837 20.6342 16.4527 21.4226 16.9816 21.8663L18.5885 19.9511ZM7.81411 28.6429C7.88871 27.9566 7.39282 27.3397 6.7065 27.2651C6.02019 27.1905 5.40335 27.6864 5.32875 28.3727L7.81411 28.6429ZM5.5 38.365L4.25732 38.2299C4.21895 38.5828 4.33249 38.9355 4.56959 39.1997C4.80668 39.464 5.14497 39.615 5.5 39.615V38.365ZM18.3571 39.615C19.0475 39.615 19.6071 39.0553 19.6071 38.365C19.6071 37.6746 19.0475 37.115 18.3571 37.115V39.615ZM5.87084 27.4746C5.2991 27.8615 5.14927 28.6387 5.53618 29.2104C5.9231 29.7822 6.70024 29.932 7.27198 29.5451L5.87084 27.4746ZM12.8798 25.7501C13.4516 25.3632 13.6014 24.586 13.2145 24.0143C12.8276 23.4425 12.0504 23.2927 11.4787 23.6796L12.8798 25.7501ZM18.4857 21.9453C19.0574 21.5582 19.2071 20.7811 18.8201 20.2094C18.4331 19.6377 17.6559 19.488 17.0842 19.8751L18.4857 21.9453ZM11.4785 23.6701C10.9069 24.0571 10.7572 24.8342 11.1442 25.4059C11.5312 25.9776 12.3084 26.1273 12.88 25.7403L11.4785 23.6701ZM13.3182 24.19C13.0338 23.561 12.2932 23.2817 11.6642 23.5661C11.0352 23.8506 10.7559 24.5911 11.0403 25.2202L13.3182 24.19ZM17.2182 38.8809C17.5027 39.5099 18.2432 39.7892 18.8722 39.5047C19.5012 39.2203 19.7806 38.4797 19.4961 37.8507L17.2182 38.8809ZM18.3572 37.1144C17.6668 37.1144 17.1072 37.674 17.1072 38.3644C17.1072 39.0548 17.6668 39.6144 18.3572 39.6144V37.1144ZM24.7857 39.6144C25.4761 39.6144 26.0357 39.0548 26.0357 38.3644C26.0357 37.674 25.4761 37.1144 24.7857 37.1144V39.6144ZM24.7857 37.115C24.0954 37.115 23.5357 37.6746 23.5357 38.365C23.5357 39.0553 24.0954 39.615 24.7857 39.615V37.115ZM35.5 38.365V39.615C35.8551 39.615 36.1933 39.464 36.4304 39.1997C36.6675 38.9355 36.7811 38.5828 36.7427 38.2299L35.5 38.365ZM35.6713 28.3727C35.5967 27.6864 34.9798 27.1905 34.2935 27.2651C33.6072 27.3397 33.1113 27.9566 33.1859 28.6429L35.6713 28.3727ZM23.8922 37.4908C23.4094 37.9843 23.4181 38.7757 23.9116 39.2585C24.4051 39.7413 25.1965 39.7326 25.6793 39.2391L23.8922 37.4908ZM35.3221 29.3819C35.8049 28.8884 35.7962 28.097 35.3027 27.6143C34.8092 27.1315 34.0178 27.1402 33.5351 27.6337L35.3221 29.3819ZM15.0721 17.3848H7.64285V19.8848H15.0721V17.3848ZM6.40014 18.4999L5.32872 28.3742L7.81413 28.6439L8.88556 18.7696L6.40014 18.4999ZM15.8745 17.6937L15.4931 17.3744L13.8884 19.2914L14.2698 19.6107L15.8745 17.6937ZM15.5075 17.3867C13.7549 15.8738 12.7474 13.6732 12.7474 11.3579H10.2474C10.2474 14.3999 11.5712 17.2913 13.8739 19.2791L15.5075 17.3867ZM12.7474 11.3579C12.7474 9.04265 13.7549 6.842 15.5075 5.32912L13.8739 3.43668C11.5712 5.42446 10.2474 8.31589 10.2474 11.3579H12.7474ZM15.4846 5.34843C17.4873 3.70174 19.1983 3.14292 20.7199 3.21051C22.2662 3.2792 23.8362 4.00369 25.5251 5.35808L27.0891 3.40772C25.176 1.87354 23.1074 0.814104 20.8308 0.712973C18.5296 0.610746 16.2334 1.4962 13.8968 3.41737L15.4846 5.34843ZM25.4903 5.32912C27.2429 6.842 28.2504 9.04265 28.2504 11.3579H30.7504C30.7504 8.31589 29.4267 5.42446 27.1239 3.43668L25.4903 5.32912ZM28.2504 11.3579C28.2504 13.6732 27.2429 15.8738 25.4903 17.3867L27.1239 19.2791C29.4267 17.2913 30.7504 14.3999 30.7504 11.3579H28.2504ZM25.5048 17.3744L25.1234 17.6937L26.7281 19.6107L27.1095 19.2914L25.5048 17.3744ZM14.2706 19.6114L16.9856 21.8699L18.5844 19.948L15.8694 17.6894L14.2706 19.6114ZM25.9279 19.8809H33.3571V17.3809H25.9279V19.8809ZM32.1145 18.7659L33.1859 28.6231L35.6713 28.3529L34.5998 18.4958L32.1145 18.7659ZM25.1243 17.6734L19.6964 22.2291L21.3036 24.144L26.7315 19.5883L25.1243 17.6734ZM21.3035 22.229L18.5885 19.9511L16.9816 21.8663L19.6966 24.1442L21.3035 22.229ZM5.32875 28.3727L4.25732 38.2299L6.74268 38.5L7.81411 28.6429L5.32875 28.3727ZM5.5 39.615H18.3571V37.115H5.5V39.615ZM7.27198 29.5451L12.8798 25.7501L11.4787 23.6796L5.87084 27.4746L7.27198 29.5451ZM17.0842 19.8751L11.4785 23.6701L12.88 25.7403L18.4857 21.9453L17.0842 19.8751ZM11.0403 25.2202L17.2182 38.8809L19.4961 37.8507L13.3182 24.19L11.0403 25.2202ZM18.3572 39.6144H24.7857V37.1144H18.3572V39.6144ZM24.7857 39.615H35.5V37.115H24.7857V39.615ZM36.7427 38.2299L35.6713 28.3727L33.1859 28.6429L34.2573 38.5L36.7427 38.2299ZM25.6793 39.2391L35.3221 29.3819L33.5351 27.6337L23.8922 37.4908L25.6793 39.2391Z"
                fill="black"
              />
            </svg>
            <div className="contacts__grid-title">
              <h6>Адрес</h6>
            </div>
            <div className="contacts__grid-info">
              <p>
                <span></span>г. Тула, пр. Ленина, д. 157, оф. 219
              </p>
            </div>
          </div>
          <div className="contacts__grid-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className="contacts__grid-img"
            >
              <path
                d="M21.9056 30.7614C24.7601 32.1981 28.1209 33.234 32.0629 33.6772C33.0195 33.7848 33.8337 33.0184 33.8337 32.0557V28.468C33.8337 27.7032 33.3132 27.0365 32.5712 26.8511L28.0825 25.7289C27.5145 25.5869 26.9137 25.7533 26.4997 26.1673L21.9056 30.7614ZM21.9056 30.7614C16.7128 28.1479 13.1954 24.2083 10.9023 20.0981M10.9023 20.0981C8.71753 16.1821 7.64403 12.1112 7.29167 8.88473C7.18938 7.94806 7.9479 7.16666 8.89014 7.16666H12.4673C13.2618 7.16666 13.9458 7.72743 14.1016 8.50647L15.3254 14.6253C15.4347 15.1718 15.2636 15.7367 14.8696 16.1307L10.9023 20.0981Z"
                stroke="black"
                strokeWidth="3.33333"
              />
              <path
                d="M22.0898 12.3187C23.7296 12.6375 25.2358 13.4417 26.4129 14.627C27.5899 15.8123 28.3836 17.324 28.6909 18.966M22.3278 5.61068C25.6319 6.01637 28.7072 7.50965 31.0693 9.85531C33.4314 12.201 34.9461 15.2658 35.3748 18.5669"
                stroke="#FFC100"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="contacts__grid-title">
              <h6>Телефон</h6>
            </div>
            <div className="contacts__grid-info">
              <p>
                <span></span>
                <a href="tel:+79290720389">+7 (929) 072-03-89</a>
              </p>
            </div>
          </div>
          <div className="contacts__grid-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <path
                d="M16.7275 18.0362C16.7275 18.6872 17.2552 19.2149 17.9063 19.2149H28.3842C29.0352 19.2149 29.5629 18.6872 29.5629 18.0362C29.5629 17.3851 29.0352 16.8574 28.3842 16.8574H17.9063C17.2552 16.8574 16.7275 17.3851 16.7275 18.0362Z"
                fill="#FFC100"
              />{" "}
              <path
                d="M28.3842 23.2715H17.9063C17.2552 23.2715 16.7275 23.7992 16.7275 24.4502C16.7275 25.1013 17.2552 25.629 17.9063 25.629H28.3842C29.0352 25.629 29.5629 25.1013 29.5629 24.4502C29.5629 23.7992 29.0352 23.2715 28.3842 23.2715Z"
                fill="#FFC100"
              />{" "}
              <path
                d="M28.3842 29.6876H17.9063C17.2552 29.6876 16.7275 30.2153 16.7275 30.8663C16.7275 31.5174 17.2552 32.0451 17.9063 32.0451H28.3842C29.0352 32.0451 29.5629 31.5174 29.5629 30.8663C29.5629 30.2153 29.0352 29.6876 28.3842 29.6876Z"
                fill="#FFC100"
              />{" "}
              <path
                d="M13.8459 19.266C14.5255 19.266 15.0765 18.7151 15.0765 18.0354C15.0765 17.3557 14.5255 16.8048 13.8459 16.8048C13.1662 16.8048 12.6152 17.3557 12.6152 18.0354C12.6152 18.7151 13.1662 19.266 13.8459 19.266Z"
                fill="#FFC100"
              />{" "}
              <path
                d="M13.8459 25.682C14.5255 25.682 15.0765 25.131 15.0765 24.4513C15.0765 23.7717 14.5255 23.2207 13.8459 23.2207C13.1662 23.2207 12.6152 23.7717 12.6152 24.4513C12.6152 25.131 13.1662 25.682 13.8459 25.682Z"
                fill="#FFC100"
              />{" "}
              <path
                d="M13.8459 32.096C14.5255 32.096 15.0765 31.545 15.0765 30.8654C15.0765 30.1857 14.5255 29.6348 13.8459 29.6348C13.1662 29.6348 12.6152 30.1857 12.6152 30.8654C12.6152 31.545 13.1662 32.096 13.8459 32.096Z"
                fill="#FFC100"
              />{" "}
              <path
                d="M35.4783 9.24841L26.5752 0.345245C26.354 0.124163 26.0542 0 25.7417 0H6.35454C5.70347 0 5.17578 0.527691 5.17578 1.17876V38.8212C5.17578 39.4723 5.70347 40 6.35454 40H34.6447C35.2958 40 35.8235 39.4723 35.8235 38.8212V10.0819C35.8235 9.76929 35.6993 9.46949 35.4783 9.24841ZM26.6585 3.7626L32.061 9.16511H26.6585V3.7626ZM33.466 37.6425H7.5333V2.35752H24.3009V10.3439C24.3009 10.9949 24.8286 11.5226 25.4796 11.5226H33.466V37.6425Z"
                fill="black"
              />{" "}
            </svg>
            <div className="contacts__grid-title">
              <h6>Реквизиты</h6>
            </div>
            <div className="contacts__grid-info">
              <p>
                <span>ООО </span>"Контактстрой"
              </p>
              <p>
                <span>Юр. адрес: </span> г Тула, пр-кт Ленина, д. 157, 219, этаж
                цокольное помещ.
              </p>
              <p>
                <span>ИНН: </span>7100018036
              </p>
              <p>
                <span>КПП: </span>710001001
              </p>
              <p>
                <span>ОГРН: </span>1227100002821
              </p>
            </div>
          </div>
          <div className="contacts__grid-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              {" "}
              <path
                d="M20.5 0C9.4407 0 0.5 8.9407 0.5 20C0.5 31.0593 9.4407 40 20.5 40C31.5593 40 40.5 31.0675 40.5 20C40.5 8.93251 31.5675 0 20.5 0ZM22.2014 36.5971V35.7464C22.2014 34.8139 21.4325 34.045 20.5 34.045C19.5675 34.045 18.7986 34.8139 18.7986 35.7464V36.5971C10.9622 35.7955 4.7045 29.5378 3.91104 21.7096H4.67178C5.60429 21.7096 6.37321 20.9407 6.37321 20.0082C6.37321 19.0757 5.60429 18.3067 4.67178 18.3067H3.91104C4.71268 10.4703 10.9703 4.21268 18.7986 3.41922V4.17178C18.7986 5.10429 19.5675 5.87321 20.5 5.87321C21.4325 5.87321 22.2014 5.10429 22.2014 4.17178V3.41104C30.0378 4.21268 36.2955 10.4703 37.089 18.2986H36.2464C35.3139 18.2986 34.545 19.0675 34.545 20C34.545 20.9325 35.3139 21.7014 36.2464 21.7014H37.0971C36.2955 29.5378 30.0378 35.7955 22.2014 36.5971Z"
                fill="black"
              />{" "}
              <path
                d="M20.5002 10.2168C19.5677 10.2168 18.7988 10.9857 18.7988 11.9182V19.4029L11.0524 28.9407C10.4552 29.7096 10.627 30.7239 11.306 31.3211C12.2548 32.0164 13.261 31.4928 13.6045 31.0675L21.8663 21.0225C22.0381 20.7689 22.2098 20.4254 22.2098 20V11.9182C22.2017 10.9775 21.4409 10.2168 20.5002 10.2168Z"
                fill="#FFC100"
              />{" "}
            </svg>
            <div className="contacts__grid-title">
              <h6>Режим работы</h6>
            </div>
            <div className="contacts__grid-info">
              <p>
                <span>Пн-Пт: </span>10:00 - 20:00
              </p>
              <p>
                <span>Сб: </span>10:00 - 18:00
              </p>
            </div>
          </div>
          <div className="contacts__grid-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M4.61661 12.1995L13.6042 19.9999L4.61661 27.8004C4.07592 28.2697 4.01792 29.0885 4.48727 29.6293C4.95663 30.17 5.77538 30.2278 6.31608 29.7586L15.5821 21.7166L19.1501 24.8133C19.3938 25.0249 19.6968 25.1306 19.9998 25.1306C20.3028 25.1306 20.6058 25.0249 20.8495 24.8133L24.4176 21.7166L33.6835 29.7586C34.2242 30.2279 35.043 30.17 35.5123 29.6293C35.9817 29.0885 35.9237 28.2697 35.383 27.8004L26.3954 19.9999L35.383 12.1995C35.9238 11.7301 35.9817 10.9114 35.5123 10.3706C35.043 9.82982 34.2241 9.772 33.6835 10.2413C32.9296 10.8956 20.8025 21.4208 19.9998 22.1175C19.1968 21.4206 7.06973 10.8954 6.31608 10.2413C5.77538 9.772 4.95654 9.83 4.48727 10.3706C4.01792 10.9114 4.07592 11.7301 4.61661 12.1995Z"
                fill="#FFC100"
              />{" "}
              <path
                d="M38.7037 5.5415H1.29636C0.58044 5.5415 0 6.12203 0 6.83795V33.162C0 33.878 0.58044 34.4584 1.29636 34.4584H38.7036C39.4196 34.4584 40 33.878 40 33.162V6.83795C40.0001 6.12203 39.4197 5.5415 38.7037 5.5415ZM37.4074 31.8656H37.4073H2.59281V8.13431H37.4074V31.8656V31.8656Z"
                fill="black"
              />{" "}
            </svg>
            <div className="contacts__grid-title">
              <h6>Электронная почта</h6>
            </div>
            <div className="contacts__grid-info">
              <p>
                <span></span>
                <a href="mailto:info@контакт-строй.рф">info@контакт-строй.рф</a>
              </p>
            </div>
          </div>
        </div>
        <div className="contacts__map">
          <YMaps>
            <Map
              defaultState={{
                center: [54.146365, 37.583257],
                zoom: 18,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              width={"100%"}
              height={475}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
              <Placemark defaultGeometry={[54.146365, 37.583257]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
};
