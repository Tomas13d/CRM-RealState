import { Button, ButtonProps } from "@mui/material";

const secondaryButtonStyle = {
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#6878D6",
  },
  bgcolor: "#F86343",
  fontWeight: "bold",
  fontSize: "14px",
  borderRadius: "25px",
  padding: "10px 30px",
  textTransform: "none",
  whiteSpace: "nowrap",
  margin: "0px 10px",
};

export default function CloseSecondaryButton(props: ButtonProps) {
  return <Button {...props} sx={{ ...secondaryButtonStyle }}></Button>;
}
