import React from "react";
import Outline from "../assets/fire-outline.svg";
import Solid from "../assets/fire-solid.svg";

const Fire = ({ isFull }) => {
  if (isFull) {
    return <img className="w-10" src={Solid} alt="Solid fire icon" />;
  }
  return <img className="w-10" src={Outline} alt="Outline fire icon" />;
};

export default Fire;
