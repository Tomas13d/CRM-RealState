import { ArrowBack } from "@mui/icons-material";
import { ButtonProps, IconButton } from "@mui/material";
const ArrowBackButton = (props: ButtonProps) => {
  return (
    <IconButton
      {...props}
      onClick={() => window.history.back()}
      color="primary"
      sx={{
        marginRight: "10px",
        color: "white",
        backgroundColor: "#6878D6",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "#5878D6",
        },
      }}
    >
      <ArrowBack />
    </IconButton>
  );
};

export default ArrowBackButton;
