"use client";
import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  InputAdornment,
  Grid,
} from "@mui/material";
import Layout from "../commons/layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";
import { Toaster } from "react-hot-toast";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CustomList from "../commons/listCommon";

const columns = [
  { key: "nombre", label: "Propiedad" },
  { key: "apellido", label: "Operacion" },
  { key: "tipologia", label: "Tipologia" },
  { key: "captacion", label: "Captacion" },
  { key: "preciolista", label: "Número de Captaciones" },
];

const data = [
  {
    nombre: "Casa en la playa",
    apellido: "Venta",
    tipologia: "Casa",
    captacion: "24/7/2022",
    preciolista: "$" + 250000,
  },
  {
    nombre: "Apartamento céntrico",
    apellido: "Alquiler",
    tipologia: "Apartamento",
    captacion: "24/7/2022",
    preciolista: "$" + 1200,
  },
  {
    nombre: "Terreno rural",
    apellido: "Venta",
    tipologia: "Terreno",
    captacion: "24/7/2022",
    preciolista: "$" + 80000,
  },
];

const Catchments = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInquilinos = data.filter((data) =>
    data.nombre.toLowerCase().includes(searchQuery.toLowerCase())
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
              Captaciones
              <Typography variant="subtitle1" sx={{ color: "white", mt: 3 }}>
                Buscar
              </Typography>
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
            </Typography>

            <CustomList columns={columns} data={data} />
          </Box>
          <Toaster position="top-right" reverseOrder={false} />
        </Container>
      </Layout>
    </>
  );
};

export default Catchments;
