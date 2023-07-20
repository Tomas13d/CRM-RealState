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
} from "@mui/material";
import Layout from "../commons/layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AdminRentals = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
          <Typography variant="h3" align="center" sx={{ mt: 2 }}>
            Administración de alquileres
          </Typography>
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
          Registrar nuevo usuario
          <TextField
            label="Buscar inquilino por propiedad"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Propiedades</TableCell>
                  <TableCell>Tipología</TableCell>
                  <TableCell>Inquilino</TableCell>
                  <TableCell>Alquiler</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInquilinos.map((inquilino) => (
                  <TableRow key={inquilino.id}>
                    <TableCell>{inquilino.propiedad}</TableCell>
                    <TableCell>{inquilino.tipologia}</TableCell>
                    <TableCell>{inquilino.inquilino}</TableCell>
                    <TableCell>{inquilino.alquiler}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Layout>
    </>
  );
};

export default AdminRentals;
