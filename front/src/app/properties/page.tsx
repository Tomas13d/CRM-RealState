"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Layout from "../commons/layout";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchIcon from "@mui/icons-material/Search";
import CustomList from "../commons/listCommon";

const columns = [
  { key: "nombre", label: "Nombre" },
  { key: "subCategoria", label: "SubCategoria" },
  { key: "operacion", label: "Operacion" },
  { key: "button", label: "" },
];

const data = [
  {
    nombre: "Casa en la playa",
    subCategoria: "2 Habitaciones",
    operacion: "Venta",
  },
  {
    nombre: "Penthouse",
    subCategoria: "8 Habitaciones",
    operacion: "Alquiler",
  },
  {
    nombre: "Apartamento céntrico",
    subCategoria: "Monoambiente",
    operacion: "Venta",
  },
];

const Properties: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Layout>
        <Container component="main" maxWidth="xl">
          <Box
            sx={{
              px: 4,
              py: 1,
              marginTop: 15,
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              background: "transparent",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontSize: "35px",
                mt: 2,
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "bold",
                alignSelf: "flex-start",
                marginBottom: "30px",
                marginRight: "40px",
                color: "white",
              }}
            >
              <IconButton
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
                <ArrowBackIcon />
              </IconButton>{" "}
              Propiedades
              
            </Typography>
            <Grid container spacing={2} sx={{ margin: "10px", alignItems: "center" }}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ color: "white", mt: 1 }}>
                Buscar
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <TextField
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    color: "white",
                    backgroundColor: "#2A3541",
                    borderRadius: "20px",
                    overflow: "hidden",
                    mt: 1,
                  },
                }}
                inputProps={{
                  style: { color: "white" },
                }}
              />

              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{
                  mt: 1,
                  mb: 1,
                  borderRadius: "50px",
                  width: "300px",
                  height: "50px",
                  alignSelf: "flex-end",
                  marginLeft: "100px",
                }}
              >
                Agregar Propiedad
              </Button>
            </Grid>
          </Grid>

            <CustomList
              columns={columns}
              data={filteredData.map((item) => ({
                ...item,
                button: (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 1,
                      mb: 1,
                      borderRadius: "50px",
                      width: "150px",
                      height: "40px",
                      alignSelf: "flex-end",
                    }}
                  >
                    Ver Detalle
                  </Button>
                ),
              }))}
            />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Properties;
