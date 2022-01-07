import React from "react";
import BackgroundImage from "../../Resources/Images/Slick.jpg";
import "./Styles/header.css";

export default function Header() {
  return (
    <div className={"background"}>
      <h1 style={{ fontFamily: "Ash", fontSize: "80px", marginBottom: "0px" }}>
        GRONK HOUSE
      </h1>
      <h2 style={{ fontFamily: "Ash", fontSize: "51px", marginTop: "0px" }}>
        SECURITY SYSTEM
      </h2>
    </div>
  );
}
