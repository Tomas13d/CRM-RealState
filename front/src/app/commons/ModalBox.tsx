import { Box, BoxProps } from "@mui/material";

export default function (props: BoxProps) {
  const modalBoxStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "#263348",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "white",
  };

  return <Box sx={modalBoxStyle} {...props}></Box>;
}
