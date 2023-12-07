import React from "react";
import { Button } from "../../../Button/Button";
import { IAllData } from "../../../../data/allData";
import "./iteminfo.scss";

interface ItemInfoProps {
  item: IAllData;
  typeIndex: number;
  setTypeIndex: (arg: number) => void;
}

export const ItemInfo: React.FC<ItemInfoProps> = ({
  item,
  typeIndex,
  setTypeIndex,
}) => {
  if (item.type === "material") {
    return (
      <section className="item">
        <div className="container">
          <div className="item__box">
            <div className="item__title">
              <h1>{item.title}</h1>
            </div>
            <div className="item__img">
              <img src={item.previewImg} alt={item.name} />
            </div>
            <div className="item__desc">
              <div className="item-characterisctics">
                <div className="item-characterisctic">
                  <div className="item-characterisctic__title">{item.name}</div>
                  <div className="item-characterisctic__info">
                    {item.characteristics &&
                      item.characteristics.map((info) => {
                        return (
                          <div
                            key={info.characteristic}
                            className="item-characterisctic__row"
                          >
                            <span>{info.characteristic}</span>
                            <span></span>
                            <span>{info.value}</span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <a className="item__link" href="#form-section">
              Заказать
            </a>
          </div>
        </div>
      </section>
    );
  }
  if (item.type === "techniks") {
    return (
      <section key={item.id} className="item">
        <div className="container">
          <div className="item__box">
            <div className="item__title">
              <h1>{item.title}</h1>
            </div>
            {item.types && item.types.length > 1 ? (
              <div className="item__filter">
                {item.types.map((btn, index) => {
                  return (
                    <Button
                      key={btn.typeName}
                      onClick={() => setTypeIndex(index)}
                      active={typeIndex === index}
                      backgroundColor="white"
                    >
                      {btn.typeName}
                    </Button>
                  );
                })}
              </div>
            ) : null}
            <div className="item__img">
              {item.types && (
                <img
                  src={
                    item.types.length > 1
                      ? item.types[typeIndex].typeIMG
                      : item.types[0].typeIMG
                  }
                  alt={item.name}
                />
              )}
            </div>
            <div className="item__desc">
              <div className="item-characterisctics">
                {item.types &&
                  item.types[
                    item.types.length > 1 ? typeIndex : 0
                  ].characteristics.map((characteristic) => {
                    return (
                      <div
                        key={characteristic?.characteristicTitle}
                        className="item-characterisctic"
                      >
                        <div className="item-characterisctic__title">
                          {characteristic?.characteristicTitle}
                        </div>
                        <div className="item-characterisctic__info">
                          {characteristic?.characteristicInfo.map((info) => {
                            return (
                              <div
                                key={info?.characteristic}
                                className="item-characterisctic__row"
                              >
                                <span>{info?.characteristic}</span>
                                <span></span>
                                <span>{info?.value}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              <a className="item__link" href="#form-section">
                Заказать
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (item.type === "uslugi") {
    return (
      <section className="item">
        <div className="container">
          <div className="item__box">
            <div className="item__title">
              <h1>{item.title}</h1>
            </div>
            <div className="item__img">
              <img src={item.previewImg} alt={item.name} />
            </div>
            <div className="item__desc">
              <div className="item-characterisctics">
                <div className="item-characterisctic">
                  <div className="item-characterisctic__title">{item.name}</div>
                  <div className="item-characterisctic__info">
                    {item.characteristics &&
                      item.characteristics.map((info) => {
                        return (
                          <div
                            key={info.characteristic}
                            className="item-characterisctic__row"
                          >
                            <span>{info.characteristic}</span>
                            <span></span>
                            <span>{info.value}</span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <a className="item__link" href="#form-section">
              Заказать
            </a>
          </div>
        </div>
      </section>
    );
  }
};
