import { Typography } from "@mui/material";
import { SubtitleProps } from "../types.md";
import { CRMFontFamily } from "@/app/font";

export function Subtitle1(props: SubtitleProps) {
  const s1Style = {
    fontSize: "14px",
    fontFamily: CRMFontFamily,
    fontWeight: 500,
    marginBottom: "5px",
  };

  return <Typography {...props} sx={{ ...s1Style }}></Typography>;
}
export function SubtitleDesciption1(props: SubtitleProps) {
  const s3DescriptionStyle = {
    fontSize: "12px",
    fontFamily: CRMFontFamily,
    marginBottom: "15px",
  };

  return <Typography {...props} sx={{ ...s3DescriptionStyle }}></Typography>;
}

export function Subtitle2(props: SubtitleProps) {
  const s2Style = {
    fontSize: "12px",
    fontFamily: CRMFontFamily,
    marginBottom: "5px",
  };

  return <Typography {...props} sx={{ ...s2Style }}></Typography>;
}

export function SubtitleDesciption2(props: SubtitleProps) {
  const s2DescriptionStyle = {
    fontSize: "10px",
    fontFamily: CRMFontFamily,
    marginBottom: "15px",
  };

  return <Typography {...props} sx={{ ...s2DescriptionStyle }}></Typography>;
}
