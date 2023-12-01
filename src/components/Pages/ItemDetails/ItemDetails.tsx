import React from "react";
import { Header } from "../../Header/Header";
import { FetchItem } from "./FetchItem/FetchItem";
import { Footer } from "../../Footer/Footer";

export const ItemDetails: React.FC = () => {
  return (
    <>
      <Header />
      <FetchItem />
      <Footer />
    </>
  );
};
