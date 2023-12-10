import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allData } from "../../../../data/allData";
import { IAllData } from "../../../../data/allData";
export const fetchItem = () => {
  let { itemName } = useParams();
  const [item, setItem] = useState<IAllData>(allData[0]);
  useEffect(() => {
    const tempItem = allData.find((item) => item.id === itemName);
    if (tempItem) setItem(tempItem);
  }, [itemName]);
  return item;
};
