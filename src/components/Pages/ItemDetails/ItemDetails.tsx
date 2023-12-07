import React, { useEffect, useState } from "react";
import { Header } from "../../Header/Header";
import { fetchItem } from "./fetchItem/fetchitem";
import { Footer } from "../../Footer/Footer";
import { Contacts } from "../../Contacts/Contacts";
import { ItemInfo } from "./ItemInfo/ItemInfo";
import { ItemDescription } from "./ItemDescription/ItemDescription";
import { fetchItemDescription } from "./fetchItemDescription/fetchItemDescription";
import { Form } from "../../Form/Form";
import { useParams } from "react-router-dom";

export const ItemDetails: React.FC = () => {
  const [typeIndex, setTypeIndex] = useState(0);
  let { itemName } = useParams();
  let item = fetchItem();
  let itemDesc = fetchItemDescription();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [itemName]);

  useEffect(() => {
    setTypeIndex(0);
  }, [itemName]);

  return (
    <>
      <Header />
      <ItemInfo setTypeIndex={setTypeIndex} typeIndex={typeIndex} item={item} />
      <ItemDescription
        type={item.type}
        title={itemDesc.title}
        description={itemDesc.description}
      />
      <Form />
      <Contacts />
      <Footer />
    </>
  );
};
