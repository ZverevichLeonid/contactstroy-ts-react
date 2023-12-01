import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemInfo } from "../ItemInfo/ItemInfo";
import { allData } from "../../../../data/allData";
import { IAllData } from "../../../../data/allData";
export const FetchItem: React.FC = () => {
  let { itemName } = useParams();
  const [item, setItem] = useState<IAllData>();
  useEffect(() => {
    const tempItem = allData.find((item) => item.id === itemName);
    setItem(tempItem);
  }, [itemName]);
  return item && <ItemInfo item={item} />;
};
