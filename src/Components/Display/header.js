import React from "react";
import BackgroundImage from "../../Resources/Images/Slick.jpg";
import "./Styles/header.css";

export default function Header() {
  return (
    <div className={"background"}>
      <h1 style={{ fontFamily: "Ash", fontSize: "130px", marginBottom: "0px" }}>
        Myopic
      </h1>
      <h2 style={{ fontFamily: "Ash", fontSize: "51px", marginTop: "0px" }}>
        Insult Onboarding
      </h2>
    </div>
  );
}
