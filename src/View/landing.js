import React, { useState } from "react";
import Header from "../Components/Display/header";
import InsultInput from "../Components/Input/InsultInput";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const SubmitButton = withStyles(() => ({
    root: {
        color: "#252525",
        background: "#00FFFF",
        "&:hover": {
            background: "#00FFFF",
        }
    }
}))(Button)

const ClearButton = withStyles(() => ({
    root: {
        color: "#00FFFF",
        border: "1px solid #00FFFF",
        "&:hover": {
            border: "1px solid #00FFFF"
        }
    }
}))(Button)

export default function Landing() {
  const [input, setInput] = useState("");

  function handleImputChange(input) {
    console.log(input);
    setInput(input);
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "10%",
        }}
      >
        <Header />
        <InsultInput value={input} handleChange={(newInput) => handleImputChange(newInput)} />

        <div style={{width: "850px", margin: "0 auto", marginTop: "16px"}}>
          <SubmitButton style={{marginRight: "8px"}} variant="contained" color="primary" >
            Submit
          </SubmitButton>
          <ClearButton variant="outlined" color="primary" onClick={() => handleImputChange("")}>
            Clear
          </ClearButton>
        </div>
      </div>
    </>
  );
}
