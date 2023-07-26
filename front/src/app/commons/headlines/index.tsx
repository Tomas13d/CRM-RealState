import { Typography } from "@mui/material";
import { HeadlineProps } from "../types.md";
import { CRMFontFamily } from "@/app/font";

export function H1(props: HeadlineProps) {
  const h1Style = {
    fontSize: "56px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{ ...h1Style, fontWeight: props.bold ? "bold" : "normal" }}
    ></Typography>
  );
}
export function H2(props: HeadlineProps) {
  const h2Style = {
    fontSize: "48px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{ ...h2Style, fontWeight: props.bold ? "bold" : "normal" }}
    ></Typography>
  );
}

export function H3(props: HeadlineProps) {
  const h3Style = {
    fontSize: "32px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{ ...h3Style, fontWeight: props.bold ? "bold" : "normal" }}
    ></Typography>
  );
}

export function H4(props: HeadlineProps) {
  const h4Style = {
    fontSize: "24px",
    fontFamily: CRMFontFamily,
  };

  return (
    <Typography
      {...props}
      sx={{ ...h4Style, fontWeight: props.bold ? "bold" : "normal" }}
    ></Typography>
  );
}

export function H5(props: HeadlineProps) {
  const h5Style = { fontSize: "20px", fontFamily: CRMFontFamily };

  return (
    <Typography
      {...props}
      sx={{ ...h5Style, fontWeight: props.bold ? "bold" : "normal" }}
    ></Typography>
  );
}
