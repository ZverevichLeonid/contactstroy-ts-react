import React, { useEffect } from "react";
import { Header } from "../../Header/Header";
import { Contacts } from "../../Contacts/Contacts";
import { Footer } from "../../Footer/Footer";

export const ContactsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <Contacts />
      <Footer />
    </>
  );
};
