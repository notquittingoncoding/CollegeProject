import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { Slider } from "./Slider/Slider";
import "./LandingPage.css"
export const LandingPage = () => {
  return (
    <>
      <Navbar />

      <Slider text="Popular Places" />
      <Slider text="Top Travellers" />

      {/*------------ Yaha par contact us ka component ayega by yuvraj ------*/}

      {/* ------------Yaha par about us ka component ayega by Yuvraj-------- */}

      <Footer />
    </>
  );
};
