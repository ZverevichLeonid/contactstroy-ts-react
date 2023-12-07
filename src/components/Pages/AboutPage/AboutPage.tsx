import React, { useEffect } from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { About } from "../../About/About";

export const AboutPage: React.FC = () => {
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
      <About />
      <Footer />
    </>
  );
};
