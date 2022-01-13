import React, { useState } from "react";
import Header from "../Components/Display/header";
import appConfig from "../Config/appConfig.json";
import SlickText from "../Components/Display/slickText";
import Switch from "@mui/material/Switch";
import "./landing.css";

export default function Landing() {
  const [checked, setChecked] = useState(false);

  function handleSwitch(item) {
    setChecked(item);
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "2%",
        }}
      >
        <Header />

        <div className="panel"></div>

        <div className="frameBorder">
          <div>
            <div style={{ display: "inline-block" }}>
              <SlickText text="Day" size="20px" />
            </div>
            <div
              style={{
                display: "inline-block",
                position: "relative",
                top: "-4px",
              }}
            >
              <Switch
                onChange={(event) => handleSwitch(event.target.checked)}
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <SlickText text="Night" size="20px" />
            </div>
          </div>

          <div className="frameBorderColour">
            <iframe
              src={`http://${
                checked
                  ? appConfig.cameraDetails.nightCameraURL
                  : appConfig.cameraDetails.dayCameraURL
              }/index.html`}
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

        <div className="panel"></div>
      </div>
    </>
  );
}
