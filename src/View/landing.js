import React, { useState } from "react";
import Header from "../Components/Display/header";
import InsultInput from "../Components/Input/InsultInput";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import { postInsult } from "../Transfer/Apis";

const SubmitButton = withStyles(() => ({
  root: {
    color: "#252525",
    background: "#00FFFF",
    "&:hover": {
      background: "#00FFFF",
    },
  },
}))(Button);

const ClearButton = withStyles(() => ({
  root: {
    color: "#00FFFF",
    border: "1px solid #00FFFF",
    "&:hover": {
      border: "1px solid #00FFFF",
    },
  },
}))(Button);

export default function Landing() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function handleImputChange(input) {
    console.log(input);
    setInput(input);
  }

  function handlePostInsult() {
    setLoading(true);

    postInsult(input).then(() => setLoading(false));
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

        <div style={{ width: "600px", margin: "0 auto", marginTop: "16px" }}>
          <iframe
            src="http://192.168.0.192:8000/index.html"
            name="myiFrame"
            scrolling="no"
            frameborder="1"
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
