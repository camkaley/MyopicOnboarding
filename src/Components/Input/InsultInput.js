import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const ModifiedTextField = withStyles({
  root: {
    "& label": {
      color: "#00FFFF",
    },
    "& label.Mui-focused": {
      color: "#00FFFF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00FFFF",
      color: "red",
    },
    "& .MuiOutlinedInput-root": {
      color: "#00FFFF",
      "& fieldset": {
        borderColor: "#00FFFF",
        borderImage: `url(./Slick.jpg)`
      },
      "&:hover fieldset": {
        borderColor: "#00FFFF",
        color: "#00FFFF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00FFFF",
        color: "#00FFFF",
      },
    },
  },
})(TextField);

const styles = {
  root: {
    background: "black",
  },
  input: {
    color: "white",
  },
};

export default function InsultInput(props) {
  return (
    <div style={{ width: "850px", margin: "0 auto" }}>
      <ModifiedTextField
        label="Insult"
        variant="outlined"
        placeholder="Ya mum gay"
        multiline
        minRows={5}
        value={props.value}
        style={{ width: "100%" }}
        onChange={input => props.handleChange(input.target.value)}
      />
    </div>
  );
}
