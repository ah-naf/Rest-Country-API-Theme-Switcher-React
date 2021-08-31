import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import LINK from "./LINK";
import './Border.css';

export default function Border({ borders, back }) {
  return (
    <div className="link-container">
      {borders.map((item, index) => {
        return(
        <LINK item={item} key={index} back={back} />
        );
      })}
    </div>
  );
}
