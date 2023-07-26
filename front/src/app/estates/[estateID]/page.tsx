"use client";
import * as React from "react";
import {
  Grid,
  Modal,
  Typography,
  Button,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
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
import { Estate } from "@/app/types/types.md";

export default function SingleEstateModal(estate: Estate) {
  //replace placeholder data with Estate info
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const h4Style = { fontSize: "24px", fontWeight: "bold" };
  const h5Style = { fontSize: "24px" };
  const buttonStyle = {
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#6778d6",
    },
    bgcolor: "#6778d6",
    fontWeight: "bold",
    fontSize: "14px",
    borderRadius: "25px",
    padding: "10px 20px",
    textTransform: "none",
  };
  const closeButtonStyle = {
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#6778d6",
    },
    bgcolor: "#6778d6",
    fontSize: "40px",
    borderRadius: "10px",
  };

  const subtitleStyle = {
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
  };
  const subtitleBodyStyle = {
    color: "white",
    fontSize: "14px",

    marginBottom: "15px",
  };

  return (
    <Box>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <IconButton onClick={handleClose}>
                <CloseIcon sx={closeButtonStyle} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={8}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Typography sx={{ ...h4Style, marginBottom: "10px" }}>
                Titulo del Departamento
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Button sx={buttonStyle}>Iniciar chat</Button>
            </Grid>
          </Grid>

          <Typography sx={{ ...h5Style, margin: "10px 0px" }}>
            Informacion general
            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "10px 0px" }}
            ></Divider>
          </Typography>

          <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
            <Grid item xs={6}>
              <Typography sx={subtitleStyle}>Propietario</Typography>
              <Typography sx={subtitleBodyStyle}>Juan Perez</Typography>
              <Typography sx={subtitleStyle}>Teléfono de contacto</Typography>
              <Typography sx={subtitleBodyStyle}>11 1234 5678</Typography>
              <Typography sx={subtitleStyle}>Email</Typography>
              <Typography sx={subtitleBodyStyle}>ejemplo@email.com</Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"center"}>
              <Box
                component="img"
                src={
                  "https://images.pexels.com/photos/700558/pexels-photo-700558.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="estate picture"
                sx={{ height: "200px", width: "auto" }}
              />
            </Grid>
            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "10px 0px" }}
            ></Divider>
          </Grid>
          <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
            <Grid item xs={6}>
              <Typography sx={subtitleStyle}>Tipo de producto</Typography>
              <Typography sx={subtitleBodyStyle}>Casa</Typography>
              <Typography sx={subtitleStyle}>Dirección</Typography>
              <Typography sx={subtitleBodyStyle}>
                Direccion falsa 123
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={subtitleStyle}>Tipo de operación</Typography>
              <Typography sx={subtitleBodyStyle}>Venta</Typography>
              <Typography sx={subtitleStyle}>Barrio</Typography>
              <Typography sx={subtitleBodyStyle}>Los Alamos</Typography>
            </Grid>
            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "20px 0px" }}
            ></Divider>
          </Grid>
          <Grid container spacing={1} sx={{ margin: "20px 0px" }}>
            <Grid item xs={6}>
              <Typography sx={subtitleStyle}>Agente asignado</Typography>
              <Typography sx={subtitleBodyStyle}>Don Draper</Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
