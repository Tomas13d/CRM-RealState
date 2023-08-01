import { Typography } from "@mui/material";
import { SubtitleProps } from "../types.md";
import { CRMFontFamily } from "@/app/font";

export function Subtitle1(props: SubtitleProps) {
  const s1Style = {
    fontSize: "14px",
    fontFamily: CRMFontFamily,
    fontWeight: 500,
    color: "white",
  };

  return <Typography {...props} sx={{ ...props.sx, ...s1Style }}></Typography>;
}
export function SubtitleDesciption1(props: SubtitleProps) {
  const s3DescriptionStyle = {
    fontSize: "12px",
    fontFamily: CRMFontFamily,

    color: "white",
  };

  return (
    <Typography
      {...props}
      sx={{ ...s3DescriptionStyle, ...props.sx }}
    ></Typography>
  );
}

export function Subtitle2(props: SubtitleProps) {
  const s2Style = {
    fontSize: "12px",
    fontFamily: CRMFontFamily,
    marginBottom: "5px",
    color: "white",
  };

  return <Typography {...props} sx={{ ...s2Style, ...props.sx }}></Typography>;
}

export function SubtitleDesciption2(props: SubtitleProps) {
  const s2DescriptionStyle = {
    fontSize: "10px",
    fontFamily: CRMFontFamily,
    marginBottom: "15px",
    color: "white",
  };

  return (
    <Typography
      {...props}
      sx={{ ...s2DescriptionStyle, ...props.sx }}
    ></Typography>
  );
}
