import React, { useState } from "react";
import { Button } from "../../../Button/Button";
import { IAllData } from "../../../../data/allData";
import "./iteminfo.scss";

interface ItemInfoProps {
  item: IAllData;
}

export const ItemInfo: React.FC<ItemInfoProps> = ({ item }) => {
  const [typeIndex, setTypeIndex] = useState(0);
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
          </div>
        </div>
      </section>
    );
  }
  if (item.type === "techniks") {
    return (
      <section className="item">
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
              <img
                src={item.types && item.types[typeIndex].typeIMG}
                alt={item.name}
              />
            </div>
            <div className="item__desc">
              <div className="item-characterisctics">
                {item.types &&
                  item.types[typeIndex].characteristics.map(
                    (characteristic) => {
                      return (
                        <div
                          key={characteristic.characteristicTitle}
                          className="item-characterisctic"
                        >
                          <div className="item-characterisctic__title">
                            {characteristic.characteristicTitle}
                          </div>
                          <div className="item-characterisctic__info">
                            {characteristic.characteristicInfo.map((info) => {
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
                      );
                    }
                  )}
              </div>
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
          </div>
        </div>
      </section>
    );
  }
};
