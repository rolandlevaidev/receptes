import React from "react";
import Outline from "../assets/fire-outline.svg";
import Solid from "../assets/fire-solid.svg";

const Fire = ({ isFull }) => {
  if (isFull) {
    return <img src={Solid} alt="Solid fire icon" />;
  }
  return <img src={Outline} alt="Outline fire icon" />;
};

export default Fire;
