import { Button, ButtonProps } from "@mui/material";

const secondaryButtonStyle = {
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#6878D6",
  },
  bgcolor: "#1AB900",
  fontWeight: "bold",
  fontSize: "14px",
  borderRadius: "25px",
  padding: "10px 30px",
  textTransform: "none",
  whiteSpace: "nowrap",
  margin: "0px 10px",
};

export default function SecondaryButton(props: ButtonProps) {
  return <Button {...props} sx={{ ...secondaryButtonStyle }}></Button>;
}
