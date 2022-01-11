import React, { useState } from "react";
import Header from "../Components/Display/header";
import "./landing.css"

export default function Landing() {

  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "2%",
        }}
      >
        <Header />

        <div className="frameBorder">
          <iframe
            src="http://192.168.0.192:8000/index.html"
            name="myiFrame"
            scrolling="no"
            frameborder="0"
            marginheight="0px"
            marginwidth="0px"
            height="450px"
            width="600px"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
