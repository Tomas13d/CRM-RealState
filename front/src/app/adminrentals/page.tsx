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
import { detalleAdminRentals } from "../services/acquistion.services";
import { Acquisition } from "../types/types.md";

const AdminRentals = () => {
  const [searchQuery, setSearchQuery] = useState("");

  async function obtenerDetalleRents() {
    try {
      const getAllRentsToAcquisition: Array<Acquisition> =
        await detalleAdminRentals();
      return getAllRentsToAcquisition;
    } catch (error) {
      console.error(error);
    }
  }

  /* Ver como devolver la promesa !!!!!!!!!!  
 const detalleRents:Acquisition[]= obtenerDetalleRents();
  Al tipo "Promise<Acquisition[] | undefined>" le faltan las propiedades siguientes del tipo "Acquisition[]": length, push, pop, concat y más.
  console.log(detalleAdminRentals()); */

  const inquilinos = [
    {
      id: 1,
      propiedad: "Casa 1",
      tipologia: "Casa",
      inquilino: "Juan Pérez",
      alquiler: "$1000",
    },
    {
      id: 2,
      propiedad: "Apartamento 5",
      tipologia: "Apartamento",
      inquilino: "María López",
      alquiler: "$800",
    },
  ];

  const filteredInquilinos = inquilinos.filter((inquilino) =>
    inquilino.propiedad.toLowerCase().includes(searchQuery.toLowerCase())
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
              Administración de alquileres
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
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table
                sx={{
                  borderCollapse: "separate",
                  borderSpacing: "0 0",
                  borderRadius: "20px",
                }}
              >
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
                        <span>Propiedades</span>
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
                        <span>Tipología</span>
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
                        <span>Inquilino</span>
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
                        <span>Alquiler</span>
                        <ArrowDownwardIcon />
                      </Grid>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredInquilinos.map((inquilino) => (
                    <TableRow
                      key={inquilino.id}
                      sx={{
                        backgroundColor: "#263448",
                      }}
                    >
                      <TableCell
                        sx={{
                          color: "white",
                        }}
                      >
                        {inquilino.propiedad}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {inquilino.tipologia}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {inquilino.inquilino}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {inquilino.alquiler}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Toaster position="top-right" reverseOrder={false} />
        </Container>
      </Layout>
    </>
  );
};

export default AdminRentals;
