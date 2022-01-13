import React, { useState, useEffect } from "react";
import Header from "../Components/Display/header";
import appConfig from "../Config/appConfig.json";
import SlickText from "../Components/Display/slickText";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { getCount, increment } from "../Transfer/Apis";
import "./landing.css";

export default function Landing() {
  const [checked, setChecked] = useState(false);
  const [currentCount, setCurrentCount] = useState(null);

  useEffect(() => {
    getCount().then((response) => setCurrentCount(response.count));
  }, []);

  function handleIncrement() {
    increment().then(() =>
      getCount().then((response) => setCurrentCount(response.count))
    );
  }

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

        <Grid spacing="0" container>
          <Grid item xs={3}>
              <div
                style={{
                  margin: "0 auto",
                  marginTop: "120px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <div style={{cursor: "pointer", textDecoration: "none"}} onClick={() => handleIncrement()}>
                  <SlickText text="BUTTON" size="40px"/>
                </div>
                <SlickText text={currentCount} size="40px" />
              </div>
          </Grid>

          <Grid item xs={6}>
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
                  frameBorder="0"
                  marginLeft="50px"
                  marginHeight="0px"
                  marginWidth="0px"
                  height="450px"
                  width="600px"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Grid>

          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </>
  );
}
