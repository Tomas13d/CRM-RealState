import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info">
        Los caracteres a ingresar deben ser unicamente numéricos!
      </Alert>
    </Stack>
  );
}
