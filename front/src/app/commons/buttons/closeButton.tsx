import { IconButton, IconButtonProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CloseButton(props: IconButtonProps) {
  const closeButtonStyle = {
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#6878D6",
    },
    bgcolor: "#6878D6",
    fontSize: "40px",
    borderRadius: "10px",
  };

  return (
    <IconButton {...props}>
      <CloseIcon sx={closeButtonStyle} />
    </IconButton>
  );
}
