import { TableCell, TableHead, TableRow, Grid } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Tablehead = () => {
  return (
    <TableHead
      sx={{
        mt: 1,
      }}
    >
      <TableRow
        sx={{
          color: "white",
          backgroundColor: "#2A3541",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <TableCell
          sx={{
            fontSize: "18px",
            "& svg": {
              color: "white",
            },
          }}
        >
          <Grid container alignItems="center">
            <span style={{ color: "#ffffff" }}>Propiedades</span>
            <ArrowDownwardIcon />
          </Grid>
        </TableCell>
        <TableCell
          sx={{
            fontSize: "18px",
            "& svg": {
              color: "white",
            },
          }}
        >
          <Grid container alignItems="center">
            <span style={{ color: "#ffffff" }}>Tipología</span>
            <ArrowDownwardIcon />
          </Grid>
        </TableCell>
        <TableCell
          sx={{
            fontSize: "18px",
            "& svg": {
              color: "white",
            },
          }}
        >
          <Grid container alignItems="center">
            <span style={{ color: "#ffffff" }}>Inquilino</span>
            <ArrowDownwardIcon />
          </Grid>
        </TableCell>
        <TableCell
          sx={{
            fontSize: "18px",
            "& svg": {
              color: "white",
            },
          }}
        >
          <Grid container alignItems="center">
            <span style={{ color: "#ffffff" }}> $ Alquiler</span>
          </Grid>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
export default Tablehead;
