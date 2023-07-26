import { Button, ButtonProps } from "@mui/material";

const primaryButtonStyle = {
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#6878D6",
  },
  bgcolor: "#6878D6",
  fontWeight: "bold",
  fontSize: "14px",
  borderRadius: "25px",
  padding: "10px 20px",
  textTransform: "none",
};

export default function PrimaryButton(props: ButtonProps) {
  return <Button {...props} sx={{ ...primaryButtonStyle }}></Button>;
}
