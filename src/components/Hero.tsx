import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between itemms-center flex-col">
        <img src={logo} alt="sumz_log" className="w-28 object-contain"></img>
      </nav>
    </header>
  );
};

export default Hero;
