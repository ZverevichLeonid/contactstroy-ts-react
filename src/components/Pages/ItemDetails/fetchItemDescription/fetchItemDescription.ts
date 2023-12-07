import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemDescriptionData } from "../../../../data/allData";
export const fetchItemDescription = () => {
  let { itemName } = useParams();
  const [item, setItem] = useState(itemDescriptionData[0]);
  useEffect(() => {
    const tempItem = itemDescriptionData.find((item) => item.id === itemName);
    if (tempItem) setItem(tempItem);
  }, [itemName]);
  return item;
};
