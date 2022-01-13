import React from "react";
import BackgroundImage from "../../Resources/Images/Slick.jpg";
import "./Styles/header.css";

export default function SlickText(props) {
  return (
    <div className={"text"}>
      <h1
        style={{
          fontFamily: "Ash",
          fontSize: props.size ? props.size : "40px",
          marginBottom: "0px",
        }}
      >
        {props.text}
      </h1>
    </div>
  );
}
