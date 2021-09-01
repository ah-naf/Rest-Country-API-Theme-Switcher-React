import React from "react";
import iconUp from "../images/icon-up.svg";
import iconDown from "../images/icon-down.svg";
import "./SocialMedia.css";

function SocialMedia({ item, darkMode }) {
  return (
    <div className={`social ${item.name} ${darkMode ? '':'social-light'}`}>
      <div className="wrapper">
        <div className="username">
          <img src={item.icon} alt="" />
          <p>{item.username}</p>
        </div>
        <div className="followers">
          <h1>{item.number}</h1>
          <p>{item.text}</p>
        </div>
        <div className={`growth ${item.isUp ? "growth-up" : "growth-down"}`}>
          <img src={item.isUp ? iconUp : iconDown} alt="" />
          <p>{item.growth}</p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
