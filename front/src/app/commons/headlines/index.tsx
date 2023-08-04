import { Typography } from "@mui/material";
import { HeadlineProps } from "../types.md";
import { CRMFontFamily } from "../../font";
import React from "react";
export function H1(props: HeadlineProps) {
  const h1Style = {
    color: "white",
    fontSize: "56px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{
        ...h1Style,
        ...props.sx,
        fontWeight: props.bold ? "bold" : "normal",
      }}
    ></Typography>
  );
}
export function H2(props: HeadlineProps) {
  const h2Style = {
    color: "white",
    fontSize: "48px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{
        ...h2Style,
        ...props.sx,
        fontWeight: props.bold ? "bold" : "normal",
      }}
    ></Typography>
  );
}

export function H3(props: HeadlineProps) {
  const h3Style = {
    color: "white",
    fontSize: "32px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{
        ...h3Style,
        ...props.sx,
        fontWeight: props.bold ? "bold" : "normal",
      }}
    ></Typography>
  );
}

export function H4(props: HeadlineProps) {
  const h4Style = {
    color: "white",
    fontSize: "24px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{
        ...h4Style,
        ...props.sx,
        fontWeight: props.bold ? "bold" : "normal",
      }}
    ></Typography>
  );
}

export function H5(props: HeadlineProps) {
  const h5Style = {
    color: "white",
    fontSize: "20px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{
        ...h5Style,
        ...props.sx,
        fontWeight: props.bold ? "bold" : "normal",
      }}
    ></Typography>
  );
}
